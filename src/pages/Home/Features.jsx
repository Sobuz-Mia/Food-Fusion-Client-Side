import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Feature from "./Feature";
// import axios from "axios";

const Features = () => {
  const axios = useAxios();
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    axios
      .get("/all-features")
      .then((res) => {
        setFeatures(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axios]);
  return (
    <div>
        <div className="text-center mb-5 text-4xl font-bold">
            <h2>Our Foods Item</h2>
        </div>
      <div className="grid md:grid-cols-3 gap-5">
        {features?.slice(0, 6).map((feature) => (
          <Feature key={feature._id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
