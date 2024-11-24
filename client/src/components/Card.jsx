import React from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { CiHeart, CiDiscount1 } from "react-icons/ci";

const Card = () => {
  return (
    <div className="card px-0  bg-base-100 w-[250px] md:w-[350px] shadow-xl overflow-hidden transition duration-300 ease-in-out">
      {/* go to product page  */}
      <Link>
        <figure className="hover:scale-110 transition duration-300 ease-in-out">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
      </Link>
      <div className="card-body">
        <div className="flex  gap-5">
          <h1 className="line-through text-gray-400 badge badge-neutral p-3">
            20₪
          </h1>
          <h1 className="badge bg-primary p-3 text-white">18₪</h1>
          <div className="rating scale-75">
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              defaultChecked
            />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
        </div>
        <p className="line-clamp-2">
          running shoes that make you go faster Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Sunt, amet.
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className="mt-2 flex items-center justify-around w-full border-t-2 py-2">
          <p className="inline text-lg">
            10% off
            <CiDiscount1 className="inline" />
          </p>
          <button className="btn btn-xs sm:btn-sm md:btn-md bg-primary hover:bg-primary-hover hover:translate-y-[-3px] transition duration-200 ease-in-out text-white">
            Add To Cart
            <MdAddShoppingCart className="inline mx-1 scale-125" />
          </button>
          <div className="tooltip  tooltip-bottom z-10" data-tip="wishlist">
            <CiHeart className="inline mx-2 scale-150" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
