import { SlPeople } from "react-icons/sl";
import { GlobalContext } from "../GlobalContext";
import { useContext } from "react";
import { IoFilterSharp } from "react-icons/io5";

const Overview = () => {
  const {
    displayActiveEmployees,
    displayAllEmployees,
    displayEmployeesOnLeave,
    displayInactiveEmployees,
  } = useContext(GlobalContext);
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="bg-blue-500 p-4 rounded-full text-white text-3xl font-bold">
            ED
          </span>
          <h1 className="text-2xl p-2 font-bold text-blue">
            Employee Directory
          </h1>
        </div>
        {/* Search Bar */}
        <div className=" flex gap-2">
          <input
            type="text"
            placeholder="Seacrh for Employee "
            className="ring-1 ring-gray-400 rounded-full px-2"
          />
          <button className="border-gray-500 text-gray-500 border font-semibold px-4 py-1 rounded-full">
            Seach
          </button>
          <button className="border border-gray-600 px-4 font-semibold rounded-full text-gray-500 flex items-center gap-2 ">
            Filter
            <IoFilterSharp />
          </button>
        </div>
      </div>
      <div className="flex p-2 rounded-lg gap-2 text-sm overflow-hidden justify-between font-bold mt-4">
        <div className="border-2 border-gray-200 p-4 rounded-lg text-blue-950 w-full ">
          <SlPeople className="text-2xl text-blue-950 " />
          <h3>Total Employees</h3>
          <h3 className="text-4xl font-bold text-blue-950">
            {displayAllEmployees.length}
          </h3>
        </div>
        {/* Active Employees */}
        <div className="bg-green-50 p-4 rounded-lg border-green-300 border-2 w-full text-sm font-medium">
          <SlPeople className="text-2xl text-green-500" />
          <h3>Active Employees</h3>
          <h3 className="text-4xl font-bold text-green-500">
            {displayActiveEmployees.length}
          </h3>
        </div>
        {/* Employees on Leave */}
        <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-300 span-2 w-full text-sm font-medium">
          <SlPeople className="text-2xl text-yellow-500" />
          <h3>Employees on Leave</h3>
          <h3 className="text-4xl font-bold text-yellow-500">
            {displayEmployeesOnLeave.length}
          </h3>
        </div>
        {/* Inactive Employees */}
        <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300 span-2 w-full text-sm font-medium">
          <SlPeople className="text-2xl text-red-500" />
          <h3>Inactive Employees</h3>
          <h3 className="text-4xl font-bold text-red-600">
            {displayInactiveEmployees.length}
          </h3>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Overview;
