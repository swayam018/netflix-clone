import Image from 'next/image';
import React from 'react'
import settingtab from '../../../../../public/settingup.png'
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
function Register() {
    return (
        <div className='bg-white'>
            <Navbar opacity={0} slate={50} />
            <hr />
            <div className=' bg-slate-50 h-full flex flex-col items-center gap-10 pt-10'>
                <div className=' [&>*]:text-slate-950 flex flex-col gap-4 w-80 justify-center items-center'>
                    <Image src={settingtab} alt='settingup' width={200} height={100} />
                    <span className='text-center'>STEP 1 OF 3</span>
                    <span className=' text-4xl font-bold text-center'>Finish setting up your account</span>
                    <span className=' text-xl text-center'>Netflix is personalised for you. Create a password to watch on any device at any time.</span>
                    <button className=' bg-red-700 px-8 py-2 rounded-md w-full hover:bg-customred-400'><Link href="/signup/signupform" className=' text-slate-50 text-2xl'>Next</Link></button>
                </div>
            <Footer />
            </div>
        </div>
    )
}

export default Register;