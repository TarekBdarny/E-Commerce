import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Input = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const handleCarousel = (direction) => {
    if (direction === "right") {
      setImageIndex((imageIndex + 1) % images.length);
    } else if (direction === "left") {
      setImageIndex((imageIndex - 1 + images.length) % images.length);
    }
  };
  useEffect(() => {
    console.log(imageIndex);
  }, [imageIndex]);
  const images = [
    "https://plus.unsplash.com/premium_photo-1674978723656-6b0ee188a014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1715421363314-770e21fe00d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1721332149274-586f2604884d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1721852474372-5f4f02987751?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
  ];
  return (
    <div className="w-[200px] bg-indigo-400 h-[300px] relative md:w-[800px] md:h-[500px] ">
      <div className="flex w-full text-3xl items-center h-full justify-between px-[12px] z-50 absolute">
        <MdOutlineKeyboardArrowLeft
          className="cursor-pointer rounded-full w-[50px] h-[50px] bg-slate-100  hover:bg-slate-300"
          onClick={() => handleCarousel("left")}
        />
        <MdOutlineKeyboardArrowRight
          className="cursor-pointer rounded-full w-[50px] h-[50px] bg-slate-100  hover:bg-slate-300"
          onClick={() => handleCarousel("right")}
        />
      </div>
      {
        <img
          src={images[imageIndex]}
          className="w-full h-full object-fill aspect-auto "
          alt={images[imageIndex]}
        />
      }

      <div className="flex w-full justify-center gap-4 absolute bottom-10">
        {images.map((_, index) => (
          <div
            className={`w-5 h-5 rounded-full bg-slate-500 ${
              index === imageIndex ? "bg-white" : "bg-slate-700 "
            }`}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Input;
