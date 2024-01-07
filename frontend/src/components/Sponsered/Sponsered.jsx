import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpL4s3VtYBhpVJhV9KhrjGF0OSh8lQCkBISQ&usqp=CAU"
            alt=""
            style={{ width: "150px",height: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_AHUn4wnsNSuHnL2mDG-Biosar8t28BvXQ&usqp=CAU"
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-Fhv2R17kFSrcmZl8oAz7siNPLwwjvWdx9JBdyO_VSPh4BDGnBax824FaZb6vg82G7g&usqp=CAU"
            style={{ width: "150px",height: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
            style={{ width: "150px",height: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://logowik.com/content/uploads/images/daraz1374.logowik.com.webp"
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
