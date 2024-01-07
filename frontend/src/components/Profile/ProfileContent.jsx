import React, { useState } from "react";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import { AiOutlineCamera } from "react-icons/ai";
import styles from "../../assets/styles";

const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // You can use the values of name, email, phoneNumber, and password here
  };

  const handleImage = (e) => {
    // Handle image change
  };

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");


  return (
    <div className="w-full">
      {/* profile */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backend_url}${user?.avatar?.url}`}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#rgb(97, 103, 122)]"
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={handleImage}
                />
                <label htmlFor="image">
                  <AiOutlineCamera />
                </label>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="flex flex-wrap pb-3">
                <div className="flex flex-col w-full sm:w-1/2 pr-2">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} mb-4`}
                    required
                    value={user.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col w-full sm:w-1/2 pl-2">
                  <label className="block pb-2">Email</label>
                  <input
                    type="text"
                    className={`${styles.input} mb-4`}
                    required
                    value={user.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap pb-3">
                <div className="flex flex-col w-full sm:w-1/2 pr-2">
                  <label className="block pb-2">Zip Code</label>
                  <input
                    type="text"
                    className={`${styles.input} mb-4`}
                    required
                    value={zipCode}
                    onChange={(e) => setzipCode(e.target.value)}
                  />
                </div>

                <div className="flex flex-col w-full sm:w-1/2 pl-2">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} mb-4`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap pb-3">
                <div className="flex flex-col w-full sm:w-1/2 pr-2">
                  <label className="block pb-2">Password</label>
                  <input
                    type="password"
                    className={`${styles.input} mb-4`}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex flex-col w-full sm:w-1/2 pl-2">
                  <label className="block pb-2">Address 1</label>
                  <input
                    type="text"
                    className={`${styles.input} mb-4`}
                    required
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap pb-3">
                <div className="flex flex-col w-full sm:w-1/2 pr-2">
                  <label className="block pb-2">Address 2</label>
                  <input
                    type="password"
                    className={`${styles.input} mb-4`}
                    required
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>

                <div className="flex flex-col w-full sm:w-1/2 pl-2">
                  <label className="block pb-2">Address 3</label>
                  <input
                    type="text"
                    className={`${styles.input} mb-4`}
                    required
                    value={address3}
                    onChange={(e) => setAddress3(e.target.value)}
                  />
                </div>
              </div>

              <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileContent;
