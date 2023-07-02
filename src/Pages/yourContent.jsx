import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { FaInfinity } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { YOURCONTENTBODY, YOURDERCYPTION } from '.';

function YourContent(props) {
    const [btnCard, setBtnCard] = useState(true)


    return (
        <div className=' flex flex-col gap-3  justify-center'>
            <div className='w-[100%]  flex  items-center '>
                <button onClick={() => (setBtnCard(true))} className={`btn ${btnCard === true ? 'btn-danger' : 'btn-outline-secondary text-white border border-grayF '} minMobil:w-[50%] tablet:w-[25%] h-[50px]`}><p className='flex justify-center items-center font-BeauSans minMobil:tex-[14px] tablet:text-[16px] mt-1 '>Your account</p></button>
                <button onClick={() => (setBtnCard(false))} className={`btn ${btnCard === false ? 'btn-danger' : 'btn-outline-secondary text-white border border-grayF '}minMobil:w-[50%] tablet:w-[25%] h-[50px]`}><p className='flex justify-center items-center font-BeauSans minMobil:tex-[12px] tablet:text-[16px] '>Decryption of your account</p></button>
            </div>

            <div>
                {
                    btnCard ? <YOURCONTENTBODY /> : <YOURDERCYPTION />
                }

            </div>

        </div>
    );
}

export default YourContent;
