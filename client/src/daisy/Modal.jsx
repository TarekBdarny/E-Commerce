import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { toast } from "react-hot-toast";
import useValidateCardCvc from "../hooks/card/useCheckCardCvc";

const Modal = ({ func, activate = false, id = "" }) => {
  const [cvcInput, setCvcInput] = useState("");
  const { user, setUser } = useUserContext();
  const { validateCardCvc } = useValidateCardCvc({
    cvc: cvcInput,
    id: id || "",
  });
  const handleClick = async () => {
    const valid = await validateCardCvc();
    if (activate) {
      if (cvcInput === "") {
        toast.error("CVC is required");
        return;
      }
      if (valid) func();
    }
    document.getElementById("my_modal_3").close();
  };
  return !activate ? (
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
  ) : (
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
          <h3 className="font-bold text-lg">Activate Credit Card</h3>
          <p className="py-4">
            Enter the credit card cvc number to activate this credit card
          </p>
          <div className="w-full relative flex  py-2 items-center justify-between gap-4">
            <input
              type="password"
              className="border outline-none py-2 w-full rounded-lg px-4"
              autoComplete="off"
              placeholder="CVC"
              maxLength={4}
              value={cvcInput}
              onChange={(e) => setCvcInput(e.target.value)}
            />
          </div>
          <div className="flex justify-end w-full my-4 ">
            <button
              onClick={handleClick}
              className="btn mx-auto w-full bg-primary hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition duration-200 text-white hover:-translate-y-1 "
            >
              Activate Card
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
