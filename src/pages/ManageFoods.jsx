import { useEffect, useMemo, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useTable } from "react-table";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
const ManageFoods = () => {
  const axios = useAxios();
  const [dataCard, setDataCard] = useState([]);
    const {user} = useAuth();
  useEffect(() => {
    axios.get(`/request-foods/?email=${user?.email}`).then((res) => {
      setDataCard(res.data);
    });
  }, [user?.email,axios]);
  const handleDelete = (id) => {
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
  const handleManage = () => {};
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
            {/* <button onClick={() => handleEdit(row.original._id)} className="btn btn-ghost btn-sm"><BiEdit className="text-xl"></BiEdit></button> */}
            <button
              onClick={() => handleDelete(row.original._id)}
              className="btn btn-ghost btn-sm text-xl"
            >
              X
            </button>
            <button
              onClick={() => handleManage(row.original)}
              className="btn btn-ghost btn-sm normal-case"
            >
              Manage
            </button>
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
