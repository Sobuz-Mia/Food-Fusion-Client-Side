import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import AvailableFoodCard from "../components/AvailableFoodCard";

const AvailavleFoods = () => {
  const axios = useAxios();
  const [foods, setFoods] = useState([]);
  const [selectItem,setSelectItem] = useState('');

  useEffect(() => {
    axios.get("/foods").then((res) => {
      setFoods(res.data);
    });
  }, [axios]);
  const handleSelect = e =>{
    setSelectItem(e.target.value)
  }
  console.log(selectItem);
  return (
    <div>
        <div>
            <div>
                <select name="" id="" onChange={handleSelect} >
                    <option value="" >Select</option>
                    {foods.map(food=><option value={food?.foodName} key={food._id}>{food?.foodName}</option>)}
                    
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
