import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import toast from "react-hot-toast";
import useUpdateProfile from "../../hooks/useUpdateProfile";
import LoadingSpinner from "../../daisy/LoadingSpinner";

export const Profile = () => {
  const { user } = useUserContext();
  const [data, setData] = useState({
    username: user?.username,
    firstName: user?.firstName,
    lastName: user?.lastName,
    profilePic: user?.profilePic,
  });
  const { updateProfile, loading } = useUpdateProfile({
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    profilePic: data.profilePic,
  });

  const checkInputsData = () => {
    if (
      data.username === user.username &&
      data.firstName === user.firstName &&
      data.lastName === user.lastName &&
      data.profilePic === user.profilePic
    ) {
      toast.error("No changes made");
      return false;
    }
    if (
      data.username === "" ||
      data.firstName === "" ||
      data.lastName === "" ||
      data.profilePic === ""
    ) {
      toast.error("Please fill all the fields");
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkInputsData()) return;
    updateProfile();
    // console.log(data);
  };
  return (
    <section className="flex flex-col gap-6 mx-10 md:mx-5">
      <h1>Change Details</h1>
      <div className="flex flex-col gap-4 items-center">
        <div className="avatar">
          <div className="w-24 rounded-full border shadow-md">
            <img src={data.profilePic} className="" />
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          className="file-input file-input-bordered w-full max-w-xs"
        />
      </div>
      <Inputs
        data={data}
        setData={setData}
        loading={loading}
        handleSubmit={handleSubmit}
      />
      {/* <ButtonContainer handleSubmit={handleSubmit} loading={loading} /> */}
    </section>
  );
};
const Inputs = ({ data, setData, loading, handleSubmit }) => {
  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full place-content-center h-full "
      onSubmit={handleSubmit}
    >
      <label className="relative">
        <input
          type="text"
          className="group border outline-none p-2 text-md input2"
          id="firstName-change-input"
          value={data.firstName}
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
        />
        <label
          htmlFor="firstName-change-input"
          className={`input-label2 ${data.firstName !== "" && "test-class2"}`}
        >
          first name
        </label>
      </label>
      <label className="relative">
        <input
          type="text"
          className="group border outline-none p-2 text-md input2"
          value={data.lastName}
          id="lastName-change-input"
          onChange={(e) =>
            setData((prev) => ({ ...prev, lastName: e.target.value }))
          }
        />
        <label
          htmlFor="lastName-change-input"
          className={`input-label2 ${data.lastName !== "" && "test-class2"}`}
        >
          last name
        </label>
      </label>
      <label className="relative">
        <input
          type="text"
          className="group border outline-none p-2 text-md input2"
          id="username-change-input"
          value={data.username}
          onChange={(e) =>
            setData((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <label
          htmlFor="username-change-input"
          className={`input-label2 ${data.username !== "" && "test-class2"}`}
        >
          username
        </label>
      </label>
      <ButtonContainer handleSubmit={handleSubmit} loading={loading} />
    </form>
  );
};

const ButtonContainer = ({ handleSubmit, loading }) => {
  return (
    <button
      className="btn w-28 bg-primary hover:bg-primary-hover transition duration-200 text-white"
      onClick={handleSubmit}
    >
      {loading ? <LoadingSpinner /> : "Save"}
    </button>
  );
};
