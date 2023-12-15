"use client"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import ComputerIcon from '@mui/icons-material/Computer';
import TvIcon from '@mui/icons-material/Tv';
import { useDispatch, useSelector } from 'react-redux';
import { selectPrice } from '@/store/reducer/planSlice';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function MemberPlan() {
    const [bgcolor, setBgcolor] = useState(' bg-red-700')
    const [acitve, setAcitve] = useState(0);
    const [planamount, setPlanamount] = useState(149);
    const dispatch = useDispatch();
    const prices: any = useSelector((state: any) => state.plan);
    const route = useRouter();

    useEffect(() => {
        if (prices.price === 149) {
            changeColor(0, planamount);
        }
        else if (prices.price === 199) {
            changeColor(1, planamount);
        }
        else if (prices.price === 449) {
            changeColor(2, planamount);
        }
        else if (prices.price === 649) {
            changeColor(3, planamount);
        }
    }, [])

    const changeColor = (data: number, amount: number) => {
        setAcitve(data);
        setPlanamount(amount);
        setBgcolor('bg-customred-400');
        dispatch(selectPrice(amount));
    }

    const clickHandler = ()=>{
        if(prices.user){
            route.push('/signup/paymentpicker');
        }
        else{
            route.push('/signup/register');
        }
    }
    return (
        <>
            <div className='flex flex-row gap-8 items-start m-auto max-[785px]:m-0 max-[562px]:gap-4 max-[359px]:gap-2 pt-5 pr-4 '>
                <div className={`w-28 flex justify-center flex-col items-center gap-7 `} onClick={() => { changeColor(0, 149) }}>
                    <div className={`w-28 h-28 ${acitve === 0 ? bgcolor : "bg-red-400"} font-bold justify-center flex items-center text-white max-[719px]:w-23 max-[719px]:h-23 max-[425px]:w-19 max-[425px]:h-19 max-[395px]:w-17 max-[395px]:h-17`} >
                        <span className='text-white max-[425px]:text-sm'>Mobile</span>
                    </div>
                    <ul className={` ${acitve === 0 ? " [&>*]:text-customred-400" : " [&>*]:text-gray-400"} [&>*]:font-bold text-xl flex flex-col gap-7 items-center`}>
                        <li >₹149</li>
                        <li >Good</li>
                        <li >480p</li>
                        <li><PhoneIphoneIcon /></li>
                        <li><TabletMacIcon /></li>
                    </ul>
                </div>

                <div className={`w-28 flex justify-center flex-col items-center gap-7`} onClick={() => { changeColor(1, 199) }}>
                    <div className={`w-28 h-28 ${acitve === 1 ? bgcolor : "bg-red-400"} font-bold justify-center flex items-center max-[719px]:w-23 max-[719px]:h-23 max-[425px]:w-19 max-[425px]:h-19 max-[395px]:w-17 max-[395px]:h-17`} >
                        <span className='text-white max-[425px]:text-sm'>Basic</span>
                    </div>
                    <ul className={` ${acitve === 1 ? " [&>*]:text-customred-400" : " [&>*]:text-gray-400"} [&>*]:font-bold text-xl flex flex-col gap-7 items-center `}>
                        <li >₹199</li>
                        <li >Good</li>
                        <li >720p</li>
                        <li><PhoneIphoneIcon /></li>
                        <li><TabletMacIcon /></li>
                        <li><ComputerIcon /></li>
                        <li><TvIcon /></li>
                    </ul>
                </div>

                <div className={`w-28 flex justify-center flex-col items-cent gap-7`} onClick={() => { changeColor(2, 449) }} >
                    <div className={`w-28 h-28 ${acitve === 2 ? bgcolor : "bg-red-400"} font-bold justify-center flex items-center max-[719px]:w-23 max-[719px]:h-23 max-[425px]:w-19 max-[425px]:h-19 max-[395px]:w-17 max-[395px]:h-17`} >
                        <span className='text-white max-[425px]:text-sm'>Standard</span>
                    </div>
                    <ul className={` ${acitve === 2 ? " [&>*]:text-customred-400" : " [&>*]:text-gray-400"} [&>*]:font-bold text-xl flex flex-col gap-7 items-center`}>
                        <li >₹449</li>
                        <li >Better</li>
                        <li >1080p</li>
                        <li><PhoneIphoneIcon /></li>
                        <li><TabletMacIcon /></li>
                        <li><ComputerIcon /></li>
                        <li><TvIcon /></li>
                    </ul>
                </div>

                <div className={`w-28 flex justify-center flex-col items-center gap-7`} onClick={() => { changeColor(3, 649) }}>
                    <div className={`w-28 h-28 ${acitve === 3 ? bgcolor : "bg-red-400"} font-bold justify-center flex items-center max-[719px]:w-23 max-[719px]:h-23 max-[425px]:w-19 max-[425px]:h-19 max-[395px]:w-17 max-[395px]:h-17`} >
                        <span className='text-white max-[425px]:text-sm'>Premium</span>
                    </div>
                    <ul className={` ${acitve === 3 ? " [&>*]:text-customred-400" : " [&>*]:text-gray-400"} [&>*]:font-bold text-xl flex flex-col gap-7 items-center`}>
                        <li >₹649</li>
                        <li >Best</li>
                        <li >4k</li>
                        <li><PhoneIphoneIcon /></li>
                        <li><TabletMacIcon /></li>
                        <li><ComputerIcon /></li>
                        <li><TvIcon /></li>
                    </ul>
                </div>
            </div>
            <button className=' bg-red-700 px-8 py-2 rounded-md w-56 hover:bg-customred-400  mt-8   mx-auto tracking-widest' onClick={clickHandler}><span className='text-slate-50  text-2xl'>Next</span></button>
        </>
    )
}

export default MemberPlan