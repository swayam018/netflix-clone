"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import tick from '../../../../../public/tick.png';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import ComputerIcon from '@mui/icons-material/Computer';
import TvIcon from '@mui/icons-material/Tv';
import { grey, pink, red } from '@mui/material/colors';


function PlanForm() {
    const [bgcolor, setBgcolor] = useState(' bg-red-700')
    const [acitve, setAcitve] = useState(0);
    const [planamount, setPlanamount] = useState(149);

    useEffect(() => {
        changeColor(acitve, planamount);
    }, [])

    const changeColor = (data: number, amount: number) => {
        setAcitve(data);
        setPlanamount(amount);
        setBgcolor('bg-customred-400');
        console.log(amount);
    }

    return (
        <div className='bg-white'>
            <Navbar opacity={0} slate={50} />
            <hr />
            <div className=' bg-slate-50 h-full flex flex-col items-center gap-10 pt-10 '>
                <div className=' [&>*]:text-slate-950 flex flex-col gap-5 w-3/4 justify-center max-[485px]:w-full  max-[485px]:pl-4 pb-16  '>
                    <span className='pt-4'>STEP 2 OF 3</span>
                    <span className=' text-4xl font-bold '>Choose the plan that’s right for you</span>
                    <div className='flex flex-col gap-5 justify-center' >
                        <div className=' flex flex-row gap-4 items-center justify-start'>
                            <Image src={tick} alt='settingup' width={32} height={32} className=' select-none' />
                            <span className='text-lg'>Watch all you want. Ad-free.</span>
                        </div>
                        <div className=' flex flex-row gap-4 items-center'>
                            <Image src={tick} alt='settingup' width={32} height={32} className=' select-none' />
                            <span className='text-lg'>Recommendations just for you.</span>
                        </div>
                        <div className=' flex flex-row gap-4 items-center'>
                            <Image src={tick} alt='settingup' width={32} height={32} className=' select-none' />
                            <span className='text-lg'>Change or cancel your plan anytime.</span>
                        </div>
                    </div>

                    <div className='flex flex-row gap-8 items-start m-auto max-[785px]:m-0 max-[562px]:gap-4 max-[359px]:gap-2 pt-5 pr-4'>

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
                    <button className=' bg-red-700 px-8 py-2 rounded-md w-56 hover:bg-customred-400 mx-auto mt-8'><Link href={`/signup/paymentpicker?selectedplan=${planamount}`} className=' text-slate-50 text-2xl'>Next</Link></button>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default PlanForm;