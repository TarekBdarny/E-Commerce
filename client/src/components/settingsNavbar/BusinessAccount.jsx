import React from "react";
import { Link } from "react-router-dom";
import useActivateBusiness from "../../hooks/account/useActivateBusiness";
import LoadingSpinner from "../../daisy/LoadingSpinner";
import { useUserContext } from "../../context/UserContext";
export const BusinessAccount = () => {
  const { loading, activateBusiness } = useActivateBusiness();
  const { user } = useUserContext();

  return (
    <div className="flex items-center justify-center w-full ">
      <div className="lg:h-[400px] w-3/4 bg-base-100 border rounded-lg shadow-lg p-10 flex flex-col gap-8 relative text-xl">
        <h1>Activate Business Account</h1>
        <p>
          Are you sure you want to activate your account to Business Account.{" "}
          <br />
          By Changing You'r Account you will be able to post your products, add
          a company and many more. <br />
          After you have activated your account you will not be able to switch
          back to personal account. <br />
          By clicking the activate button you Agree to{" "}
          <Link className="underline text-primary underline-offset-1">
            Tarek Express company agreement
          </Link>
        </p>
        <button
          onClick={activateBusiness}
          disabled={user?.businessAccount}
          className="md:w-1/2 btn  bg-primary hover:text-primary hover:bg-transparent hover:border-primary hover:border-2 hover:-translate-y-1 transition duration-200  text-white rounded-md text-lg lg:absolute lg:bottom-5 lg:right-5  "
        >
          {loading ? <LoadingSpinner /> : "Activate Account"}
        </button>
      </div>
    </div>
  );
};
