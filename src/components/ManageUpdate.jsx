import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const ManageUpdate = () => {
    const navigate = useNavigate();
  const axios = useAxios();
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["manage-foods"],
    queryFn: async () => {
      const res = await axios.get(`/request-food/${id}`);
      return res;
    },
  });
 
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.name.value;
    const food_img = form.url.value;
    const email = form.email.value;
    const expDate = form.date.value;
    const additional_Notes = form.notes.value;
    const status = form.status.value;
    const donateAmount = form.donate.value;
    const updateData = {
        foodName,
        food_img,
        email,
        expDate,
        additional_Notes,
        status,
        donateAmount
    }
   
    axios.put(`/update/request-food/${id}`,updateData)
    .then(res=>{
        if(res.data.modifiedCount>0){
            Swal.fire({
                position: "center",
                icon: "success",
                title: " Update successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/manage-foods')
        }
    })
    .catch(err=>{
        console.log(err)
    })
  };
  return (
    <form onSubmit={handleUpdate}>
      <div className="md:w-1/2 mx-auto bg-[#F3F6FB] p-10 mt-5 border-none my-10">
        <h2 className="text-4xl mb-7 text-black font-bold text-center">
          Update Food
        </h2>
        <div className="grid gap-4 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="">Foods name</label>
            <input
              type="text"
                defaultValue={data?.data?.foodName}
              className="bg-white  text-gray-900 text-sm border-none w-full p-2.5"
              placeholder="Food name"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="">Foods image</label>
            <input
              type="text"
                defaultValue={data?.data?.food_img}
              className="bg-white  text-gray-900 text-sm border-none w-full p-2.5"
              placeholder="images url"
              name="url"
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
                defaultValue={data?.data?.email}
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="email"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="">expDate</label>
            <input
              type="date"
                defaultValue={data?.data?.expDate}
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="date"
              name="date"
            />
          </div>
          <div>
            <label htmlFor="">additional notes</label>
            <input
              type="text"
                defaultValue={data?.data?.additional_Notes}
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="notes"
              name="notes"
            />
          </div>
          <div>
            <label htmlFor="">Status</label>
            <input
              type="text"
                defaultValue={data?.data?.status}
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="status"
              name="status"
            />
          </div>
          <div>
            <label htmlFor="">Donation amount</label>
            <input
              type="text"
              defaultValue={data?.data?.donateAmount}
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
          Update Request
        </button>
      </div>
    </form>
  );
};

export default ManageUpdate;
