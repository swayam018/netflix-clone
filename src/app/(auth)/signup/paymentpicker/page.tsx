"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import tickround from '../../../../../public/check-mark.png';
import { checkout } from '@/components/Checkout';
import { useSelector } from 'react-redux';

function PaymentPicker() {
    const prices: any = useSelector((state: any) => state.plan);

    return (
        <div className='bg-white'>
            <Navbar opacity={0} slate={50} />
            <hr />
            <div className=' bg-slate-50 h-full flex flex-col items-center gap-10 pt-10 '>
                <div className=' [&>*]:text-slate-950 flex flex-col gap-5 w-4/12 justify-center max-[458px]:w-76 pb-16'>
                    <Image src={tickround} alt='settingup' width={40} height={40} className=' m-auto' />
                    <span className='text-center pt-4'>STEP 3 OF 3</span>
                    <span className=' text-4xl font-bold text-center'>Choose how to pay</span>
                    <span className='text-lg text-center'>Your payment is encrypted and you can change your payment method at anytime</span>
                    <span className='text-lg text-center'>Secure for peace of mind.</span>
                    <span className='text-lg text-center'>Cancel easily online.</span>
                    <button className=' bg-red-700 px-8 py-2 rounded-md w-full hover:bg-customred-400 mt-4' onClick={()=>checkout({lineItems:[{price: "price_1OMGWGSBsdzm3xFe0lERPRyW",quantity:1}]})}><Link href="/signup/signupform" className=' text-slate-50 text-2xl ' >Next</Link></button>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default PaymentPicker