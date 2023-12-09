import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

function SingUpForm() {
    return (
        <div className='bg-white'>
            <Navbar opacity={0} slate={50} />
            <hr />
            <div className=' bg-slate-50 h-full flex flex-col items-center gap-10 pt-14'>
                <div className=' [&>*]:text-slate-950 flex flex-col gap-4 w-86 justify-center max-[460px]:w-80 max-[352px]:w-72 '>
                    <span>STEP 1 OF 3</span>
                    <span className=' text-4xl font-bold '>Create a password to start your membership</span>
                    <span className=' text-xl '>Just a few more steps and you're done!
                        We hate paperwork, too.</span>
                    <form>
                        <input type='email' placeholder='Email' className='w-full text-xl pl-2 py-2 border border-gray-400 outline-none my-2 rounded-md'/>
                        <input type='password' placeholder='Password'  className='w-full text-xl py-2 pl-2 border border-gray-400 my-2 outline-none rounded-md'/>
                    <button className=' bg-red-700 px-8 py-2 rounded-md w-full hover:bg-customred-400'><Link href="/signup/signupform" className=' text-slate-50 text-2xl'>Next</Link></button>
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default SingUpForm