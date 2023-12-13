"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

function SingUpForm() {
    const statemail = useSelector((state: any) => state.plan);
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (statemail.mail.length > 0) {
            setEmail(statemail.mail);
            console.log(email);
        }
    }, [statemail.mail]);

    const handleClick = async (e: any) => {
        setLoading(true);
        e.preventDefault();
        axios.post('/api/user/login', { email, password }).then((response) => {
            if (response.data.success) {
                toast.success(response.data.message);
                router.push('/login');
            }
            else {
                toast.error(response.data.message);
            }
            setLoading(false);
        }).catch((err) => {
            console.log("error during sending data to server", err);
            setLoading(false);
        })
    }

    return (
        <div className='bg-white'>
            <Navbar opacity={0} slate={50} />
            <hr />
            <div className=' bg-slate-50 h-full flex flex-col items-center gap-10 pt-14'>
                <div className=' [&>*]:text-slate-950 flex flex-col gap-4 w-86 justify-center max-[460px]:w-80 max-[352px]:w-72 '>
                    <span>STEP 1 OF 3</span>
                    <span className=' text-4xl font-bold '>Welcome back!</span>
                    <span className=' text-4xl font-bold '>Joining Netflix is easy.</span>
                    <span className=' text-xl '>Enter your password and you'll be watching in no time.</span>
                    <form >
                        <label htmlFor='email' className=' text-xl' >Email</label>
                        <input type='email' placeholder='Email' className='w-full text-xl pl-2 py-2 outline-none my-2 rounded-md' value={email} readOnly />
                        <label htmlFor='password' className=' text-xl' >Password</label>
                        <input type='password' placeholder='Password' className='w-full text-xl py-2 pl-2 border border-gray-400 my-2 outline-none rounded-md' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <div className="py-2" ><Link href="/forgotpassword" className=' text-lg text-blue-700'>Forgot your password?</Link></div>
                        <button className=' bg-red-700 px-8 py-2 rounded-md w-full hover:bg-customred-400 text-slate-50 text-2xl' onClick={handleClick}>{loading ? "Loading...." : "Next"}</button>
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default SingUpForm