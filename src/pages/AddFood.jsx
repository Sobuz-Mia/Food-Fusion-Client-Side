import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const AddFood = () => {
    const {user} = useAuth();
  

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.name.value;
    const url = form.url.value;
    const quantity = form.quantity.value;
    const location = form.location.value;
    const ExpireDate = form.date.value;
    const notes = form.notes.value;

    const addFood = {
        foodName,
        food_img :url,
        quantity,
        pickUp_location:location,
        expDate : ExpireDate,
        additional_Notes : notes || "",
        donarName : user?.displayName,
        donarEmail : user?.email,
        donar_img : user?.photoURL,
        status : 'available' || '',
    }

    axios.post('http://localhost:5000/api/v1/foods',addFood)
    .then(res=>{
        if(res.data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "New Food add successfully",
                showConfirmButton: false,
                timer: 1500
              });
              form.reset()
        }
    })
  };

  return (
    <div>
      <Helmet>
        <title>
          Food Fusion | Add Food
        </title>
      </Helmet>
      <form onSubmit={handleAddFood}>
        <div className="md:w-1/2 mx-auto bg-[#F3F6FB] p-10 mt-5 border-none my-10">
          <h2 className="text-4xl mb-7 text-black font-bold text-center">
            Add New Food
          </h2>
          <div className="grid gap-4 mb-6 md:grid-cols-2">
            <div>
              <input
                type="text"
                className="bg-white  text-gray-900 text-sm border-none w-full p-2.5"
                placeholder="Food name"
                name="name"
              />
            </div>
            <div>
              <input
                type="text"
                className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
                placeholder="Food img url"
                name="url"
              />
            </div>
            <div>
              <input
                type="text"
                className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
                placeholder="Food quantity"
                name="quantity"
              />
            </div>
            <div>
              <input
                type="text"
                className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
                placeholder="Location"
                name="location"
              />
            </div>
            <div>
              <input
                type="date"
                className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
                placeholder="Expire Date"
                name="date"
              />
            </div>
            <div>
              <input
                type="text"
                className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
                placeholder="Additional notes"
                name="notes"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-black w-full my-4  rounded-lg px-5 py-2.5 text-center"
          >
            Add Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
