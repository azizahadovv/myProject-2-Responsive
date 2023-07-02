import React, { useState } from "react";
import { navberSupport } from "../map";
import { Support1, Support2 } from ".";

function Support(props) {
  const [sup, setSup] = useState(1);
  return (
    <div className=" container flex gap-[40px] content-center align-top min-h-[640px] w-[100%]  ml-[-30px] scrollbar-none  
   
    desktop:flex-row desktop:items-stretch 

    laptop:flex-row laptop:mt-3 laptop:items-center 

    tablet:flex-col tablet:mt-[30px] tablet:items-center 
    
    mobil:flex-col mobil:items-center
    
    minMobil:flex-col minMobil:items-center minMobil:ml-0">

      <div className="flex flex-col border-r border-[#302F2F] w-[25%] h-[100%] laptop:w-[30%] laptop:h-[100%] laptop:flex-col  desktop:w-[30%]
      tablet:flex-row tablet:h-[70px] tablet:mt-3
      tablet:overflow-auto  
      mobil:flex-row mobil:h-[60px] mobil:mt-3
      mobil:w-[100%]  mobil:flex mobil:border-none mobil:overflow-x-scroll 

      minMobil:flex-row  minMobil:h-[60px]  minMobil:mt-8
      minMobil:w-[100%]   minMobilbil:flex  minMobil:flex  minMobil:border-none  minMobil:overflow-x-scroll ">
        {navberSupport.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => setSup(item.id)}
              className={`flex  w-[100%]   font-BeauSans cursor-pointer p-3 items-center  border-b border-[#302F2F] ${sup === item.id ? "bg-[#0B0B0B]" : "bg-bleck"
                }`}
            >
              <p className={`${sup === item.id ? "text-red" : "text-grayF"} minMobil:text-center tablet:text-start minMobil:pt-3 tablet:pt-0 w-[200px] text-center  default:text-[16px] tablet:text-[15px] mobil:text-[14px] minMobil:text-[13px]`}>
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="container">{sup === 1 ? <Support1 /> : sup === 2 ? <Support2 /> : ""}</div>
    </div>
  );
}

export default Support;