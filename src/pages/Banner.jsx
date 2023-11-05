import donation from "../assets/images/donate.jpg";
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={donation} className="w-1/2 rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">
            Working Together, To Feed Our Neighbors
          </h1>
          <p className="py-6">
            “I am proud to say I volunteer for Community Food Share. You all are
            doing incredible things for your neighbors and volunteers.”
          </p>
          <button className="text-2xl font-bold">Thanks</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
