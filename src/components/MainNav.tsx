import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import netflixlog from '../../public/Netflix_logo.svg';
import mastercard from '../../public/MASTERCARD.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function MainNav() {
    const [isScroll, setisScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setisScroll(true);
            }
            else {
                setisScroll(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])
    return (
        <header className={` transition-all duration-400 ${isScroll?"bg-black":"bg-transparent"}  fixed top-0 w-full`}>
            <nav className='flex gap-4 item-center flex-row py-5 justify-between px-10 max-md:px-8 max-sm:px-4'>
                <div className='flex flex-row gap-14 max-md:gap-8'>
                    <Link href="/" > <Image src={netflixlog} alt="Netlix-Logo" width={107} height={40} className='' /></Link>
                    <div className=' min-[847px]:hidden flex gap-1 flex-row items-center'>
                        <span className=' text-lg'>Browse</span>
                        <div><ArrowDropDownIcon/></div>
                    </div>
                    <ul className='flex gap-4 flex-row items-center [&>*]:text-lg max-[847px]:hidden [&>*]:text-gray-200 '>
                        <li className='hover:text-gray-400'>Home</li>
                        <li className='hover:text-gray-400'>Series</li>
                        <li className='hover:text-gray-400'>Films</li>
                        <li className='hover:text-gray-400'>Recently Added</li>
                        <li className='hover:text-gray-400'>My List</li>
                    </ul>
                </div>
                <div className='flex flex-row gap-4 items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:fill-slate-400 max-sm:hidden">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:fill-slate-400 max-sm:hidden">
                        <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                        <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clipRule="evenodd" />
                    </svg>
                    <Image src={mastercard} alt='profilepic' width={32} height={32} className=' rounded' />
                </div>
            </nav>
        </header>
    );
}

export default MainNav;