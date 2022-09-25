import React from "react";
import Laptop from "../images/laptop.jpg";

const Analytics = () => {
  return (
    <div className=" w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Ready to be Financially free?
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed magni
            nostrum ratione? Facilis eaque laudantium aspernatur! A molestiae
            asperiores doloremque! Velit quibusdam amet autem ipsam tempore,
            obcaecati sequi reiciendis exercitationem!
          </p>
          <button
            className="bg-[#2a59af] text-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0
         py-3"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
