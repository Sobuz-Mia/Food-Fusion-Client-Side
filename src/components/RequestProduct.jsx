
const RequestProduct = () => {
    return (
        <div>
            <form >
      <div className="md:w-1/2 mx-auto bg-[#F3F6FB] p-10 mt-5 border-none my-10">
        <h2 className="text-4xl mb-7 text-black font-bold text-center">
          Request item
        </h2>
        <div className="grid gap-4 mb-6 md:grid-cols-2">
          <div>
            <input
              type="text"
              className="bg-white  text-gray-900 text-sm border-none w-full p-2.5"
              placeholder="Food name"
              disabled
              name="name"
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter Brand Name"
              name="brandName"
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter price"
              name="price"
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter product rating"
              name="rating"
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter Description"
              name="description"
            />
          </div>
        </div>
        <div className="w-full">
          <input
            type="text"
            id="first_name"
            className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
            placeholder="Upload photo url"
            name="photo"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-black w-full my-4  rounded-lg px-5 py-2.5 text-center"
        >
          Add a new Product
        </button>
      </div>
    </form>
        </div>
    );
};

export default RequestProduct;