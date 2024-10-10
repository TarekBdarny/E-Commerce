import React from "react";
import { useUserContext } from "../context/UserContext";

const Modal = ({ func, country = false }) => {
  const { user, setUser } = useUserContext();

  const handleClick = () => {
    func();
    // setUser({ ...user, city: "" });
    // window.localStorage.setItem("user", JSON.stringify({ ...user, city: "" }));
    document.getElementById("my_modal_3").close();
  };
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal z-20">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Change Country</h3>
          <p className="py-4">
            Are you sure you want to change your country? <br /> by changing the
            prices, taxes & dorp location will change based on you'r choice{" "}
          </p>
          <div className="w-full flex px-4 py-2 items-center justify-between">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              Cancel
            </button>
            <button
              className="btn bg-primary hover:bg-primary-hover transition duration-200 text-white"
              onClick={handleClick}
            >
              Change
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
