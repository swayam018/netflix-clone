"use client"
import Footer from '@/components/Footer'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Header from '@/components/Header'
import { settingUser } from '@/store/reducer/planSlice'

function SingUpForm() {
    const statemail = useSelector((state: any) => state.plan);
    const dispatch = useDispatch();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [edittext,setEdittext]= useState(false)
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
                dispatch(settingUser());
                router.push('/signup');
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
           <Header/>
            <hr />
            <div className=' bg-slate-50 h-full flex flex-col items-center gap-10 pt-14'>
                <div className=' [&>*]:text-slate-950 flex flex-col gap-4 w-86 justify-center max-[460px]:w-80 max-[352px]:w-72'>
                    <span>STEP 1 OF 3</span>
                    <span className=' text-4xl font-bold '>Welcome back!</span>
                    <span className=' text-4xl font-bold '>Joining Netflix is easy.</span>
                    <span className=' text-xl '>Enter your password and you'll be watching in no time.</span>
                        <button onClick={()=>setEdittext(true)}>edit</button>
                    <form onSubmit={handleClick}>
                        <label htmlFor='email' className=' text-xl' >Email</label>
                        <input type='email' placeholder='Email' className={`w-full text-xl py-2 pl-2 -400 my-2 outline-none rounded-md ${!edittext?"border border-transparent":"border border-gray-400"} `} value={email} readOnly={!edittext} onChange={(e)=>setEmail(e.target.value)} />
                        <label htmlFor='password' className=' text-xl' >Password</label>
                        <input type='password' placeholder='Password' className='w-full text-xl py-2 pl-2 border border-gray-400 my-2 outline-none rounded-md' value={password} onChange={(e) => { setPassword(e.target.value) }} required/>
                        <div className="py-2" ><Link href="/forgotpassword" className=' text-lg text-blue-700'>Forgot your password?</Link></div>
                        <button className=' bg-red-700 px-8 py-2 rounded-md w-full hover:bg-customred-400 text-slate-50 text-2xl' >{loading ?( <span className='flex flex-row gap-4 justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="loading" className='w-8 h-8 animate-spin '><path fill="#88e2de" d="M50.287 32A18.287 18.287 0 1 1 32 13.713a1.5 1.5 0 1 1 0 3A15.287 15.287 0 1 0 47.287 32a1.5 1.5 0 0 1 3 0Z" data-name="Loading"></path>
                        </svg><span>Processing....</span></span>  ): "Next"}</button>
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default SingUpForm