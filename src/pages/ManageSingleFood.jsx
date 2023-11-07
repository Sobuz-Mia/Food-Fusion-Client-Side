import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const ManageSingleFood = () => {
  // custom hook
  const axios = useAxios();
  const { id } = useParams();
  // data fetch using tansTackQuery
  const { data,refetch} = useQuery({
    queryKey: ["requestedFood"],
    queryFn: async () => {
      const res = await axios.get(`/manage/single-food/${id}`);

      return res.data;
    },
  });

  console.log(data);
  // loading spinner
  // if(isLoading) {
  //   return <div className="w-24 mx-auto flex items-center h-screen">
  //   <span className="loading loading-spinner text-secondary w-full"></span>
  // </div>
  // }
  // handle pending request update
  const handlePendingRequest = (id) => {
    console.log(id)
    axios.patch(`/update-status/${id}`,{
        status : 'Delivered'
    })
    .then(res=>{
        if(res.data.modifiedCount){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Updated successfully",
                showConfirmButton: false,
                timer: 1500
              });
              refetch()
        }
    })
  };
  return (
    <div>
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
              <th>Email</th>
              <th>Request Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
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
                        src={data?.requester_img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{data?.requesterName}</div>
                    <div className="text-sm opacity-50">{data?.foodName}</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  {data?.requesterEmail}
                </span>
              </td>
              <td>{data?.requestDate}</td>
              <th>
                <button
                  onClick={() => handlePendingRequest(data._id)}
                  className="btn btn-ghost text-lg normal-case"
                >
                  {data?.status}
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSingleFood;
