import React from "react";
import Typed from "react-typed";
const Hero = () => {
  return (
    <div className="text-white ">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Financial Freedom!
        </h1>
        <div className="flex justify-center items-center ">
          <p className=" md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Helping you with
          </p>
          <Typed
            className="md:text-7xl sm:text-6xl text-4xl font-bold md:pl-4 pl-2"
            strings={["Advice", "Trades", "Savings"]}
            typeSpeed={120}
            backSpeed={120}
            loop
          />
        </div>
        <p className=" md:text-2xl text-xl font-bold text-gray-500">
          Monitor the financial market while not actually doing anything! Lets
          do it for you.
        </p>
        <button
          className="bg-[#2a59af] w-[200px] rounded-md font-medium my-6 mx-auto
         py-3 text-black"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
