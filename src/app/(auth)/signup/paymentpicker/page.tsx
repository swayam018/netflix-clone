"use client"
import Footer from '@/components/Footer';
import Image from 'next/image';
import tickround from '../../../../../public/check-mark.png';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import visa from '../../../../../public/VISA.png'
import master from '../../../../../public/MASTERCARD.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch } from 'react-redux';
import { isSubscribed } from "@/store/reducer/subSlice";
import Header from '@/components/Header';

function PaymentPicker() {
    const prices: any = useSelector((state: any) => state.plan);
    const dispatch = useDispatch();
    const email= prices.mail;
    const [planid, setPlanid] = useState("");

    useEffect(() => {
        if (prices.price === 149) {
            setPlanid("price_1OMGWGSBsdzm3xFe0lERPRyW");
        }
        else if (prices.price === 199) {
            setPlanid("price_1OMQ6bSBsdzm3xFeTtaP0UQZ")
        }
        else if (prices.price === 449) {
            setPlanid("price_1OMQ40SBsdzm3xFeXr6oImBW")
        }
        else if (prices.price === 649) {
            setPlanid("price_1OMQ8mSBsdzm3xFeB5v3lDE2")
        }
    }, [])


    const checkout = async ({ lineItems }: any) => {
        let stripepromise:any = null;
        const getstripe = () => {
            if (!stripepromise) {
                stripepromise = loadStripe("pk_test_51OKnQESBsdzm3xFeS8uzXNLnsiwa1zskzfN7lb9bLaoq9hlhUzMaLGdSheBLGp9tsKgsUbSrX1B88jgxO6m9FSCS009k2XBA9L");
                return stripepromise;
            }
        }
        const stripe = await getstripe();
        try {
            stripe.redirectToCheckout({
                mode: "payment",
                lineItems,
                successUrl: 'http://localhost:3000/browse',
                cancelUrl: window.location.origin,
            }).then(() => {
                console.log("payment successful");
                dispatch(isSubscribed(true)); 
              })
            } catch (error) {
              console.error(error);
            }
    }

    return (
        <div className='bg-white'>
          <Header/>
            <hr />
            <div className=' bg-slate-50 h-full flex flex-col items-center gap-10 pt-10 '>
                <div className=' [&>*]:text-slate-950 flex flex-col gap-5 w-86 justify-center max-[458px]:w-76 pb-16'>
                    <Image src={tickround} alt='settingup' width={40} height={40} className=' m-auto' />
                    <span className='text-center pt-4'>STEP 3 OF 3</span>
                    <span className=' text-4xl font-bold text-center'>Choose how to pay</span>
                    <div className='flex flex-col justify-center'>
                        <span className='text-lg text-center'>Your payment is encrypted and you can change your payment method at anytime</span>
                        <span className='text-lg text-center font-bold'>Secure for peace of mind.</span>
                        <span className='text-lg text-center font-bold'>Cancel easily online.</span>
                    </div>
                    <div className='w-full h-20 border-2 border-gray-400 rounded-lg flex items-center justify-around cursor-pointer' onClick={() => checkout({ lineItems: [{ price: planid, quantity: 1 }] })}>
                        <span className=' text-xl font-bold text-gray-700'>Credit or Debit Card</span>
                        <span className='flex flex-row'>
                            <Image src={visa} alt='visa' width={40} height={40} />
                            <Image src={master} alt='visa' width={40} height={40} />
                        </span>
                        <KeyboardArrowRightIcon/>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default PaymentPicker