import React from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import styles from "../../styles/styles";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Wishlist = ({ setOpenWishlist }) => {
    const wishlist = useSelector((state) => state.wishlist);

  const cartData = [
    {
      name: "iphone 15 pro max 256gb ssd - 8gb ram dark grey color",
      description: "Test",
      price: "1500$",
      qty: 1,
      discountPrice: "1299",
    },
    {
      name: "samsung galaxy note 12 256gb ssd - 16gb ram dark grey color",
      description: "Test",
      price: "1899$",
      qty: 1,
      discountPrice: "1400",
    },
    {
      name: "macbook air m2 pro max 256gb ssd - 8gb ram dark grey color",
      description: "Test",
      price: "1200$",
      qty: 1,
      discountPrice: "999",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] overflow-y-scroll 800px:w-[25%] bg-white flex flex-col justify-between shadow-sm">
        {wishlist && wishlist.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            <h5>Wishlist Items is empty!</h5>
          </div>
        ) : (
          <>
            <div>
              <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setOpenWishlist(false)}
                />
              </div>
              {/* Item length */}
              <div className={`${styles.noramlFlex} p-4`}>
                <AiOutlineHeart size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
              </div>

              {/* cart Single Items */}
              <br />
              <div className="w-full border-t">
                {cartData &&
                  cartData.map((item, index) => (
                    <CartSingle key={index} data={item} />
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const totalPrice = data.discountPrice * 1;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1
          className="cursor-pointer mb-2 ml-2"
          // You might want to add an onClick handler here
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTV_7BmrI1mh8jD673sc2LKp8Jg6ANvtHeQ&usqp=CAU"
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] pt-3 text-[17px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
