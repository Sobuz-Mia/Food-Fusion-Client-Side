import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Feature = ({ feature }) => {
  const {
    _id,
    foodImage,
    foodName,
    donator,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
  } = feature;
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="p-5">
        <img
          className=" w-full rounded-lg"
          src={foodImage}
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
            {pickupLocation} person
          </h5>
          <h5 className="text-xl mb-2 mt-2">
            <span className="text-xl font-semibold">Expire in:</span>
            {expiredDateTime} person
          </h5>
          <h5 className="text-xl h-12 ">
            <span className="text-xl font-semibold">Notes:</span>
            {additionalNotes} person
          </h5>
          <h5 className="text-xl ">
            <span className="text-xl font-semibold ">Serve it to :</span>
            {foodQuantity} person
          </h5>
        </div>
        <div className="mt-2.5 mb-5 text-center">
          <h2 className="text-lg font-semibold">Donor Information</h2>
          <div className="flex items-center gap-5 justify-around">
            <h2 className="primary-color">{donator?.name}</h2>
            <div className="avatar">
              <div className="w-14 rounded-full ring-offset-base-100 ring-offset-2">
                <img src={donator?.image} />
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
            className="text-white bg-primary hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};
Feature.propTypes = {
    feature:PropTypes.object
}
export default Feature;
