import React from "react";
import { Logo, LogoFull, SimCard, israil, russia, usa } from "../image";
import {

  AiOutlineMenuUnfold,
  AiOutlineMoneyCollect,
} from "react-icons/ai";
import { nanbarLink } from "../map";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Navbar2(props) {
  const navigate = useNavigate()
  const [Click, setClick] = useState(5);
  return (
    <div className="container flex minMobil:bg-[#000] laptop:bg-[#121212] items-center  mt-0 pt-0   pl-5 pr-5 ">
      <span onClick={() => navigate('/order')} className=" flex flex-col justify-center items-center ">
        <img className=" minMobil:max-w-[120px]  minMobil:h-14 laptop:max-w-[150px] laptop:h-[75px]  " src={LogoFull} alt="logo" />
        <span className="text-white minMobil:text-[8px] laptop:text-[10px] cursor-pointer font-BeauSans font-[900] text-center leading-4 uppercase"> GLOBAL MOBILE OPERATOR</span>
      </span>
      <div className=" flex flex-col justify-between">
        <div className="flex justify-end items-center content-center minMobil:gap-4 laptop:gap-[65px]   bg-[#000000] w-[100%] h-[55%] rounded-bl-md ">
          <a
            href="#"
            className="no-underline minMobil:hidden laptop:block text-white leading-5 text-[14px] text-center font-BeauSans font-normal flex justify-center content-center gap-2"
          >
            <AiOutlineMoneyCollect
              className="w-[25px] h-[25px]"
              color="#E63739"
            />
            Add Funds
          </a>
          <a
            href="#"
            className="no-underline minMobil:hidden laptop:block text-white leading-5 text-[14px] font-BeauSans font-normal flex justify-center content-center gap-2 text-center"
          >
            <img className="w-[25px] h-[25px]" src={SimCard} alt="simcarta" />
            My V-Tell
          </a>
          <div className="flex flex-col items-end justify-end gap-1 ">
            <span className="text-grayF minMobil:text-[10px] laptop:text-[12px] font-normal font-serif">
              Choose Your Language
            </span>
            <select className="flex text-right justify-center content-center text-white minMobil:text-[10px] laptop:text-[12px] font-normal font-serif max-w-[60px] h-4 bg-black border-none">
              <option defaultChecked value="Eng">
                ENG
              </option>
              <option value="Ru">RU</option>
              <option value="israil">ISR</option>
            </select>

          </div>

          <div className="flex items-center minMobil:block laptop:hidden">
            <button>
              <AiOutlineMenuUnfold color="red" size={25} />
            </button>
          </div>

        </div>

        <div className="w-[100%] minMobil:hidden laptop:flex h-[45%] flex justify-between items-center content-center gap-10  pr-5">
          {nanbarLink.map((item) => {
            return (
              <a
                href={`#${item.title}`}
                key={item.id}
                onClick={() => setClick(item.id)}
                className={`text-grayF text-[18px] font-bold font-BeauSans no-underline ${item.id === Click ? "text-red " : "text-[#E5E5E5]"
                  }`}
              >
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
