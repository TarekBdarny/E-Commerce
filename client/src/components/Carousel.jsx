import React from "react";

const Carousel = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664202526475-8f43ee70166d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
  ];
  return (
    <div className="bg-white w-screen h-[200px]">
      <img
        src={"https://picsum.photos/800/200"}
        alt=""
        className="w-full h-full object-cover aspect-[3/2] bg-slate-200"
      />
    </div>
  );
};

export default Carousel;
