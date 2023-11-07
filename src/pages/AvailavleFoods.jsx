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
        <input type="text" placeholder="Search here" className="input input-bordered  w-full max-w-md" />
        </div>
        <div>
          <select name="" id="">
            <option value="">sort by date</option>
            <option value="">Asc</option>
            <option value="">Dsc</option>
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
