import React, { useState } from 'react';
import { orderINCLUDED } from '../map';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { orderBtn } from "../map";
import { INCLUDEDINPACKAGE, OrderPlan } from ".";
import { lineRight } from '../image';

function OrderINCLUDED({ setBtn }) {
    let navigate = useNavigate()
    const [modalVisivled, setModalVisibled] = useState(false)
    // const [btn1, setBtn1] = useState(1);
    // const [btn2, setBtn2] = useState(1);

    return (
        <div className='w-[100%] min-h-max'>
            <div className='flex flex-col items-baseline minMobil:gap-2 laptop:gap-3 w-[100%] minMobil:mt-0 laptop:mt-5 minMobil:px-0 laptop:px-4 '>

                {
                    orderINCLUDED.map((item) => {
                        return <div key={item.id} className=' w-[100%] h-7 border-b flex justify-between items-center content-center  border-[#444444] p-3 pb-4 cursor-pointer'>
                            <span className={`${item.img === "" ? "text-neutral-50 minMobil:text-[12px]  laptop:text-[18px] min-w-max font-bold  leading-tight" : ' text-neutral-200 flex justify-start gap-3 minMobil:text-[13px] font-BeauSans laptop:text-[16px] font-normal leading-normal'}`}> <img className='minMobil:w-3 laptop:w-4' src={item.img} alt="" /> {item.key}	</span>

                            <span className={`${item.img === "" ? 'text-right text-neutral-50 minMobil:text-[12px] laptop:text-[18px] font-bold  leading-tight' : 'text-right text-neutral-200 minMobil:text-[13px] font-BeauSans laptop:text-[16px] font-normal leading-normal'}`}>{item.value}</span>
                        </div>
                    })
                }
            </div>

            <div className="w-[100%] min-h-max minMobil:px-0 gap-3 laptop:px-4 flex flex-col justify-around ">
                <div className='flex justify-between flex-col gap-2 mt-1 min-h-max'>
                    <a href='#' className="text-[#E63739] minMobil:text-[14px] laptop:text-[16px] font-normal underline leading-normal">Check countries where V-Tell provides communication services</a>
                    <div className="text-neutral-400 minMobil:text-[14px] laptop:text-[16px] font-normal leading-tight">You can choose your new V-Tell phone number or transfer your existing phone number to V-Tell.
                    </div>
                </div>
                <div className='flex minMobil:flex-col gap-3 laptop:flex-row laptop:gap-5'>
                    <button className=" btn btn-outline-light minMobil:w-[100%] laptop:w-[50%] text-center text-neutral-50 text-[16px] font-bold">Transfer Your Phone Number</button>
                    
                    <button onClick={() => (setModalVisibled(true))} className=" btn btn-danger  minMobil:w-[100%] laptop:w-[50%] text-center text-white text-[16px] font-bold">Choose Phone Number</button>
                </div>
            </div>

            <Modal
                className='backdrop-blur-sm container bg-black minMobil:p-7'
                width={'100%'}
                footer=''
                bodyStyle={{ minHeight: "520px", background: "#302F2F" }}
                centered
                open={modalVisivled}

            >
                <div className='flex   w-[100%] '>
                    <button
                        onClick={() => setModalVisibled(false)}
                        className={`ModalOrder bg-[#252323] text-white  
                             flex justify-between w-[50%] items-center btnOrder  uppercase  h-12  text-center  font-bold  leading-none`}
                    >
                        <p className="text-center flex minMobil:text-[11px] tablet:text-[14px] laptop:text-[16px] justify-center items-center my-2 w-[100%]">
                            Connection Type
                        </p>
                    </button>
                    <button
                        className={`ModalOrder bg-red text-white  
                             flex justify-between w-[50%] items-center btnOrder  uppercase    text-center h-12 font-bold  leading-none`}
                    >
                        <p className="text-center flex justify-center minMobil:text-[11px] tablet:text-[14px] laptop:text-[16px] items-center my-2 w-[100%]">transfer number
                        </p>

                    </button>
                </div>
                <div className='w-[100%] h-[80%] mt-3 bg-lightBlack flex minMobil:flex-col laptop:flex-row items-center gap-5'>
                    <div className='minMobil:w-[100%]  laptop:w-[30%] h-[100%]  bg-lightBlack'>
                        <OrderPlan />
                    </div>
                    <div className=' minMobil:w-[100%] px-1 laptop:w-[62%]  flex flex-col minMobil:pb-4 tablet:mb-0  gap-5'>
                        <div className='w-[100%]'>
                            <b class=" h-[25px] text-white font-BeauSans minMobil:text-[18px] laptop:text-[22px] font-bold capitalize leading-normal">Transfer Your Phone Number</b>
                            <p class=" h-[25px] text-neutral-400 minMobil:text-[13px]  laptop:text-[16px] font-normal font-BeauSans leading-normal">Dear subscriber,
                                please fill out the following form to transfer your existing phone number.</p>
                        </div>
                        <div className='flex flex-col gap-3 justify-around  h-[100%] '>
                            <input className='w-[100%] h-10 rounded border placeholder:text-[#A7A7A7] bg-lightBlack minMobil:text-[14px] laptop:
                            text-[16px] font-BeauSans outline-none text-grayF border-neutral-400' type="text" placeholder='Number being transferred' />
                            <input className='w-[100%] h-10 rounded border placeholder:text-[#A7A7A7] bg-lightBlack minMobil:text-[14px] laptop:
                            text-[16px] font-BeauSans outline-none text-grayF border-neutral-400' type="text" placeholder='First name' />
                            <label className='flex gap-2 justify-start items-center '>
                                <input type="checkbox" className='accent-red' />
                                <span className='text-neutral-200 minMobil:text-[12px] laptop:text-[16px] font-normal font-BeauSans leading-none'>I confirm my consent to the processing of personal data</span>
                            </label>
                            <input className='w-[100%] minMobil:text-[14px] laptop: h-10 rounded border placeholder:text-[#A7A7A7] bg-lightBlack outline-none text-grayF border-neutral-400' type="number" placeholder='Contact phone number' />
                            <input className='w-[100%] minMobil:text-[14px] laptop:
                            text-[16px] font-BeauSans-BeauSans h-10 rounded border placeholder:text-[#A7A7A7] bg-lightBlack outline-none text-grayF border-neutral-400' type="email" placeholder='Email' />
                            <div className='flex minMobil:flex-col tablet:flex-row  gap-3'>
                                <button onClick={() => (setModalVisibled(false))} className='btn btn-secondary h-10 minMobil:w-[100%] tablet:w-[50%] '>Back</button>
                                <button onClick={() => (setBtn(2))} className='btn btn-danger h-10 minMobil:w-[100%] tablet:w-[50%] '>Submit Request</button>
                            </div>
                        </div>

                    </div>
                </div>

            </Modal>


        </div >
    );
}

export default OrderINCLUDED;