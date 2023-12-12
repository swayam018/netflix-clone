"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(true);
    const router = useRouter();

    const handleClick = (e: any) => {
        e.preventDefault();
        axios.post('/api/user/login', { email, password }).then((response) => {
            if (response.data.success) {
                toast.success(response.data.message);
                router.push('/browse');
            }
            else {
                toast.error(response.data.message);
            }
        }).catch((err) => {
            console.log("error during sending data to server", err);
        })
    }

    return (

        <div className="h-full w-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-opacity-40 max-lg:bg-black">
            <div className='h-full w-full bg-black bg-opacity-40 pb-80'>
                <Navbar />

                <div className='m-auto w-[470px] h-[470px] bg-black bg-opacity-70 flex flex-col item-center justify-center pl-10 gap-4 pr-10 mt-10  max-[523px]:w-82  '>
                    <div className=' text-3xl '>Sign In</div>
                    <form className='flex flex-col gap-5  w-86 max-[523px]:w-72 '>
                        <div className='flex flex-col gap-2   '>
                            <label htmlFor='email' >Email</label>
                            <input type="email" name='email' value={email} placeholder='Enter Email here....' onChange={(e) => setEmail(e.target.value)} className=' w-full h-11 border-2 border-gray-500 rounded-lg bg-[#333333] p-2 outline-none' />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor='password' className=' text-xl' >Password</label>
                            <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} className=' h-11 border-2  rounded-lg  bg-[#333333] p-2 outline-none border-gray-500 ' placeholder='Enter Password here....' />
                        </div>
                        <div className='flex flex-col items-center'>
                        <button type="submit" className=' w-8/12  h-10 bg-customred-400 text-slate-50 hover:bg-red-400 text-xl  rounded-lg' onClick={handleClick} >Sign in</button>
                       </div>
                    </form>
                    <div className=' flex flex-row justify-between '>
                        <span>Remember me</span>
                        <span>Need help?</span>
                    </div>
                    <div>
                        <Link href="/signup/signupform">New To Netflix? Sign up Now</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login