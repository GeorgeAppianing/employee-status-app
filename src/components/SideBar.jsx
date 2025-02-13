import Overview from "../components/Overview";

import LogoutPage from "../Pages/LogoutPage";

const SideBar = () => {
  return (
    <div className="h-screen p-4 flex flex-col items-center justify-between bg-slate-100 rounded-lg text-gray-600">
      <div>
        <Overview />
      </div>
      <div>
        <LogoutPage />
      </div>
    </div>
  );
};

export default SideBar;
