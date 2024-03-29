import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineMessage,
} from "react-icons/ai";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleMessageSubmit = () => {
    navigate("/inbox/conversation=472732763463782643");
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%] `}>
          <div className="w-full py-5">
            <div className="w-full block 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img src={data?.image_Url[select].url} alt="img" />
                <div className="w-full flex">
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      className="h-[200px]"
                      src={data?.image_Url[0].url}
                      alt=""
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      className="h-[200px]"
                      src={data?.image_Url[1].url}
                      alt=""
                      onClick={() => setSelect(1)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? (data.price = "$") : null}
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
                        size={30}
                        color="red"
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color="#333"
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
                >
                  <span className="flex text-white justify-between">
                    Add to Cart{" "}
                    <AiOutlineShoppingCart size={22} className="ml-2" />
                  </span>
                </div>
                <div className="flex items-center">
                  {data.shop && data.shop.shop_avatar && (
                    <img
                      src={data.shop.shop_avatar.url}
                      alt=""
                      className="w-[65px] h-[65px] rounded-full mr-2"
                    />
                  )}
                  <div className="p3-8">
                    <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                      {data.shop_name}
                    </h3>
                    <h5 className="pb-3 text-[15px]">
                      {data.shop &&
                        data.shop.ratings &&
                        `(${data.shop.ratings}) Ratings`}
                    </h5>
                  </div>
                  <div
                    className={`${styles.button} !mt-4 rounded h-11 ml-3`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo data={data} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded ">
      <div className="w-full justify-between flex  pt-10 pb-2 border-b ">
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 leading-8 text-[18px] pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            assumenda? Quisquam itaque exercitationem labore vel, dolore quidem
            asperiores, laudantium temporibus soluta optio consequatur aliquam
            deserunt officia. Dolorum saepe nulla provident.Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Beatae, assumenda? Quisquam
            itaque exercitationem labore vel, dolore quidem asperiores,
            laudantium temporibus soluta optio consequatur aliquam deserunt
            officia. Dolorum saepe nulla provident.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Beatae, assumenda? Quisquam itaque
            exercitationem labore vel, dolore quidem asperiores, laudantium
            temporibus soluta optio consequatur aliquam deserunt officia.
            Dolorum saepe nulla provident.
          </p>

          <p className="py-2 leading-8 text-[18px] pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            assumenda? Quisquam itaque exercitationem labore vel, dolore quidem
            asperiores, laudantium temporibus soluta optio consequatur aliquam
            deserunt officia. Dolorum saepe nulla provident.Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Beatae, assumenda? Quisquam
            itaque exercitationem labore vel, dolore quidem asperiores,
            laudantium temporibus soluta optio consequatur aliquam deserunt
            officia. Dolorum saepe nulla provident.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Beatae, assumenda? Quisquam itaque
            exercitationem labore vel, dolore quidem asperiores, laudantium
            temporibus soluta optio consequatur aliquam deserunt officia.
            Dolorum saepe nulla provident.
          </p>

          <p className="py-2 leading-8 text-[18px] pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            assumenda? Quisquam itaque exercitationem labore vel, dolore quidem
            asperiores, laudantium temporibus soluta optio consequatur aliquam
            deserunt officia. Dolorum saepe nulla provident.Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Beatae, assumenda? Quisquam
            itaque exercitationem labore vel, dolore quidem asperiores,
            laudantium temporibus soluta optio consequatur aliquam deserunt
            officia. Dolorum saepe nulla provident.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Beatae, assumenda? Quisquam itaque
            exercitationem labore vel, dolore quidem asperiores, laudantium
            temporibus soluta optio consequatur aliquam deserunt officia.
            Dolorum saepe nulla provident.
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full min-h-[40vh] py-3 items-center flex justify-center">
          No reviews yet
        </div>
      ) : null}

      {active === 3 ? (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <div className="flex items-center">
              {data.shop && data.shop.shop_avatar && (
                <img
                  src={data.shop.shop_avatar.url}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
              )}

              <div className="pl-3">
                <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                <h5 className="text-[20px]">
                  {data.shop &&
                    data.shop.ratings &&
                    `(${data.shop.ratings}) Ratings`}
                </h5>
              </div>
            </div>
            <p className="pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              voluptas reprehenderit architecto assumenda eum exercitationem
              eius rem possimus commodi obcaecati officia accusamus, repudiandae
              id autem debitis distinctio repellendus, nihil alias.
            </p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600] ">
                Joined on <span className="font-[500]">27th October 2023</span>
              </h5>

              <h5 className="font-[600] ">
                Total Products <span className="font-[500]">8</span>
              </h5>

              <h5 className="font-[600] ">
                Total Reviews <span className="font-[500]">27</span>
              </h5>
              <Link to="/shop">
                    <div
                    className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                    >
                      <h4 className="text-white">
                        Visit Shop
                      </h4>
                      
                    </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
