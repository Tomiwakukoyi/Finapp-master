import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className=" w-full text-3xl font-bold text-[#2a59af]">Finan Man</h1>
        <p className=" py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae libero
          vero veniam similique? Doloremque, ad!
        </p>
        <div className=" flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare className=" size={30}" />
          <FaInstagram className=" size={30}" />
          <FaTwitterSquare className=" size={30}" />
          <FaGithubSquare className=" size={30}" />
          <FaDribbbleSquare className=" size={30}" />
        </div>
      </div>
      <div className=" lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className=" font-medium text-gray-400">Analytics</h6>
          <ul>
            <li className=" py-2 text-sm">Analytics</li>
            <li className=" py-2 text-sm">Analytics</li>
            <li className=" py-2 text-sm">Analytics</li>
            <li className=" py-2 text-sm">Analytics</li>
          </ul>
        </div>
        <div>
          <h6 className=" font-medium text-gray-400">Subscription</h6>
          <ul>
            <li className=" py-2 text-sm">Subscription</li>
            <li className=" py-2 text-sm">Subscription</li>
            <li className=" py-2 text-sm">Subscription</li>
            <li className=" py-2 text-sm">Subscription</li>
          </ul>
        </div>
        <div>
          <h6 className=" font-medium text-gray-400">Finan Models</h6>
          <ul>
            <li className=" py-2 text-sm">Finan Models</li>
            <li className=" py-2 text-sm">Finan Models</li>
            <li className=" py-2 text-sm">Finan Models</li>
            <li className=" py-2 text-sm">Finan Models</li>
          </ul>
        </div>
        <div>
          <h6 className=" font-medium text-gray-400">Foreign Exchange</h6>
          <ul>
            <li className=" py-2 text-sm">Foreign Exchange</li>
            <li className=" py-2 text-sm">Foreign Exchange</li>
            <li className=" py-2 text-sm">Foreign Exchange</li>
            <li className=" py-2 text-sm">Foreign Exchange</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
