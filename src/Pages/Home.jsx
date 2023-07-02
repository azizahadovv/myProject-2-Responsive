import React, { useState } from "react";
import { LogoFull, SimCard } from "../image";
import { useNavigate } from "react-router-dom";
import { styles } from "../style/styles";
// auth
// import { signInWithEmailAndPassword } from "firebase/auth";

// icons
import {
  AiFillFacebook,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineLeft,
  AiOutlineLine,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Modal } from 'antd';


// include styles

const Home = () => {
  const navigate = useNavigate();
  // const [ModalVisibled, setModalVisibled] = useState(true);
  const [ModalVisibled, setModalVisibled] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function LogInPage() {
    navigate("/dashboard");

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((res) => {
    //     console.log(res.user);
    //   })
    //   .catch((err) => {});
  }

  return (
    <div className="w-[100%] h-[100%] bg-black">
      <div className="bg-bleck  min-h-[740px] flex justify-between  flex-col ">
        <div className=" container  flex  items-center flex-wrap  justify-between tablet:justify-evenly  mobil:justify-evenly minMobil:justify-evenly">

          <div
            className={`h-[150px] w-max m-[25px]   flex items-center content-center gap-[25px]   `}
          >
            <label className="tablet:block mobil:hidden minMobil:hidden">
              <img src={LogoFull} alt="#" />
              <span className="text-grayF   sm:text-[11px] ss:text-[8px]">
                GLOBAL MOBILE OPERATOR
              </span>
            </label>
            <div
              className={` flex  justify-between items-start flex-col `}
            >
              <p
                onClick={() => navigate("/")}
                className="text-grayF  cursor-pointer w-[100%] flex text-[22px]  minMobil:text-[13px] mobil:text-[15px] tablet:text-[18px]"
              >
                <AiOutlineLeft className="mt-1" /> BACK TO HOMEPAGE
              </p>
              <span className="w-full h-[80%] flex p-2 flex-col justify-between ">
                <span className={` flex items-center font-BeauSans content-center justify-start gap-2 cursor-pointer`}>
                  <img
                    className=" flex align-center  justify-center w-[28px] minMobil:w-[22px] mobil:w-[25]  "
                    src={SimCard}
                    alt="sim-card"
                  />
                  <h3 className="text-white font-BeauSans sm:font-[700] mobil:text-[32px] minMobil:text-[15px] mt-1 ">
                    My V-Tell
                  </h3>
                </span>
                <p className="text-grayF text-[16px] minMobil:text-[12px] font-BeauSans font-normal">
                  Log in to access V-Tell subscriber's self care capabilities
                </p>
              </span>
            </div>
          </div>

          <div className=" w-max   min-h-[210px]  flex flex-col justify-around ">
            <span className="h-[110px] flex flex-col justify-evenly">
              <h1 className="text-white font-BeauSans  text-[30px] minMobil:text-[20px] mobil:text-[25px] font-normal">
                New Subscriber
              </h1>
              <p className={`text-grayF text-[18px]  minMobil:text-[14px] leading-8 font-normal font-BeauSans`}>
                Don’t have an account yet? Register now!
              </p>
            </span>

            <button
              type="button"
              onClick={() => setModalVisibled(true)}
              className="w-full btn btn-outline-danger button-warning mt-4"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => (navigate('/order'))}
              className="w-full btn btn-outline-danger button-warning mt-4"
            >
              Order
            </button>

          </div>

        </div>

        <Modal
          footer=''
          centered
          open={ModalVisibled}
          onCancel={() => (setModalVisibled(false))}
        >
          <div className=" h-[320px] flex flex-col content-center gap-1 ">
            <div
              className={`flex flex-col gap-2 justify-start content-start  h-[100px]  p-2`}
            >
              <span className=" text-[14px] leading-[15px] font-BeauSans  text-black">
                Enter your email address
              </span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[35px] rounded-[5px] font-BeauSans border border-black outline-none "
                type="text"
                placeholder="Email....."
              />
            </div>
            <div
              className={`flex flex-col gap-2 justify-start content-start  h-[120px]  p-2`}
            >
              <span className="w-[50%] text-[14px] leading-[15px]  font-BeauSans text-base text-black">
                Enter your password
              </span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-[35px] rounded-[5px] border font-BeauSans border-black outline-none "
                type="text"
                placeholder="password....."
              />
            </div>
            <button onClick={LogInPage} className="btn btn-danger w-100 ">
              Log in
            </button>
            <p className="text-black flex justify-center border-b-[0.5px] py-2  border-grayF">
              or
            </p>
            <div className="flex justify-center gap-3 mb-1">
              <button className="btn btn-dark">
                <AiOutlineGoogle />
              </button>
              <button className="btn btn-dark">
                <AiOutlineFacebook />
              </button>
              <button className="btn btn-dark">
                <AiOutlineGithub />
              </button>
            </div>
          </div>
        </Modal>


        {/* ********************************** fooooter **************************** */}

        <div className="footer w-full flex items-center mx-auto bg-[#302F2F] min-h-[50px]">
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
        {/* ********************************** fooooter **************************** */}


      </div>
    </div>
  );
};

export default Home;
