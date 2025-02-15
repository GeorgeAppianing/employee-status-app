import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
export const PopUp = () => {
  const {} = useContext(GlobalContext);
  return (
    <div className=" fixed bg-black bg-opacity-50 flex justify-center items-center inset-0  p-6 z-50">
      <h3 className="bg-white p-4">Hello</h3>
    </div>
  );
};
