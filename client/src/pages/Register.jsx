import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useRegister from "../hooks/useRegister";
import toast from "react-hot-toast";
import { FaArrowTrendUp } from "react-icons/fa6";

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import LoadingSpinner from "../daisy/LoadingSpinner";

const RegisterPage = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [dataError, setDataError] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    age: "",
    gender: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });
  const { register, loading } = useRegister(data);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  const checkInputsValues = () => {};
  const navigateSectionAndValidate = (direction) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (direction !== "prev")
      switch (activeSection) {
        case 1: {
          if (
            !(
              data.firstName !== "" &&
              data.lastName !== "" &&
              data.username !== ""
            )
          ) {
            setDataError(true);
            toast.error("All fields are required");

            return;
          }
          if (data.username.length < 4) {
            toast.error("Username must be at least 4 characters");
            setDataError(true);
            return;
          }
          break;
        }
        case 2: {
          if (data.age === "" || data.gender === "" || data.email === "") {
            toast.error("All fields are required");
            setDataError(true);
            return;
          }

          if (!emailRegex.test(data.email)) {
            toast.error("Invalid email address");
            setDataError(true);
            return;
          }

          if (data.age < 18) {
            toast.error("You must be at least 18 years old");
            setDataError(true);
            return;
          }
          break;
        }
        case 3: {
          if (data.password === "" || data.confirmPassword === "") {
            setDataError(true);
            toast("All fields are required");
            return;
          }
          if (data.password.length < 6) {
            toast.error("Password must be at least 6 characters");
            setDataError(true);
            return;
          }
          if (data.confirmPassword.length < 6) {
            toast.error("Confirm Password must be at least 6 characters");
            setDataError(true);
            return;
          }
          if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match");
            setDataError(true);
            return;
          }
          break;
        }
      }
    setDataError(false);
    if (direction === "prev") {
      if (activeSection > 1) {
        setActiveSection(activeSection - 1);
      }
    } else {
      if (activeSection < 4) {
        setActiveSection(activeSection + 1);
      }
    }
  };

  const handleRegister = () => {
    register();
  };
  return (
    <div className="w-screen py-12 md:w-[600px] lg:w-[800px] h-screen overflow-hidden   md:h-[530px]  bg-accent flex flex-col items-center justify-start md:justify-evenly rounded-2xl relative mt-4 shadow-lg">
      <RegisterProgressCount
        activeSection={activeSection}
        dataError={dataError}
      />

      {activeSection === 1 ? (
        <RegisterTemplate
          heading={"Basic Credentials."}
          content={"Enter First Name, Last Name & username."}
        >
          <Register1 setData={setData} data={data} />
        </RegisterTemplate>
      ) : activeSection === 2 ? (
        <RegisterTemplate
          heading={"More Details."}
          content={"Enter Email, Age & Gender"}
        >
          <Register2 setData={setData} data={data} />
        </RegisterTemplate>
      ) : activeSection === 3 ? (
        <RegisterTemplate
          heading={"Password Details."}
          content={"Enter Password & And Confirm it. "}
        >
          <Register3 setData={setData} data={data} />
        </RegisterTemplate>
      ) : (
        <RegisterTemplate
          heading={"Appearance."}
          content={"Upload Profile Picture"}
        >
          <Register4 setData={setData} data={data} />
        </RegisterTemplate>
      )}
      <div className="flex flex-row items-center justify-between mx-20 md:mx-4 md:my-0 w-[calc(100%-40px)] absolute bottom-3 p-5 md:px-2">
        <button
          disabled={activeSection === 1}
          className={`btn border-2 border-disabled text-text-color bg-accent hover:translate-y-[-3px] hover:bg-primary hover:text-accent rounded-lg transition duration-200`}
          onClick={() => navigateSectionAndValidate("prev")}
        >
          {activeSection !== 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          )}
          Previous
        </button>
        <button
          className="btn border-2 text-text-color bg-primary hover:translate-y-[-3px] hover:bg-primary-hover  transition duration-200 rounded-lg"
          onClick={
            activeSection !== 4
              ? () => navigateSectionAndValidate("next")
              : () => handleRegister()
          }
        >
          {activeSection === 4 ? (
            "Register"
          ) : !loading ? (
            "Next"
          ) : (
            <LoadingSpinner />
          )}
          {activeSection !== 4 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

const Register1 = ({ setData, data }) => {
  return (
    <form>
      <div className="flex flex-col gap-6">
        <label className="relative">
          <input
            type="text"
            id="last-name-input"
            className={`input outline-none text-text-color`}
            value={data.firstName}
            onChange={(e) =>
              setData((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
          <label
            htmlFor="last-name-input"
            className={`input-label ${data.firstName !== "" && "test-class"}`}
          >
            First Name
          </label>
        </label>

        <label className="relative">
          <input
            type="text"
            id="first-name-input"
            className="input outline-none"
            value={data.lastName}
            onChange={(e) =>
              setData((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
          <label
            htmlFor="first-name-input"
            className={`input-label ${data.lastName !== "" && "test-class"}`}
          >
            Last Name
          </label>
        </label>
        <label className="relative">
          <input
            type="text"
            id="username-input"
            className={`input outline-none `}
            value={data.username}
            onChange={(e) =>
              setData((prev) => ({ ...prev, username: e.target.value }))
            }
          />
          <label
            htmlFor="username-input"
            className={`input-label ${data.username !== "" && "test-class"}`}
          >
            Username
          </label>
        </label>
      </div>
    </form>
  );
};
const Register2 = ({ setData, data }) => {
  return (
    <form className="">
      <div className="flex flex-col gap-6">
        <label className="relative">
          <input
            type="text"
            id="email-input"
            className=" input outline-none "
            value={data.email}
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <label
            htmlFor="email-input"
            className={`input-label ${data.email !== "" && "test-class"}`}
          >
            Email
          </label>
        </label>

        <label htmlFor="" className="relative">
          <input
            type="number"
            id="age-input"
            className="input"
            value={data.age}
            onChange={(e) =>
              setData((prev) => ({ ...prev, age: e.target.value }))
            }
          />
          <label
            htmlFor="age-input"
            className={`input-label ${data.age !== "" && "test-class"}`}
          >
            Age
          </label>
        </label>
        <select
          className="select select-bordered w-full max-w-xs input"
          defaultValue={"Gender"}
          onChange={(e) =>
            setData((prev) => ({ ...prev, gender: e.target.value }))
          }
        >
          <option disabled>Gender</option>
          <option value={"male"}>Male</option>
          <option value={"female"}>Female</option>
        </select>
      </div>
    </form>
  );
};

const Register3 = ({ setData, data }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <form className="">
      <div className="flex flex-col gap-6">
        <label className="relative flex justify-center items-center">
          <input
            type={`${showPassword ? "text" : "password"}`}
            id="password"
            className={`input`}
            value={data.password}
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {showPassword ? (
            <IoEyeOutline
              className="absolute right-0 top-6 mx-3 cursor-pointer text-xl z-50"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <IoEyeOffOutline
              className="absolute right-0 top-6 mx-3 cursor-pointer text-xl"
              onClick={() => setShowPassword(true)}
            />
          )}

          <label
            htmlFor="password"
            className={`input-label ${data.password !== "" && "test-class"}`}
          >
            Password
          </label>
        </label>
        <label className="relative">
          <input
            type={`${showConfirmPassword ? "text" : "password"}`}
            id="confirm-password"
            className="input"
            value={data.confirmPassword}
            onChange={(e) =>
              setData((prev) => ({ ...prev, confirmPassword: e.target.value }))
            }
          />
          {showConfirmPassword ? (
            <IoEyeOutline
              className="absolute right-0 top-6 mx-3 cursor-pointer text-xl z-50"
              onClick={() => setShowConfirmPassword(false)}
            />
          ) : (
            <IoEyeOffOutline
              className="absolute right-0 top-6 mx-3 cursor-pointer text-xl"
              onClick={() => setShowConfirmPassword(true)}
            />
          )}
          <label
            htmlFor="confirm-password"
            className={`w-[150px]  md:w-fit input-label ${
              data.confirmPassword !== "" && "test-class"
            }`}
          >
            Confirm Password
          </label>
        </label>
      </div>
    </form>
  );
};
const Register4 = ({ setData, data }) => {
  const handleImageChange = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setData((prev) => ({ ...prev, profilePic: reader.result }));
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  return (
    <form className="">
      <div className="flex flex-col gap-6 relative top-[-50px] md:top-[-20px]">
        <img
          src={`${data.profilePic}`}
          alt=""
          className="w-60 h-60 rounded-full border-2 object-contain "
        />
        <input
          type="file"
          accept="image/*"
          className="file-input file-input-bordered file-input-md w-full max-w-xs bg-white border-2"
          onChange={handleImageChange}
        />
      </div>
    </form>
  );
};
const RegisterProgressCount = ({ activeSection, dataError }) => {
  const sections = [1, 2, 3, 4];
  return (
    <div className="w-[250px] md:w-1/2 h-[10px] bg-slate-200 relative md:top-[-20px]    flex justify-center items-center">
      <progress
        className="progress progress-success  w-full absolute bg-transparent h-full"
        value={(100 / sections.length) * activeSection}
        max="100"
      ></progress>
      {/* <div className={`w-[200px] bg-red-400 h-full absolute `} /> */}
      <div className="w-full h-full flex flex-row items-center justify-between z-[10000] absolute">
        {sections.map((section) => (
          <div
            className={`w-[50px] h-[50px] flex justify-center items-center text-black ${
              dataError && section === activeSection
                ? "bg-[#e11d48] size-[55px]"
                : section > activeSection
                ? "bg-slate-400"
                : section === activeSection
                ? "bg-primary"
                : "bg-[#34d399]"
            } rounded-full `}
            key={section}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};

const RegisterTemplate = ({ heading, content, children }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start  gap-12   md:h-[300px] px-[50px] text-black mt-10 md:mt-0">
      <div className="flex flex-col gap-5 w-full h-full">
        <h1 className="text-3xl font-semibold">{heading}</h1>
        <p className="text-lg text-sub-title">{content}</p>
        <Link to={`/login`} className="my-16 underline underline-offset-4 ">
          {" "}
          Already have an account?{" "}
          <span className="text-primary">Login Now</span>
          <FaArrowTrendUp className="inline ml-2" />
        </Link>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default RegisterPage;
