import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import RequestProduct from "../../components/RequestProduct";
import { Helmet } from "react-helmet-async";

const FoodDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const [food, setFood] = useState();
  useEffect(() => {
    axios.get(`/foods/${id}`).then((res) => {
      setFood(res?.data);
    });
  }, [axios, id]);

  return (
    <div className="flex justify-center flex-col mb-5">
      <Helmet>
        <title>
          Food Fusion | Food Details
        </title>
      </Helmet>
      <div className="w-3/4 mt-2.5 mb-5 text-center mx-auto">
        <h2 className="text-lg font-semibold">Donor Information</h2>
        <div className="flex items-center justify-center my-4 gap-5">
          <h2 className="primary-color">{food?.donarName}</h2>
          <div className="avatar">
            <div className="w-14 rounded-full ring-offset-base-100 ring-offset-2">
              <img src={food?.donar_img} />
            </div>
          </div>
        </div>
        <h2 className="text-xl ">
          <span className="text-2xl font-bold primary-color">
            PickUp Location:<span className="text-black text-xl"> {food?.pickUp_location}</span>
          </span>
        </h2>
      </div>
      <div className=" md:w-1/2 bg-white border border-gray-200 rounded-lg shadow mx-auto">
        <div className="p-5">
          <img
            className=" w-full rounded-lg h-[400px]"
            src={food?.food_img}
            alt="product image"
          />
        </div>
        <div className="px-5 pb-5">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-xl font-semibold">Name:{food?.foodName}</span>
              
            </h2>
            <h5 className="text-xl mb-2 mt-2">
              <span className="text-xl font-semibold">Expire in:{food?.expDate}</span>
            </h5>
            <h5 className="text-xl h-12 ">
              <span className="text-xl font-semibold">Notes:{food?.additional_Notes}</span>
              
            </h5>
            <h5 className="text-xl ">
              <span className="text-xl font-semibold ">Serve it to: {food?.quantity} person</span>
              
            </h5>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
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
                  <button className="btn btn-circle btn-ghost absolute right-24 top-5 md:right-[320px] md:top-6 text-2xl">
                    ✕
                  </button>
                </form>
                <RequestProduct food={food}/>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
