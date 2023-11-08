import { Helmet } from "react-helmet-async";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const FoodRequest = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["myRequestFood"],
    queryFn: async () => {
      const res = await axios.get(
        `https://community-food-sharing-server-side.vercel.app/api/v1/myRequest/food/?email=${user?.email}`
      );
      return res.data;
    },
  });
  const handleCancelRequest = (info) => {
    if (info.item !== "available") {
      Swal.fire({
        title: "Oops... Sorry",
        text: "This are not available!",
      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be to cancel the request!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/delete/request-food/${info.itemId}`).then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
        }
      });
    }
  };

  if (isLoading) {
    return (
      <div className="w-24 mx-auto flex items-center h-screen">
        <span className="loading loading-spinner text-secondary w-full"></span>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Food Fusion | Food Request</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>PickUp Location</th>
              <th>Expire Date</th>
              <th>Request Date</th>
              <th>Donate Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.length > 0 ? data?.map((item) => (
              <>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.donar_img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.donarName}</div>
                        <div className="text-sm opacity-50">
                          {item?.foodName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {item?.pick_location}
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {item?.expDate}
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {item?.requestDate}
                    </span>
                  </td>
                  <td> $ {item?.donateAmount}</td>
                  <th>
                    <button className="btn btn-ghost text-lg normal-case">
                      {item?.status}
                    </button>
                  </th>
                  <td>
                    <button
                      onClick={() =>
                        handleCancelRequest({
                          item: item?.status,
                          itemId: item?._id,
                        })
                      }
                      className="btn btn-ghost text-red-400"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              </>
            ))
            :
            ''
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodRequest;
