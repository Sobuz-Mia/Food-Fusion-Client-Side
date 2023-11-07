import PropTypes from "prop-types";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const RequestProduct = ({ food }) => {
  const navigate = useNavigate();
  const axios = useAxios();
  const {user} = useAuth();
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1; 
  const year = date.getFullYear();
  const currentDate = day + '/' + month + '/' + year;
  const handleRequestFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const additionalNotes = form.notes.value;
    const donation = form.donate.value;
    const requestFood = {
      foodName: food.foodName,
      food_img: food.food_img,
      expDate: food.expDate,
      status: 'Pending',
      donarEmail : food.donarEmail,
      donarName: food.donarName,
      donar_img : food.donar_img,
      requestDate :currentDate,
      requesterEmail : user?.email,
      requesterName: user?.displayName,
      requester_img : user?.photoURL,
      donateAmount : donation,
      pick_location :food.pickUp_location,
      food_id: food._id,
      additionalNotes
    };
    axios.post('/request-foods',requestFood)
    .then(res=>{
      if(res.data.insertedId){
        Swal.fire({
          position: "center",
          icon: "success",
          title: " Your request accepted",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset()
        navigate('/available-foods')
      }
    })
  };

  console.log(food);
  return (
    <form onSubmit={handleRequestFood}>
      <div className="md:w-1/2 mx-auto bg-[#F3F6FB] p-10 mt-5 border-none my-10">
        <h2 className="text-4xl mb-7 text-black font-bold text-center">
          Request for Food
        </h2>
        <div className="grid gap-4 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="">Foods name</label>
            <input
              type="text"
              disabled
              defaultValue={food?.foodName}
              className="bg-white  text-gray-900 text-sm border-none w-full p-2.5"
              placeholder="Food name"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="">Foods quantity</label>
            <input
              type="text"
              disabled
              defaultValue={food?.quantity + " person to serve"}
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Food quantity"
              name="quantity"
            />
          </div>
          <div>
            <label htmlFor="">Location</label>
            <input
              type="text"
              disabled
              defaultValue={food?.pickUp_location}
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Location"
              name="location"
            />
          </div>
          <div>
            <label htmlFor="">additional notes</label>
            <input
              type="text"
              defaultValue={food?.additional_Notes}
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="notes"
              name="notes"
            />
          </div>
          <div>
            <input
              type="text"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="$ Donate amount"
              name="donate"
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-black w-full my-4  rounded-lg px-5 py-2.5 text-center"
        >
          Food Request
        </button>
      </div>
    </form>
  );
};
RequestProduct.propTypes = {
  food: PropTypes.object,
};
export default RequestProduct;
