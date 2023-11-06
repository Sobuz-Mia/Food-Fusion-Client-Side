import { BiSolidSelectMultiple } from 'react-icons/bi';
const OurMission = () => {
  return (
    <div className="my-10 bg-[#F7F7F7] w-full">
      <div className="text-center py-20">
        <h2 className="text-5xl font-bold border-b-4 border-[#B19D58] w-[300px] mx-auto mb-10">
          Our Mission
        </h2>
        <p className="text-xl font-semibold mb-3">
          To provide our neighbours with access to healthy food by:
        </p>
        <p className="text-xl font-medium mb-3">
          Promoting the benefits of nutrition; building community <br />{" "}
          partnerships; and supporting our clients through a variety of <br />{" "}
          life challenges.
        </p>
      </div>
      <div className="text-center pb-10">
        <h2 className="text-5xl font-bold border-b-4 border-[#B19D58] w-[300px] mx-auto mb-10">
          Our Vision
        </h2>
        <p className="text-xl font-semibold mb-3">
          That no person or family in our community goes hungry.
        </p>
      </div>
      <div className="flex">
        <div className="p-10 w-1/2">
          <img
            src="https://img.freepik.com/free-photo/volunteers-helping-packing-donations-world-food-day_23-2148637932.jpg?w=826&t=st=1699297456~exp=1699298056~hmac=fb535008fd9657a7ae941530613053448f106b8c4e59e254f8262a6a0c208ab0"
            alt=""
          />
        </div>
        <div className="flex-1 p-5">
          <div>
            <h2 className="text-[#817341] text-3xl mb-3">Who We Are</h2>
            <p className="text-xl">
              Community Food Share has been serving Dundas and Stormont Counties
              for over 30 years. Starting as a smaller Dundas County Food Bank,
              the registered charity since expanded its scope to offer a wide
              range of services.
            </p>
          </div>
          <div>
            <h2 className="text-[#817341] text-3xl my-3">Our Services</h2>
            <p className="text-xl">
              Community Food Share partners with community groups to offer a
              variety of services, including:
              <h5 className='flex items-center gap-3 my-5'><BiSolidSelectMultiple className='text-3xl'/> Healthy Choices Food Bank</h5>
              <h5 className='flex items-center gap-3 my-5'><BiSolidSelectMultiple className='text-3xl'/> Community Gardens</h5>
              <h5 className='flex items-center gap-3 my-5'><BiSolidSelectMultiple className='text-3xl'/> Community Advocate</h5>
              <h5 className='flex items-center gap-3 my-5'><BiSolidSelectMultiple className='text-3xl'/> Growing Futures</h5>
              <button className="btn btn-outline text-[#817341] my-7">Learn More</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
