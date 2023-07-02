import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderPURCHASE({ setBtn }) {
    const navigate = useNavigate()
    return (
        <div className=' flex flex-col gap-4 minMobil:pl-0 tablet:pl-3   minMobil:pr-0  laptop:pr-10 mt-2'>
            <div className='flex flex-col gap-1'>
                <strong className='text-white minMobil:text-[18px] tablet:text-[22px] font-bold capitalize leading-normal font-BeauSans'>Set Up Delivery</strong>
                <p className='text-neutral-400 minMobil:text-[13px] tablet:text-[16px] font-normal leading-normal font-BeauSans'>Dear customer, please fill in the form for courier delivery.</p>
            </div>
            <div className='flex flex-col gap-3'>
                <input className='w-[100%]  p-2 outline-none bg-lightBlack rounded border text-neutral-200 minMobil:text-[12px] tablet:text-[14px] font-normal leading-tight border-neutral-400' type="text" placeholder='First name' />

                <input className='w-[100%] p-2 outline-none bg-lightBlack rounded border text-neutral-200 minMobil:text-[12px] tablet:text-[14px] font-normal leading-tight border-neutral-400' type="text" placeholder='Last name' />

                <input className='w-[100%] p-2 outline-none bg-lightBlack rounded border text-neutral-200 minMobil:text-[12px] tablet:text-[14px] font-normal leading-tight border-neutral-400' type="text" placeholder='Contact phone number' />
            </div>
            <strong className=' text-white minMobil:text-[18px] tablet:text-[22px] font-BeauSans font-bold leading-tight'>Delivery Address</strong>
            <div className='flex flex-col gap-3'>
                <input className='w-[100%] p-2 outline-none bg-lightBlack rounded border text-neutral-200 minMobil:text-[12px] tablet:text-[14px] font-normal leading-tight border-neutral-400' type="text" placeholder='ZIP/State' />

                <input className='w-[100%] p-2 outline-none bg-lightBlack rounded border text-neutral-200 minMobil:text-[12px] tablet:text-[14px] font-normal leading-tight border-neutral-400' type="text" placeholder='City' />

                <div className='flex justify-between items-center'>
                    <input className='w-[35%] p-2 outline-none bg-lightBlack rounded border text-neutral-200 minMobil:text-[12px] tablet:text-[14px] font-normal leading-tight border-neutral-400' type="text" placeholder='Street' />

                    <input className='w-[35%] p-2 outline-none bg-lightBlack rounded border text-neutral-200 minMobil:text-[12px] tablet:text-[14px] font-normal leading-tight border-neutral-400' type="text" placeholder=' Building' />

                    <input className='w-[28%] p-2 outline-none bg-lightBlack rounded border text-neutral-200 minMobil:text-[12px] tablet:text-[14px] font-normal leading-tight border-neutral-400' type="text" placeholder=' Apartment' />

                </div>
                <label className='text-neutral-200 minMobil:text-[14px] tablet:text-[16px] font-BeauSans font-normal leading-none  gap-2 flex justify-start items-center content-center mt-2'>
                    <input defaultChecked type="checkbox" className='accent-red ' />
                    I confirm my consent to the processing of personal data
                </label>

            </div>
            <div className='flex minMobil:flex-col tablet:flex-row justify-between gap-3'>
                <button onClick={() => setBtn(3)} className='btn btn-outline-light minMobil:w-[100%] tablet:w-[50%]'>Back</button>
                <button onClick={() => (navigate('/your-accaunt'))}
                    className='btn btn-danger minMobil:w-[100%] tablet:w-[50%]'>Submit Request</button>

            </div>

        </div>
    );
}

export default OrderPURCHASE;