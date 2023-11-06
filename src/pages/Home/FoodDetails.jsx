import { Link, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import RequestProduct from "../../components/RequestProduct";

const FoodDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const [food, setFood] = useState();
  useEffect(() => {
    axios.get(`/food-Details/${id}`).then((res) => {
      setFood(res?.data);
    });
  }, [axios, id]);
  return (
    <div className="flex justify-center flex-col mb-5">
      <div className="w-3/4 mt-2.5 mb-5 text-center mx-auto">
        <h2 className="text-lg font-semibold">Donor Information</h2>
        <div className="flex items-center justify-center my-4 gap-5">
          <h2 className="primary-color">{food?.donator?.name}</h2>
          <div className="avatar">
            <div className="w-14 rounded-full ring-offset-base-100 ring-offset-2">
              <img src={food?.donator?.image} />
            </div>
          </div>
        </div>
        <h2 className="text-xl ">
          <span className="text-2xl font-bold primary-color">
            PickUp Location:
          </span>{" "}
          {food?.pickupLocation}
        </h2>
      </div>
      <div className=" md:w-1/2 bg-white border border-gray-200 rounded-lg shadow mx-auto">
        <div className="p-5">
          <img
            className=" w-full rounded-lg h-[400px]"
            src={food?.foodImage}
            alt="product image"
          />
        </div>
        <div className="px-5 pb-5">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-xl font-semibold">Name:</span>{" "}
              {food?.foodName}
            </h2>
            <h5 className="text-xl mb-2 mt-2">
              <span className="text-xl font-semibold">Expire in:</span>
              {food?.expiredDateTime} person
            </h5>
            <h5 className="text-xl h-12 ">
              <span className="text-xl font-semibold">Notes:</span>
              {food?.additionalNotes} person
            </h5>
            <h5 className="text-xl ">
              <span className="text-xl font-semibold ">Serve it to :</span>
              {food?.foodQuantity} person
            </h5>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            {/* <Link
              to={`/food-Details/`}
              className="text-white bg-primary hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Request
            </Link> */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="text-white bg-primary hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Request
            </button>
            <dialog id="my_modal_3" className="modal w-full rounded-lg">
              <div className="md:w-full">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-24 top-5 md:right-[320px] md:top-12">
                    ✕
                  </button>
                </form>
                <RequestProduct/>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
