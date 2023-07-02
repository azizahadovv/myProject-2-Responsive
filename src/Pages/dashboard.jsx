import React, { useState } from "react";
import { LogOut, LogoFull } from "../image";
import Navbar from "./navber";
import { sidebar } from "../map";
import { useNavigate } from "react-router-dom";
import MyAccaunt from "./myaccaunt";
import Bill from "./bill";
import Support from "./support";
import Servis from "./servis";
import { styles } from "../style/styles";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

function Dashboard(props) {
  const navigate = useNavigate();
  const [openPage, setOpenPage] = useState(2);


  /* absolute laptop:w-[100px]  laptop:h-[720px] laptop:top-[0] laptop:left-[-90px]  flex items-center  laptop:flex-col justify-between ${styles.sidebarTable, styles.sidebarMobil, styles.sidebarMinMobil} */


  /* 
  
laptop:h-[500px] laptop:w-[100%]    m-0 desktop:pr-0  flex laptop:flex-col gap-2 items-center  ${styles.sidebarTable2}

  */


  return (
    <div className="bg-bleck w-full  p-0 m-0">
      <div className="container p-0  relative bg-bleck w-[100%] h-[100%]">
        <Navbar />
        <div className={`absolute minMobil:left-0 laptop:left-[-80px] -z-10 minMobil:top-[105px] laptop:top-0 minMobil:w-[100%] laptop:min-w-[95px] minMobil:min-h-[100px] laptop:min-h-[600px] flex minMobil:flex-row laptop:flex-col justify-between minMobil:overflow-x-scroll laptop:overflow-auto container`}>
          <div className={`flex minMobil:flex-row laptop:flex-col justify-between laptop:mt-3  items-start`}>
            {sidebar.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => setOpenPage(item.id)}
                  className={`flex justify-center align-center ${item.title===''?'minMobil:hidden laptop:block laptop:justify-center laptop:pt-3':"w-[95px] h-[90px] "} w-[95px] h-[90px] gap-2 flex-col  cursor-pointer  ${openPage === item.id && openPage !== 1
                    ? " bg-[#1D1C1C]"
                    : "text-grayF"
                    } `}
                >
                  <img
                  
                    className={`w-[30px] tablet:w-[25px] mobil:w-[25px] minMobil:w-[20px] flex justify-center align-center mx-auto ${openPage === item.id ? " divide-red" : ""
                      }`}
                    src={item.img}
                    alt="#"
                  />
                  <span
                    className={`desktop:w-[100%] desktop:text-[13px]  tablet:text-[12px] mobil:text-[11px] minMobil:text-[10px] flex justify-center  text-center ${openPage === item.id ? " text-red" : "text-grayF"
                      }`}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="exit ">
            <div
              onClick={() => navigate("/")}
              className={`flex justify-center items-center  flex-col cursor-pointer w-[95px] mr-5  h-[90px]  `}
            >
              <img
                className={`w-[30px] tablet:w-[30px] mobil:w-[30px] minMobil:w-[25px] flex justify-center align-center mx-auto 
                 `}
                src={LogOut}
                alt="#"
              />
              <span
                className={`w-[100%] flex justify-center text-grayF text-[13px]  tablet:text-[12px] mobil:text-[11px] minMobil:text-[10px]  text-center `}
              >
                log Out
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" container desktop:pl-[160px] desktop:pt-[100px] min-h-max   minMobil:pt-[170px]  laptop:pt-[100px] ">
        {openPage === 2 ? (
          <MyAccaunt />
        ) : openPage === 3 ? (
          <Bill />
        ) : openPage === 4 ? (
          <Servis />
        ) : (
          <Support />
        )}
      </div>

      <div className="footer w-full flex items-center mx-auto mt-4 bg-[#302F2F] min-h-[50px]">
        <div className="container  h-[100%] flex justify-around flex-wrap align-bottom content-end items-center">
          <p className="text-[14px] minMobil:text-[12px] font-BeauSans text-grayF font-normal leading-[21px]">
            © 2021 V-Tell Group of Companies
          </p>
          <div>
            <p className="text-[14px] font-BeauSans flex flex-wrap items-center justify-evenly minMobil:text-[12px] text-grayF font-normal leading-[21px]">
              Customer Service or Contact us:
              <a className="ml-1 mb-2 text-[#d5d3d3]" href="tel:9090">
                9090
              </a>{" "}
              | Email:
              <a
                className="ml-2 mb-2 text-[#d5d3d3]"
                href="service@v-tell.com"
              >
                service@v-tell.com
              </a>
            </p>
          </div>
          <span className="flex gap-3">
            <span className="text-[14px] minMobil:text-[12px] mb-2 font-BeauSans text-grayF font-normal leading-[21px]">
              Follow Us
            </span>
            <span className="flex  items-center gap-2 text-[14px]   minMobil:text-[12px] font-BeauSans text-grayF font-normal leading-[21px]">
              <a className="ml-1 mb-2 text-[#d5d3d3]" href="http://#">
                <AiOutlineFacebook />
              </a>
              <a className="ml-1 mb-2 text-[#d5d3d3]" href="http://#">
                <AiOutlineInstagram />
              </a>
              <a className="ml-1 mb-2 text-[#d5d3d3]" href="http://#">
                <AiOutlineTwitter />
              </a>
              <a className="ml-1 mb-2 text-[#d5d3d3]" href="http://#">
                <AiOutlineLinkedin />
              </a>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
