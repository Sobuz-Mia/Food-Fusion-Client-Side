import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

const ManageSingleFood = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const { data,isLoading,refetch} = useQuery({
    queryKey: ["requestedFood"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/manage/single-food/?email=${user?.email}`
      );
      return res.data;
    },
  });
  if(isLoading) {
    return <div className="w-24 mx-auto flex items-center h-screen">
    <span className="loading loading-spinner text-secondary w-full"></span>
  </div>
  }
  const handlePendingRequest = id =>{
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
    console.log(id)
  }
  console.log(data);
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
            {data?.map((item) => (
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
                            src={item?.requester_img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.requesterName}</div>
                        <div className="text-sm opacity-50">{item?.foodName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                     {item?.requesterEmail}
                    </span>
                  </td>
                  <td>{item?.requestDate}</td>
                  <th>
                    <button onClick={()=>handlePendingRequest(item._id)} className="btn btn-ghost text-lg normal-case">{item?.status}</button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSingleFood;
