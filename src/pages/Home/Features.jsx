import { useEffect, useState } from "react";
import Feature from "./Feature";
import { Link } from "react-router-dom";
import axios from "axios";
// import axios from "axios";

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    axios
      .get("https://community-food-sharing-server-side.vercel.app/api/v1/foods")
      .then((res) => {
        setFeatures(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="text-center ">
        <h2 className="mb-5 text-4xl font-bold">Our Foods Item</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {features?.slice(0, 6).map((feature) => (
          <Feature key={feature._id} feature={feature} />
        ))}
      </div>
      <div className="text-center">
        <Link to={'/available-foods'} className="text-xl btn btn-outline my-3 normal-case primary-color">Show All</Link>
      </div>
    </div>
  );
};

export default Features;
