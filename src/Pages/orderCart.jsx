import React from 'react';
import {FaPen} from 'react-icons/fa'
import {AiFillPlusSquare } from 'react-icons/ai'

function OrderCart({setBtn}) {
    return (
        <div className='flex flex-col justify-around gap-3 w-[100%] min-h-[550px] minMobil:px-0 tablet:px-10'>
           
            <div className='border-b border-[#444444] pb-5'>

                <div className='flex flex-col gap-1'>
                    <strong className=' text-white text-[18px] tablet:text-[22px] font-BeauSans font-bold capitalize leading-normal'>Cart</strong>
                    <p className='text-neutral-400 font-BeauSans minMobil:text-[13px] tablet:text-[16px] font-normal leading-normal'>Please review all items before proceeding with the order. </p>
                </div>
              
                <div className='flex flex-col minMobil:gap-4 tablet:gap-3'>
                    <div className='flex flex-wrap justify-between bg-neutral-900 bg-opacity-50 rounded-lg px-3 py-2'>
                        <div className='flex items-center gap-3'>
                            <span className='text-neutral-400 font-BeauSans minMobil:text-[12px] tablet:text-[16px] font-normal leading-normal'>Tariff:</span>
                            <strong className='text-white minMobil:text-[12px] tablet:text-[16px] font-BeauSans font-normal leading-normal'>Silver Plan</strong>
                            <button className='text-red flex font-BeauSans minMobil:text-[12px] tablet:text-[16px] items-center gap-1'><FaPen />Edit</button>
                        </div>
                        <span className="text-right text-white font-BeauSans minMobil:text-[15px] tablet:text-[16px] font-bold leading-normal">$98</span>
                    </div>

                    <div className='flex flex-wrap justify-between gap-2 bg-neutral-900 bg-opacity-50 rounded-lg px-3 py-2'>
                        <div className='flex justify-between gap-3'>
                            <span className='text-neutral-400 min-w-max font-BeauSans minMobil:text-[11px] tablet:text-[16px] font-normal leading-normal'>Number (Russia):</span>
                            <strong className='text-white min-w-max minMobil:text-[12px] tablet:text-[16px] font-BeauSans font-normal leading-normal'>+7 (958) 389 7090</strong>
                            <button className='text-red min-w-max flex font-BeauSans minMobil:text-[12px] tablet:text-[16px]  items-center gap-1'><FaPen />Edit</button>
                        </div>
                        <span className="text-right text-white font-BeauSans minMobil:text-[14px] tablet:text-[16px] font-bold leading-normal uppercase">FREE </span>
                    </div>
                    <div className='flex flex-wrap justify-between gap-2 bg-neutral-900 bg-opacity-50 rounded-lg px-3 py-2'>
                        <div className='flex flex-wrap justify-between gap-2'>
                            <span className='text-neutral-400 min-w-max font-BeauSans minMobil:text-[12px] tablet:text-[16px] font-normal leading-normal'>Overseas Phone Number:</span>
                            <button className='text-red min-w-max minMobil:text-[12px] tablet:text-[16px] flex font-BeauSans  items-center gap-1'><AiFillPlusSquare />Add Overseas Phone Number</button>
                        </div>
                        <span className="text-right text-white font-BeauSans minMobil:text-[14px] tablet:text-[16px] font-bold leading-normal uppercase">FREE </span>
                    </div>

             
                </div>
        
            </div>
           
            <div className='flex flex-col justify-evenly gap-5  w-[100%] h-[40%] '>
                <div className='flex justify-between items-center '>
                    <div className='flex flex-col gap-'>
                        <strong className='text-white font-BeauSans minMobil:text-[14px] tablet:text-[18px] font-bold leading-tight'>Summary</strong>
                        <span className="text-neutral-200 font-BeauSans minMobil:text-[12px] tablet:text-[14px] font-normal leading-tight">Payment by credit/debit card
                            <span className="text-neutral-400 font-BeauSans minMobil:text-[12px] tablet:text-[14px] font-normal leading-tight"> upon receipt at the office or delivery to the specified address.</span>
                        </span>
                    </div>
                    <div className='flex items-end align-baseline'>
                        <span className='text-white minMobil:text-[20px] tablet:text-[24px] font-BeauSans font-bold leading-7'> $ </span>
                        <strong className='text-white minMobil:text-[35px] tablet:text-[42px] font-BeauSans font-bold leading-10'>98</strong>
                    </div>
                </div>
                <div className=' flex minMobil:flex-col tablet:flex-row justify-between gap-3'>
                    <button onClick={()=>(setBtn(2))} className='btn btn-outline-light minMobil:w-[100%] tablet:w-[50%]'>Back </button>

                    <button onClick={()=>(setBtn(4))} className='btn btn-danger minMobil:w-[100%] tablet:w-[50%]'>Set Up Delivery</button>
                </div>
            </div>
        </div>
    );
}

export default OrderCart;