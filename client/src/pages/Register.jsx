import React, { useState } from "react";

const Register = () => {
  const [pageIndex, setPageIndex] = useState(1);
  return (
    <div className="w-[900px] h-[600px] bg-indigo-500 flex flex-col items-center">
      <div className="flex items-center gap-2 my-2 w-full p-3 relative">
        <p
          className={`text-xl w-16 h-16 text-center rounded-full bg-slate-100 flex justify-center items-center
             ${pageIndex === 1 && "bg-green-300"}
            `}
        >
          1
        </p>
        <span
          className={`h-2 flex-1 w-full bg-red-300
            ${pageIndex === 2 && "bg-green-300"}
            `}
        ></span>
        <p
          className={`text-xl w-16 h-16 rounded-full bg-slate-100 flex justify-center items-center
             ${pageIndex === 2 && "bg-green-300"}
            `}
        >
          2
        </p>
        <span className="h-2 flex-1 w-full bg-red-300"></span>
        <p
          className={`text-xl w-16 h-16 rounded-full bg-slate-100 flex justify-center items-center absolute right-0
            ${pageIndex === 3 && "bg-green-300"}
            `}
        >
          3
        </p>
      </div>
      <form className="flex flex-col gap-3">
        <div className=" flex gap-2">
          <label htmlFor="username">
            username
            <input type="text" id="username" />
          </label>
          <label htmlFor="">
            <input type="text" />
          </label>
        </div>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
      </form>
    </div>
  );
};

export default Register;
