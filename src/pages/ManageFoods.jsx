import { useEffect, useMemo, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useTable } from "react-table";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
const ManageFoods = () => {
  const axios = useAxios();
  const [dataCard, setDataCard] = useState([]);
    const {user} = useAuth();

    // data fetching
  useEffect(() => {
    axios.get(`/manage-foods/?email=${user?.email}`).then((res) => {
      setDataCard(res.data);
    });
  }, [user?.email,axios]);

  // handle delete food
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/delete/request-food/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remaining = dataCard?.filter(data=> data._id !== id)
            setDataCard(remaining)
          }
        });
      }
    });
  };
  const columns = useMemo(
    () => [
      {
        Header: "Food Name",
        accessor: "foodName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: " ExpireDate",
        accessor: "expDate",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Actions", // Custom column for buttons
        accessor: "actions", // A virtual accessor (not tied to actual data)
        Cell: ({ row }) => (
          <div className="flex gap-5">
            <Link to={`/manage-update/${row.original?._id}`}>
              <button className="btn btn-ghost btn-sm">
                <BiEdit className="text-xl"></BiEdit>
              </button>
            </Link>
            
            <button
              onClick={() => handleDelete(row.original._id)}
              className="btn btn-ghost btn-sm text-xl"
            >
              X
            </button>
            <Link to={`/manage-page/${row.original._id}`}>
            <button
              className="btn btn-ghost btn-sm normal-case"
            >
              Manage
            </button>
            </Link>
          </div>
        ),
      },
    ],
    [dataCard]
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: dataCard });
  return (
    <div className="">
      <Helmet>
        <title>
          Food Fusion | Manage Foods
        </title>
      </Helmet>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            /* eslint-disable */
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <>
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                </>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFoods;
