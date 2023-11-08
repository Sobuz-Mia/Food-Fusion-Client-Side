import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import AvailableFoodCard from "../components/AvailableFoodCard";
import { FaRegHandPointRight } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";

const AvailavleFoods = () => {
  const axios = useAxios();
  const [foods, setFoods] = useState([]);
  


  useEffect(() => {
    axios.get("/foods").then((res) => {
      setFoods(res.data);
    });
  }, [axios]);
  const handleSorting = e =>{
    e.preventDefault();
    const sortValue = e.target.value;
  }
  // console.log(searchValue);

  const handleSearchFiled = (e) =>{
    const value = e.target.value;
    
    axios.get(`/foods/?search=${value}`)
    .then(res=>{
      setFoods(res.data)
    })
  }

  return (
    <div>
      <Helmet>
        <title>
          Food Fusion | Available Foods
        </title>
      </Helmet>
      <div className="flex justify-end gap-5 my-4">
        <div className="flex gap-5 items-center">
          <p className="w-full flex items-center gap-5 text-2xl">Find your food <FaRegHandPointRight/></p>
        <input  type="text" onChange={handleSearchFiled} placeholder="Search here" className="input input-bordered  w-full max-w-md" />
        </div>
        <div>
          <select name="" id="" onChange={handleSorting}>
            <option value="">sort by date</option>
            <option value="asd">Asc</option>
            <option value="dsc">Dsc</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {foods?.map((food) => (
          <AvailableFoodCard food={food} key={food._id}></AvailableFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailavleFoods;
