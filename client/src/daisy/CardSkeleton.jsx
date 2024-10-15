import React from "react";

const CardSkeleton = () => {
  return (
    <div className="skeleton h-[150px] w-[280px] md:w-[300px] mx-10 relative mt-20">
      <div className="skeleton bg-gray-100  w-14 h-8 absolute shrink-0 rounded-lg top-2 right-2" />
      <div className="skeleton bg-gray-100  size-9 absolute shrink-0 rounded-full top-2 left-2" />

      <div className="skeleton bg-gray-100  size-7 absolute shrink-0 rounded-full top-3 left-14" />
      <div className="skeleton bg-gray-100 w-[230px] h-4   absolute shrink-0  top-1/2 left-4" />
      <div className="  w-full h-6 mb-2 pr-7   absolute shrink-0  bottom-0 left-4 flex  items-center justify-between">
        <div className="bg-gray-100 w-[100px] h-4 skeleton" />
        <div className="bg-gray-100 w-[100px] h-4 skeleton" />
      </div>
    </div>
  );
};

export default CardSkeleton;
