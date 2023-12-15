"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import Link from 'next/link'
import React, { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { settingUser, signupMail } from '@/store/reducer/planSlice'

function SingUpForm() {
    const statemail = useSelector((state: any) => state.plan);
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (statemail.mail.length > 0) {
            setEmail(statemail.mail);
        }
    }, [statemail.mail]);

    const handleClick = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        dispatch(signupMail(email));
        axios.post('/api/user/signup',{email,password}).then((response) => {
            if (response.data.success) {
                dispatch(settingUser(response.data.message));
                toast.success(response.data.message);
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
            <Navbar opacity={0} slate={50} />
            <hr />
            <div className=' bg-slate-50 h-full flex flex-col items-center gap-10 pt-14'>
                <div className=' [&>*]:text-slate-950 flex flex-col gap-4 w-86 justify-center max-[460px]:w-80 max-[352px]:w-72 '>
                    <span>STEP 1 OF 3</span>
                    <span className=' text-4xl font-bold '>Create a password to start your membership</span>
                    <span className=' text-xl '>Just a few more steps and you're done!
                        We hate paperwork, too.</span>
                    <form onSubmit={handleClick}>
                        <input type='email' placeholder='Email' className='w-full text-xl pl-2 py-2 border border-gray-500 outline-none my-2 rounded-md text-gray-700' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                        <input type='password' placeholder='Add Password' className='w-full text-xl py-2 pl-2 border border-gray-500 my-2 outline-none rounded-md text-gray-700' value={password} onChange={(e) => { setPassword(e.target.value) }} required />   
                    <button className=' bg-red-700 px-8 py-2 rounded-md w-full hover:bg-customred-400 text-slate-50 text-2xl'>{loading?"Loading....":"Next"}</button>
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default SingUpForm