"use client"
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Tv from '../../public/tv.png';
import Tvsecond from '../../public/device-pile-in.png';
import cartoon from '../../public/cartoon.png';
import mobile from '../../public/mobile-0819.jpg';
import strangerThings from '../../public/stranger-things.png'
import downloadabutton from '../../public/download.json';
import Lottie from 'lottie-react';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]" >
        <Navbar opacity={70 } slate={950} />
        <div className='flex bg-slate-950 bg-opacity-70 pt-56 pb-40 items-center justify-center max-sm:pt-19 max-md:pt-28 max-sm:pb-20'>
          <div className='flex flex-col w-10/12 justify-center item-center gap-5'>
            <span className=' text-5xl text-slate-50 font-bold text-center max-sm:text-4xl'>The biggest Indian hits. Ready to watch here from ₹149.</span>
            <span className=' text-2xl text-slate-50 font-bold text-center max-sm:text-xl'>Join today. Cancel anytime.</span>
            <span className=' text-2xl text-slate-50 font-bold text-center max-sm:text-xl'>Ready to watch? Enter your email to create or restart your membership.</span>
            <form className='flex flex-row justify-center gap-4 max-sm:flex-col max-sm:items-center'>
              <input type='email' placeholder='Enter your email address' className=' outline-none text-lg py-2 pl-2 w-80 rounded-sm  text-slate-50 bg-slate-950 bg-opacity-80' />
              <button className='text-slate-50 font-bold text-xl bg-customred-400 px-4 hover:bg-red-800 rounded-sm max-sm:py-2 max-sm:text-base '>Get Started <ChevronRightIcon /></button>
            </form>
          </div>
        </div>
      </div>


      <div className=' h-2 bg-hrbar-400' />
      <div className=' w-10/12 pt-8 pb-10 m-auto flex flex-row justify-center items-center gap-10 max-lg:flex-col max-xl:w-full '>
        <div className='flex flex-col justify-center w-5/12 gap-10 max-lg:w-11/12 max-lg:items-center '>
          <span className='text-5xl font-bold max-lg:text-center max-sm:text-4xl' >Enjoy on your TV</span>
          <span className='text-2xl max-lg:text-center max-sm:text-xl'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</span>
        </div>
        <div className='relative overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src={Tv} alt='Tv' width={508} height={80} className='relative z-10' />
            <video width="100%" height="100%" autoPlay loop muted className='absolute inset-0 z-0 right-0'>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className=' h-2 bg-hrbar-400 ' />
      <div className=' w-11/12 pt-8 pb-8 m-auto flex flex-row justify-center items-center gap-10 max-lg:flex-col max-xl:w-full max-md:gap-0 max-lg:gap-0 max-[517px]:m-0 '>
        <div className='relative overflow-hidden'>
          <Image src={mobile} alt='Tv' width={508} height={80} className='relative z-10' />
          <div className=' w-fit h-24 flex flex-row gap-5 bg-black border-2 border-hrbar-400 rounded-lg p-2 relative bottom-28 left-24 z-50  max-[517px]:bottom-20 max-[517px]:left-28 max-[491px]:left-28 max-[459px]:gap-4 max-[517px]:h-17 max-[468px]:left-24 max-[416px]:left-20  max-[389px]:left-17 max-[362px]:left-12'>
            <Image src={strangerThings} alt='stranger-things' width={56} height={40} className=' max-[517px]:w-11'/>
            <div className='flex flex-col gap-1 justify-center '>
              <span className=' font-bold max-[459px]:text-sm'>Stranger Things</span>
              <span className=' text-blue-700 max-[459px]:text-sm'>Downloading....</span>
            </div>
            <Lottie animationData={downloadabutton} loop={true} />
          </div>
        </div>
        <div className='flex flex-col justify-center w-5/12 gap-10 max-lg:w-11/12 max-lg:items-center '>
          <span className='text-5xl font-bold max-lg:text-center max-sm:text-4xl leading-normal' >Download your shows to watch offline</span>
          <span className='text-2xl max-lg:text-center max-sm:text-xl'>Save your favourites easily and always have something to watch.</span>
        </div>
      </div>


      <div className=' h-2 bg-hrbar-400' />
      <div className=' w-10/12 pt-8 pb-10 m-auto flex flex-row justify-center items-center gap-10 max-lg:flex-col max-xl:w-full '>
        <div className='flex flex-col justify-center w-5/12 gap-10 max-lg:w-11/12 max-lg:items-center '>
          <span className='text-5xl font-bold max-lg:text-center max-sm:text-4xl' >Watch everywhere</span>
          <span className='text-2xl max-lg:text-center max-sm:text-xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
        </div>
        <div className='relative overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src={Tvsecond} alt='Tv' width={508} height={80} className='relative z-10' />
            <video width="64%" height="100%" autoPlay loop muted className='absolute inset-y-9 inset-x-23 z-0 max-[476px]:inset-y-8 max-[476px]:inset-x-19 max-[416px]:inset-x-17 max-[398px]:inset-y-7 max-[364px]:insest-x-2'>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className=' h-2 bg-hrbar-400' />
      <div className=' w-10/12 pt-8 pb-10 m-auto flex flex-row justify-center items-center gap-10 max-lg:flex-col max-xl:w-full '>
        <div className='relative overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src={cartoon} alt='Tv' width={508} height={80} className='relative z-10' />
          </div>
        </div>
        <div className='flex flex-col justify-center w-5/12 gap-10 max-lg:w-11/12 max-lg:items-center '>
          <span className='text-5xl font-bold max-lg:text-center max-sm:text-4xl' >Create profiles for kids</span>
          <span className='text-2xl max-lg:text-center max-sm:text-xl'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</span>
        </div>
      </div>

      <div className=' h-2 bg-hrbar-400 mb-5' />
      <Footer/>
    </main>
  )
}
