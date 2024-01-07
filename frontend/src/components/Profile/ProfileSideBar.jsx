import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxPerson } from "react-icons/rx";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineCreditCard, AiOutlineLogout, AiOutlineMessage } from "react-icons/ai";
import {MdOutlineTrackChanges} from "react-icons/md"
import {TbAddressBook} from "react-icons/tb"

const ProfileSideBar = () => {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, icon: <RxPerson size={20} />, text: "Profile" },
    { id: 2, icon: <HiOutlineShoppingBag size={20} />, text: "Shopping" },
    { id: 3, icon: <HiOutlineReceiptRefund size={20} />, text: "Refunds" },
    { id: 4, icon: <AiOutlineMessage size={20} />, text: "Inbox" },
    { id: 5, icon: <MdOutlineTrackChanges size={20} />, text: "Track Order" },
    { id: 6, icon: <AiOutlineCreditCard size={20} />, text: "Payment Methods" },
    { id: 7, icon: <TbAddressBook size={20} />, text: "Address" },
    { id: 8, icon: <AiOutlineLogout size={20} />, text: "Log Out" }


  ];

  const handleItemClick = (itemId) => {
    setActive(itemId);

    switch (itemId) {
      case 4: 
        navigate("/inbox");
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center cursor-pointer w-full mb-8"
          onClick={() => handleItemClick(item.id)}
        >
          {item.icon}
          <span
            className={`pl-3 ${active === item.id ? "text-[red]" : ""} 800px:block hidden`}
          >
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProfileSideBar;
