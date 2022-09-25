import React from "react";
import Double from "../images/double.png";
import Single from "../images/single.png";
import Triple from "../images/triple.png";

const Cards = () => {
  return (
    <div className=" w-full py-[10rem] px-4 bg-white">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className=" w-full shadow-xl flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300">
          <img
            className=" w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className=" text-2xl font-bold text-center py-6">Single User</h2>
          <p className="text-center text-4xl font-bold">$150</p>
          <div className=" font-medium text-center">
            <p className=" py-2 border-b mx-8 mt-8">something special</p>
            <p className=" py-2 border-b mx-8 ">1 Granted User</p>
            <p className=" py-2 border-b mx-8 "> !1 month extra free</p>
          </div>

          <button
            className="bg-[#2a59af] rounded-md w-[200px] font-medium px-6 my-6 mx-auto
         py-3 text-[#000000]"
          >
            Start Trial
          </button>
        </div>
        <div className=" bg-gray-100 w-full shadow-xl flex flex-col p-4 my-8 md:m-0  rounded-lg hover:scale-105 duration-300">
          <img
            className=" w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className=" text-2xl font-bold text-center py-6">Double User</h2>
          <p className="text-center text-4xl font-bold">$150</p>
          <div className=" font-medium text-center">
            <p className=" py-2 border-b mx-8 mt-8">something special</p>
            <p className=" py-2 border-b mx-8 ">1 Granted User</p>
            <p className=" py-2 border-b mx-8 "> !1 month extra free</p>
          </div>

          <button
            className="text-[#000000] rounded-md w-[200px] font-medium px-6 my-6 mx-auto
         py-3  bg-[#2a59af]"
          >
            Start Trial
          </button>
        </div>
        <div className=" w-full shadow-xl flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300">
          <img
            className=" w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className=" text-2xl font-bold text-center py-6">Tripple User</h2>
          <p className="text-center text-4xl font-bold">$150</p>
          <div className=" font-medium text-center">
            <p className=" py-2 border-b mx-8 mt-8">something special</p>
            <p className=" py-2 border-b mx-8 ">1 Granted User</p>
            <p className=" py-2 border-b mx-8 "> !1 month extra free</p>
          </div>

          <button
            className="bg-[#2a59af] rounded-md w-[200px] font-medium px-6 my-6 mx-auto
         py-3 text-black"
          >
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
