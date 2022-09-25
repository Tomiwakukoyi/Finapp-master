import React from "react";

const Newsletter = () => {
  return (
    <div className=" w-full py-16 text-white px-4">
      <div className=" max-w-[1240px]  mx-auto grid lg:grid-cols-3">
        <div className=" lg:col-span-2 my-4">
          <h1 className=" md:text-4xl sm:text-3xl text-2xl">
            Want tips and tricks to on how to get the most of your income?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button
              className="bg-[#2a59af] rounded-md w-[200px] font-medium ml-4 px-6 my-6
         py-3 text-black"
            >
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data bla bla bla
            <span className=" text-[#2a59af]"> Read our privacy policy </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
