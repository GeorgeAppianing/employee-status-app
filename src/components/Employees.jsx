import { GlobalContext } from "../GlobalContext";
import { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { PopUp } from "./PopUp";
const Employees = () => {
  const {
    currentPage,
    displayRows,
    totalNumberOfPages,
    NextPage,
    PrevPage,
    handleDelete,
    popUp,
  } = useContext(GlobalContext);

  return (
    <div className="overflow-x-auto">
      <div>
        <table className="min-w-full mt-6 text-sm font-light table-fixed">
          <thead className="bg-slate-100">
            <tr className="text-left text-gray-500">
              <th className="p-2 w-1/5">Name</th>
              <th className="p-2 w-1/5">Position</th>
              <th className="p-2 w-1/5">Department</th>
              <th className="p-2 w-1/5">Status</th>
              <th className="p-2 w-1/5">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white p-6">
            {displayRows.map((employee) => (
              <tr key={employee.id} className="text-left hover:bg-gray-100">
                <td className="flex items-center gap-2 p-2 text-left w-full border-b-1 border-gray-200">
                  <img
                    src={employee.avatar}
                    alt=""
                    className="h-10 rounded-full"
                  />
                  {employee.name}
                </td>
                <td className="w-1/5 border-b-1 border-gray-200">
                  {employee.position}
                </td>
                <td className="w-1/5 border-b-1 border-gray-200">
                  {employee.department}
                </td>
                <td className="w-1/5 border-b-1 border-gray-200">
                  <span
                    className={`w-full border-b-1 border-gray-200 ${
                      employee.status === "active"
                        ? "text-green-300 border-green-200 border-2 rounded-4xl p-2"
                        : employee.status === "on leave"
                        ? "text-yellow-300 border-yellow-200 border-2 rounded-4xl p-2"
                        : employee.status === "inactive"
                        ? "text-red-300 border-red-200 border-2 rounded-4xl p-2"
                        : ""
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
                <td className="w-1/5 border-b-1 border-gray-200">
                  <button className="text-green-500 hover:text-white hover:bg-green-500 p-1 hover:rounded-full">
                    <FaRegEye />
                  </button>
                  <button className="text-red-500 hover:bg-red-400 hover:text-white p-1 hover:rounded-full">
                    <MdOutlineDelete
                      onClick={() => handleDelete(employee.id)}
                    />
                  </button>
                  <button className="text-blue-500 ml-2 hover:bg-blue-400 hover:text-white hover:p-1 hover:rounded-full">
                    <MdOutlineEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4 items-center gap-2">
        Page:
        <button
          className="rounded-full p-2 bg-blue-400 text-white"
          onClick={PrevPage}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>
        {currentPage} of {totalNumberOfPages}
        <button
          className="bg-blue-400 p-2 rounded-full text-white"
          onClick={NextPage}
          disabled={currentPage >= totalNumberOfPages}
        >
          <FaArrowRight />
        </button>
      </div>
      {/* Toggle PopUP */}
      {popUp && <PopUp />}
    </div>
  );
};

export default Employees;
