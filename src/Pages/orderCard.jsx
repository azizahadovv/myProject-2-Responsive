import React, { useState } from "react";
import { lineRight } from "../image";
import { orderBtn } from "../map";
import { INCLUDEDINPACKAGE, NumbersOrder, OrderPlan, ORDERCART, ORDERPURCHASE } from ".";
// import OrderCart from "./orderCart";
// import OrderPURCHASE from "./orderPURCHASE";

function OrderCard(props) {
  const [btn, setBtn] = useState(1);
  return (
    <div className=" w-[100%] h-[100%] cardOrder  ">
      <div className="w-[100%] h-[100%]  bg-lightBlack rounded-lg">
        <div className="flex justify-between bg-[#252323]  content-center minMobil:overflow-x-scroll laptop:overflow-auto mt-5 w-[100%] h-[50px]">
          {orderBtn.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setBtn(item.id)}
                className={` ${item.id === btn
                  ? "bg-red text-white"
                  : "bg-[#252323] text-grayF"
                  } flex justify-center minMobil:w-[100%]  laptop:w-[25%] items-center  btnOrder  `}
              >
                <p className="text-center flex justify-center uppercase minMobil:text-[14px] tablet:text-[16px] font-bold  leading-none items-center my-2 w-[170px]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="h-[100%] w-[100%] flex minMobil:flex-col laptop:flex-row gap-7 px-2 py-4">
          <div className="minMobil:w-[100%] laptop:w-[35%]  bg-lightBlack ">
            <OrderPlan />
          </div>

          <div className="w-[100%] min-h-min ">
            {
              btn === 1 ? <INCLUDEDINPACKAGE setBtn={setBtn} /> : btn === 2 ? <NumbersOrder setBtn={setBtn} /> : btn === 3 ? <ORDERCART setBtn={setBtn} /> : btn === 4 ? <ORDERPURCHASE setBtn={setBtn} /> : ''
            }

          </div>
        </div>

      </div>
    </div>
  );
}

export default OrderCard;
