import React from "react";
import { navbarServisCard, servisCard } from "../map";
import { usa } from "../image";
import { AiOutlineBorderBottom, AiOutlineDown, AiOutlineRadiusBottomleft } from "react-icons/ai";

function ServisContent(props) {
  return (
    <div>
      <div className="border-b border-[#302F2F] flex flex-col justify-between w-[100%] min-h-[590px]">
        <span className="text-grayF desktop:text-[14px] laptop:text-[13px] tablet:text-[13px] mobil:text-[12px] minMobil:text-[12px]  font-normal font-BeauSans leading-5">
          <h1 className="text-white desktop:text-[23px] laptop:text-[22px] tablet:text-[22px] mobil:text-[20px] minMobil:text-[20px] font-BeauSans font-bold capitalize">
            Number Management
          </h1>
          Here you can manage all your numbers
        </span>
        <div className="flex flex-col w-[100%] min-h-[250px]  gap-3 ">
          <h4 className="text-white font-bold desktop:text-[18px] laptop:text-[18px] tablet:text-[16px] minMobil:text-[16px] mobil:text-[18px] leading-6 font-BeauSans">
            Overseas Phone Numbers
          </h4>

          <div className="flex flex-col gap-3 minMobil:gap-5 content-center w-[100%]">
            {navbarServisCard.map((res, id) => {
              return (
                <div key={id} className="bg-[#302F2F] w-[100%] min-h-[100px] border rounded-md flex  justify-between px-4 py-2  items-center flex-wrap self-center ">
                  <div className="flex flex-col gap-2 justify-start">
                    <div className="flex justify-between flex-wrap   gap-2 items-start self-stretch  content-center w-[80%] mt-2">
                      <span className="flex items-center gap-3 ">
                        <img src={res.img} alt="Usa" />
                        <span className="text-white desktop:text-[16px] laptop:text-[16px] tablet:text-[15px] mobil:text-[14px] minMobil:text-[14px] leading-6 font-BeauSans font-normal">
                          {res.CountName}
                        </span>
                      </span>
                      <span className="text-red desktop:text-[18px] laptop:text-[18px] tablet:text-[16px] mobil:text-[15px] minMobil:text-[14px] leading-6 font-BeauSans font-bold">
                        {res.number}
                      </span>
                    </div>
                    <p className="text-grayF desktop:text-[14px] laptop:text-[14px] tablet:text-[13px] mobil:text-[12px] minMobil:text-[12px] leading-5 font-BeauSans font-normal">
                      {res.title}
                    </p>
                  </div>
                  <button className="btn btn-outline-light max-w-[150px]">
                    {res.btn}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <span className="text-grayF desktop:text-[14px] laptop:text-[13px] tablet:text-[12px] mobil:text-[11px]  minMobil:text-[11px] font-normal font-BeauSans leading-5">
          <h3 className="text-white desktop:text-[23px] laptop:text-[22px] tablet:text-[21px] mobil:text-[20px] minMobil:text-[19px]   font-BeauSans font-bold capitalize">
            Phone Number Requests
          </h3>
          You have no requested phone numbers
        </span>


      </div>

      <div className="flex flex-col items-center gap-4 mt-5 bg-black">
        {servisCard.map((item, id) => {
          return (
            <div key={id} className="flex justify-between px-3 cflex  items-center self-stretch  content-center w-[100%] min-h-[100px] bg-lightBlack border rounded-md">
              <span className="text-grayF desktop:text-[14px] laptop:text-[14px] tablet:text-[13px] mobil:text-[12px] minMobil:text-[12px] font-BeauSans font-normal ">
                <h4 className="text-white desktop:text-[22px] laptop:text-[22px] tablet:text-[20px] mobil:text-[19px] minMobil:text-[19px]    font-BeauSans font-bold ">{item.name}</h4>
                Select any country and quantity of numbers that we have available for you
              </span>
              <AiOutlineDown color="white" className="cursor-pointer" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServisContent;
