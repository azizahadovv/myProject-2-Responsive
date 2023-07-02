import React from "react";
import { AiOutlineDown } from "react-icons/ai";

function orderPlan() {
  return (
    <div className={`w-[100%] h-[100%] minhe0ght flex minMobil:flex-row gap-3 laptop:flex-col minMobil:justify-around laptop:justify-between p-4  bg-lightBlack minMobil:border-none laptop:border-r border-neutral-700 `}>
      <div className="">
        <p className="text-grayF minMobil:text-[14px] laptop:text-[16px] font-normal uppercase leading-none">
          TARIFF PLAN
        </p>
        <h4 className="text-white minMobil:text-[25px] w-max laptop:text-[36px] font-bold capitalize minMobil:left-5 laptop:leading-10">
          Silver Plan
        </h4>
        <div className="minMobil:block laptop:hidden">
          <span className="text-white minMobil:text-[18px] laptop:text-[24px] font-bold leading-7">$</span>
          <span className="text-white minMobil:text-[40px] laptop:text-[55px] font-bold leading-10">
            98
            <br />
          </span>
          <span className="text-white minMobil:text-[14px] laptop:text-[16px] font-normal leading-normal">
            AMOUNT FEE*{" "}
          </span>
        </div>
      </div>

      <div className="flex flex-col minMobil:items-end minMobil:justify-end laptop:justify-around laptop:items-start ">
        
        <div className="minMobil:hidden laptop:block">
          <span className="text-white text-[24px] font-bold leading-7">$</span>
          <span className="text-white text-[55px] font-bold leading-10">
            98
            <br />
          </span>
          <span className="text-white text-[16px] font-normal leading-normal">
            AMOUNT FEE*{" "}
          </span>
        </div>


        <div className="flex flex-col justify-between h-20">
          <div>
            <div className="text-neutral-200 minMobil:text-[15px] laptop:text-[16px] font-bold leading-normal">
              Currency
            </div>
          </div>
          <div className="minMobil:max-w-[100px] laptop:max-w-[135px] h-10 rounded border flex justify-center items-center content-center p-2  border-neutral-400">
            <div className="minMobil:w-[150px] laptop:w-[212px] h-[17px] flex items-center content-center text-white text-[16px] font-normal leading-normal">
              $ USD
            </div>
            <AiOutlineDown color="#FFFFFF" className="flex items-center content-center" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default orderPlan;
