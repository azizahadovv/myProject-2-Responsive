import React, { useState } from "react";
import { navbarServis } from "../map";
import { click } from "@testing-library/user-event/dist/click";
import { ServisContent, ServisContent2 } from ".";

function Servis(props) {
  const [ckick1, setClick] = useState(1);
  const [Name, setName] = useState("Admin your phone numbers");


  return (
    <div className="min-h-[640px] container desktop:flex-row desktop:items-stretch 
    laptop:flex-row laptop:mt-3 laptop:items-start 
    tablet:flex-col tablet:mt-[30px] tablet:items-center
     mobil:flex-col mobil:items-center
      minMobil:flex-col minMobil:items-center 
       flex gap-7  w-[100%]  ml-[-25px] scrollbar-none">


      <div className="flex flex-col justify-start align-center content-center border-r border-[#302F2F] w-[30%]  h-[100%] laptop:w-[30%] laptop:h-[100%] laptop:flex-col  desktop:w-[30%]
      tablet:flex-row tablet:h-[70px] tablet:mt-3
      tablet:overflow-auto
      mobil:flex-row mobil:h-[60px] mobil:mt-3
      mobil:w-[100%]  mobil:flex mobil:border-none mobil:overflow-x-scroll 

      minMobil:flex-row  minMobil:h-[60px]  minMobil:mt-8
      minMobil:w-[100%]   minMobilbil:flex  minMobil:flex  minMobil:border-none  minMobil:overflow-x-scroll ">

        {navbarServis.map((item1, id) => {
          return (
            <div
              key={id}
              onClick={() => (setClick(item1.id), setName(item1.title))}
              className={`w-[100%]  border-b border-[#302F2F] font-BeauSans cursor-pointer flex flex-col justify-center content-start align-center p-3 ${ckick1 == item1.id ? "bg-black" : "text-grayF"} `}
            >
              <p
                className={`${ckick1 == item1.id ? "text-red" : "text-grayF"} minMobil:text-center tablet:text-start minMobil:pt-3 tablet:pt-0 w-[200px] h-[100%] default:text-[16px] tablet:text-[15px] mobil:text-[14px] minMobil:text-[13px] `}
              >
                {item1.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-[100%] h-[100%] ">
        {ckick1 === 1 ? <ServisContent /> : <ServisContent2 Name={Name} />}
      </div>
    </div>
  );
}

export default Servis;


/* 


desktop:flex-row desktop:items-stretch laptop:flex-row laptop:mt-3 laptop:items-center tablet:flex-col tablet:mt-[30px] tablet:items-center mobil:flex-col mobil:items-center minMobil:flex-col minMobil:items-center gap-[40px] content-center align-top h-[100%] w-[100%]   minMobil:ml-0 




*/