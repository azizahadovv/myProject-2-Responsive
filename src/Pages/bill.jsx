import React, { useState } from "react";
import { navbarBill } from "../map";
import { BillContent, MonthlyBill } from ".";

function Bill(props) {
  const [indexBill, setIndexBill] = useState(1);
  const [name, SetName] = useState('');
  return (
    <div className="flex container desktop:flex-row desktop:items-stretch laptop:flex-row laptop:mt-3 laptop:items-center tablet:flex-col tablet:mt-[30px] tablet:items-center mobil:flex-col mobil:items-center minMobil:flex-col minMobil:items-center gap-[40px] content-center align-top h-[100%] w-[100%]   minMobil:ml-0  ">
      <div className="laptop:w-[30%] laptop:h-[100%] laptop:flex-col  desktop:w-[30%]
      tablet:flex-row tablet:h-[70px] tablet:mt-3
      tablet:overflow-auto
      mobil:flex-row mobil:h-[60px] mobil:mt-3
      mobil:w-[100%]  mobil:flex mobil:border-none mobil:overflow-x-scroll 

      minMobil:flex-row  minMobil:h-[60px]  minMobil:mt-8
      minMobil:w-[100%]   minMobilbil:flex  minMobil:flex  minMobil:border-none  minMobil:overflow-x-scroll

      border-r border-[#302F2F] cursor-pointer ">
        {navbarBill.map((billBtn) => {
          return (
            <div
              key={billBtn.id}
              onClick={() => (setIndexBill(billBtn.id), SetName(billBtn.title))}
              className={`flex flex-col justify-center  cursor-pointer font-BeauSans w-[100%]  border-b border-[#302F2F]
                tablet:text-[14px] mobil:text-[13px]
                ${indexBill === billBtn.id ? "bg-[#0B0B0B]" : "bg-bleck"
                }
             `}

        
            >
              <p
                className={`${indexBill === billBtn.id
                  ? "text-[#E63739]"
                  : " text-[#E5E5E5]"
                  } w-[200px] h-[100%] default:text-[16px] tablet:text-[15px] mobil:text-[14px] minMobil:text-[13px]`}
              >
                {billBtn.title}
              </p>
            </div>
          );
        })}
      </div>
      {indexBill === 1 ? (
        <BillContent />
      ) : <MonthlyBill name={name} />}
    </div>
  );
}

export default Bill;
