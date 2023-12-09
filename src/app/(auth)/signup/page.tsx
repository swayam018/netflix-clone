import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import tickround from '../../../../public/check-mark.png';
import tick from '../../../../public/tick.png';


function Signup() {
    return (
        <div className='bg-white'>
            <Navbar opacity={0} slate={50} />
            <hr />
            <div className=' bg-slate-50 h-full flex flex-col items-center gap-10 pt-10'>
                <div className=' [&>*]:text-slate-950 flex flex-col gap-5 w-82 justify-center max-[458px]:w-76'>
                    <Image src={tickround} alt='settingup' width={40} height={40} className=' m-auto'/>
                    <span className='text-center pt-4'>STEP 2 OF 3</span>
                    <span className=' text-4xl font-bold text-center'>Choose your plan.</span>
                    <div className=' flex flex-row gap-4 items-center justify-start'>
                        <Image src={tick} alt='settingup' width={32} height={32} />
                        <span className='text-lg'>No commitments, cancel anytime.</span>
                    </div>
                    <div className=' flex flex-row gap-4 items-center'>
                        <Image src={tick} alt='settingup' width={32} height={32} />
                        <span className='text-lg'>Everything on Netflix for one low price.</span>
                    </div>
                    <div className=' flex flex-row gap-4 items-center'>
                        <Image src={tick} alt='settingup' width={32} height={32} />
                        <span className='text-lg'>No ads and no extra fees. Ever.</span>
                    </div>
                    <button className=' bg-red-700 px-8 py-2 rounded-md w-full hover:bg-customred-400 mt-4'><Link href="/signup/signupform" className=' text-slate-50 text-2xl'>Next</Link></button>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Signup;