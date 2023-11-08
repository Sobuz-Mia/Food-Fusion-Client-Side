import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const AvailableFoodCard = ({ food }) => {
  const {
    _id,
    foodName,
    quantity,
    pickUp_location,
    expDate,
    additional_Notes,
    donarName,
    donar_img,
  } = food;
  // console.log(food);
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
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
            <span className="text-xl font-semibold">Name:</span> {foodName}
          </h2>
          <h5 className="text-xl h-12">
            <span className="text-xl font-semibold">Location:</span>
            {pickUp_location} person
          </h5>
          <h5 className="text-xl mb-2 mt-2">
            <span className="text-xl font-semibold">Expire in:</span>
            {expDate} person
          </h5>
          <h5 className="text-xl h-12 ">
            <span className="text-xl font-semibold">Notes:</span>
            {additional_Notes} person
          </h5>
          <h5 className="text-xl ">
            <span className="text-xl font-semibold ">Serve it to :</span>
            {quantity} person
          </h5>
        </div>
        <div className="mt-2.5 mb-5 text-center">
          <h2 className="text-lg font-semibold">Donor Information</h2>
          <div className="flex items-center gap-5 justify-around">
            <h2 className="primary-color">{donarName}</h2>
            <div className="avatar">
              <div className="w-14 rounded-full ring-offset-base-100 ring-offset-2">
                <img src={donar_img} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <Link
            to={`/food-Details/${_id}`}
            className={food.status ===  "Delivered" ?'bg-white text-slate-400' :'text-white bg-primary hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '}
          >
            <button
              className={food?.status === "Delivered" ? "disabled" : "enabled"}
              disabled={food?.status === "Delivered"}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
AvailableFoodCard.propTypes = {
  food: PropTypes.object,
};
export default AvailableFoodCard;
