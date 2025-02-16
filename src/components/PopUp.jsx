import { GlobalContext } from "../GlobalContext";
import { useContext } from "react";
export const PopUp = () => {
  const { TogglePopUp } = useContext(GlobalContext);
  return (
    <div className=" fixed bg-black/50  flex justify-center items-center inset-0  p-6 z-50">
      <h3 className="bg-white p-4">
        Hello
        <button onClick={TogglePopUp} className="bg-blue-200 p-2">
          x
        </button>
      </h3>
    </div>
  );
};
