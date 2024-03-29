// ProductDetailsCard.jsx

import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import styles from "../../../styles/styles";
import {
  AiOutlineMessage,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
// import { Link } from "react-router-dom";

const ProductDetailsCard = ({ setOpen, open, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  const HandleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return data ? (
    <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-50 flex items-center justify-center">
      <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
        <RiCloseCircleLine
          size={30}
          className="absolute right-3 top-3 z-50 cursor-pointer"
          onClick={() => setOpen(false)}
        />
        <div className="block w-full 800px:flex">
          <div className="block w-full 800px:w-[50%]">
            <img src={data.image_Url[0].url} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full 800px:w-[50%] pl-4 mt-20 pr-4">
            <h1 className={`${styles.productTitle} text-[20px]`}>
              {data.name}
            </h1>
            <p>{data.description}</p>

            <div className="flex pt-3">
              <h4 className={`${styles.productDiscountPrice}`}>
                {data.discountPrice}$
              </h4>
              <h3 className={`${styles.price}`}>
                {data.originalPrice ? data.originalPrice + "$" : null}
              </h3>
            </div>

            <div className="flex items-center mt-12 justify-between pr-3">
              <div>
                <button
                  className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                  onClick={decrementCount}
                >
                  -
                </button>
                <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                  {/* Assuming count is a state variable */}
                  {count}
                </span>
                <button
                  className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                  onClick={incrementCount}
                >
                  +
                </button>
              </div>
              <div>
                {click ? (
                  <AiFillHeart
                    className="cursor-pointer"
                    onClick={() => setClick(!click)}
                    size={30} // Set a specific size
                    color="red" // Set the color
                    title="Remove from wishlist"
                  />
                ) : (
                  <AiOutlineHeart
                    size={30}
                    className="cursor-pointer"
                    onClick={() => setClick(!click)}
                    color="#333" // Set the color
                    title="Add to wishlist"
                  />
                )}
              </div>
            </div>

            <div
              className={`${styles.button} mt-6 rounded-[4px] h-11 flex items-center`}
              onClick={() => {}}
            >
              <span className="text-[#fff] flex items-center">
                Add to cart <AiOutlineShoppingCart className="ml-1" />
              </span>
            </div>
          </div>
        </div>

        <div className="w-full 800px:w-[50%] pl-[5px] pr-[5px]">
          <div className="flex items-center mt-4">
            <img
              src={data.shop.shop_avatar.url}
              alt=""
              className="w-[50px] h-[50px] rounded-full mr-2"
            />
            <div>
              <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
              <h5 className="text-[20px]">({data.shop.ratings}) Ratings</h5>
            </div>
          </div>

          <div
            className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11`}
            onClick={HandleMessageSubmit}
          >
            <span className="text-[#fff] flex items-center">
              Send Message <AiOutlineMessage className="ml-1" />
            </span>
          </div>

          <h5 className="text-[16px] text-[red] mt-5">
            ({data.total_sell}) Sold
          </h5>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProductDetailsCard;
