
const ManageUpdate = () => {
    const handleUpdate = (e) =>{
        e.preventDefault();
    }
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
            //   defaultValue={food?.foodName}
              className="bg-white  text-gray-900 text-sm border-none w-full p-2.5"
              placeholder="Food name"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="">Foods quantity</label>
            <input
              type="text"
            //   defaultValue={food?.quantity + " person to serve"}
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Food quantity"
              name="quantity"
            />
          </div>
          <div>
            <label htmlFor="">Location</label>
            <input
              type="text"
            //   defaultValue={food?.pickUp_location}
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Location"
              name="location"
            />
          </div>
          <div>
            <label htmlFor="">additional notes</label>
            <input
              type="text"
            //   defaultValue={food?.additional_Notes}
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="notes"
              name="notes"
            />
          </div>
          <div>
            <input
              type="text"
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