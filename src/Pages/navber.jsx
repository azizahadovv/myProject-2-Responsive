import React from "react";
import { AiOutlineLeft, AiOutlineMenuFold } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { LogoFull, SimCard } from "../image";
function Navbar(props) {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="container h-[100px]  bg-[#0b0b0b] absolute mx-auto border-b border-[#302F2F] top-0 z-100">
        <div className=" h-[100%] flex content-center justify-between tablet:flex mobil:hidden minMobil:hidden">
          <div className="flex flex-col justify-start gap-2 ">
            <p
              onClick={() => navigate("/")}
              className="flex text-grayF justify-start text-[14px] align-center content-start cursor-pointer"
            >
              <AiOutlineLeft className="mt-1" /> BACK TO HOMEPAGE
            </p>
            <span className="flex m-0 p-0 cursor-pointer">
              <img src={SimCard} alt="#" />
              <h2 className="text-white">My V-Tell</h2>
            </span>
          </div>

          <div className="flex justify-center max-w-xl  content-end w-[60%]  gap-3 p-2">
            <span className="flex flex-col  content-end ">
              <strong className="text-white text-[18px] flex justify-end ">
                User Name
              </strong>
              <span className="text-grayF text-[15px] text-end ">
                Account N352 created at 2015-10-07
              </span>
            </span>

            <div className="border-current border-solid border-[1px] border-[#302F2F]"></div>
            <div className="flex flex-col justify-between">
              <span className="text-grayF text-[14px]">Account balance</span>
              <p className="text-white w-[100%]  leading-3 text-[15px] ">
                151 608.79
                <span className="text-red ml-2">₽</span>
              </p>
              <strong className="text-red leading-[10px] text-[16px] ">
                V-MAX
              </strong>
            </div>
          </div>
        </div>
        <div className="hidden tablet:hidden mobil:flex minMobil:flex justify-between items-center">
          <div className="flex h-[100%] max-w-[25%] flex-col justify-center  items-center">
            <img className="bg-none h-[75px] " src={LogoFull} alt="" />
            <strong className="text-white text-[5.333333492279053px] text-centar font-black uppercase leading-3 tracking-wide">GLOBAL MOBILE OPERATOR</strong>
          </div>
          <div><AiOutlineMenuFold rotate={180} size={32} color="red" /></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
