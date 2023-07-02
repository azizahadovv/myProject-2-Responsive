import React from "react";
import { usa } from "../image";
import { Switch } from "antd";
import { card, card2, countries } from "../map";

const MyAccaunt = () => {
  return (
    <div className="  flex flex-col gap-5 w-[100%] min-h-[150vh] snap-none scrollbar-none">
      <div className="flex desktop:flex-row laptop:flex-row mobil:flex-col minMobil:flex-col    justify-between    border-b min-h-[250px] pt-[20px] pb-[45px] mt-5  gap-3">

        <div className="flex flex-col justify-between  desktop:w-[40%] tablet:w-[100%] tablet:items-center tablet:text-center mobil:w-[100%] mobil:items-center mobil:text-center minMobil:w-[100%] minMobil:items-center minMobil:text-center ">
          <div className="default:text-start">

            <h2 className="text-white default:text-start desktop:text-[28px] laptop:text-[26px] tablet:text-[23px] mobil:text-[20px] minMobil:text-[18px] font-BeauSans font-[700] leading-8">
              Number Management
            </h2>
            <p className="text-grayF default:text-start desktop:text-[14px] laptop:text-[14px] tablet:text-[13px] mobil:text-[12px] minMobil:text-[12px] leading-5">
              If you are calling a country not on your list, please select which <br />
              country to set as Default number AND If you have multiple phone<br />
              numbers in a single country, please select which phone number you<br />
              would like displayed on your called party’s caller ID.<br />
            </p>
          </div>

        </div>

        {/* ///////////////////////////////////////////// */}


        <div className="flex justify-between  desktop:flex-row laptop:flex-wrap tablet:flex-row mobil:flex-col minMobil:flex-col  desktop:w-[60%] laptop:w-[100%]  minMobil:justify-center  align-center gap-5  content-center ">
          {countries.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col gap-3 rounded-md p-[10px] desktop:w-[28%]  tablet:w-[80%] min-h-max bg-lightBlack "
              >
                <div className="flex justify-between border-b-[1px]  border-[#444] pb-2">
                  <span className="flex gap-2">
                    <img src={item.img} alt="#" />
                    <b className="text-grayF">{item.coutri}</b>
                  </span>

                  {item.check ? (
                    <div>
                      <input defaultChecked type="checkbox" id="switch4" className='switch hidden w-5' />
                      <label htmlFor="switch4">
                      </label>
                    </div>
                  ) : (
                    <div>
                      <input type="checkbox" id="switch4" className='switch hidden w-5' />
                      <label htmlFor="switch4">
                      </label>
                    </div>
                  )}
                </div>
                {item.number.map((res, id) => {
                  return (
                    <div key={id} className="flex justify-between items-center  content-center w-[100%] ">
                      <p
                        className={`${res.check ? "text-greenF" : "text-grayF"
                          } font-bold  desktop:text-[15px] laptop:text-[10px]`}
                      >
                        {res.nums}
                      </p>
                      {res.check ? (
                        <span>
                          <input defaultChecked type="checkbox" id="switch4" className='switch hidden w-5' />
                          <label htmlFor="switch4">
                          </label>
                        </span>
                      ) : (
                        <span>
                          <input type="checkbox" id="switch5" className='switch hidden w-5' />
                          <label htmlFor="switch5">
                          </label>
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      {/* ********************************************************************************* */}

      <div className="flex items-center  flex-col min-h-[400px] tablet:flex-col   gap-5">
        <div className="min-h-[220px] w-[100%] flex flex-col mx-auto items-center  mobil:items-center minMobil:items-center gap-4 ">
          <h3 className="text-white font-bold text-[25px] text-start mobil:text-center minMobil:text-center leading-5 mb-3">
            Usage Summary
          </h3>
          <div className="flex w-[100%]   align-center justify-between mobil:pl-24 tablet:pl-0 items-center mx-auto content-center gap-3 flex-wrap">
            {card.map((item, id) => {
              return (
                <div key={id} className="relative w-[270px] h-[150px] bg-lightBlack rounded-md flex flex-col justify-center items-center  text-center gap-4">
                  <p className="absolute -top-5 left-[40px] bg-bleck w-[190px] h-12 rounded-[50px] p-[10px]">
                    <span className="flex justify-center align-center content-center text-white text-center text-[14px]">
                      {item.name}
                    </span>
                  </p>
                  <div>
                    <h3 className="text-white text-[36px]">
                      {item.prise}
                      <span className="text-red text-[27px]"> ₽</span>
                    </h3>
                    <p className="text-grayF text-[14px] leading-5 font-BeauSans font-normal">
                      Dec 3, 2021, 11:33:28 PM
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* ************************************************************************************* */}

        <div className="min-h-[220px]  w-[100%] flex flex-col tablet:items-start mobil:items-center minMobil:items-center  gap-4  ">
          <h3 className="text-white font-bold text-[25px] leading-5 mb-3">
            Traffic balance
          </h3>
          <div className="flex  align-center items-center gap-5 flex-wrap">
            {card2.map((item, id) => {
              return (
                <div key={id} className="relative w-[270px] mx-auto h-[150px] bg-lightBlack rounded-md flex flex-col justify-center  content-center align-center text-center gap-4">
                  <p className="absolute -top-5 left-[40px] bg-bleck w-[190px] h-12 rounded-[50px] p-[10px]">
                    <span className="flex justify-center align-center content-center text-white text-center text-[14px]">
                      {item.name}
                    </span>
                  </p>
                  <div>
                    <h3 className="text-white text-[36px]">
                      {item.prise}
                      <span className="text-red text-[27px]"> ₽</span>
                    </h3>
                    <p className="text-grayF text-[14px] leading-5 font-BeauSans font-normal">
                      Dec 3, 2021, 11:33:28 PM
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccaunt;

/* 

import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </div>
  );
}

*/
