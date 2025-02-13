import { useContext } from "react";
import Employees from "../components/Employees";
import { GlobalContext } from "../GlobalContext";
import Overview from "../components/Overview";
import { IoIosPersonAdd } from "react-icons/io";

const HomePage = () => {
  const { data } = useContext(GlobalContext);

  return (
    <div className="h-full w-full p-6">
      <Overview />
      <div className="mt-6 text-2xl font-medium flex justify-between">
        <h3>Employee Overview</h3>
        <button className="bg-blue-500 px-4 rounded-full text-white text-sm flex items-center gap-2">
          Add New Employee
          <span className="text-[20px]">
            <IoIosPersonAdd />
          </span>
        </button>
      </div>
      <Employees />
    </div>
  );
};

export default HomePage;
