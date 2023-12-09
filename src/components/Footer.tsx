import Link from 'next/link';
import React from 'react'

function Footer() {
    const footerData = ["FAQ",
        "Help Centre",
        "Account",
       " Media Centre",
        "Investor Relations",
        "Jobs",
        "Ways to Watch",
        "Terms of Use",
       " Privacy",
       " Cookie Preferences",
       " Corporate Information",
        "Contact Us",
        "Speed Test",
        "Legal Notices",
       " Only on Netflix"]
  return (
      <div className='flex flex-col gap-8 m-auto w-10/12 mb-2 mt-4'> 
          <div>
              <span className='text-gray-400'>Questions? Call <Link href="tel:000-800-919-1694" className='underline'>000-800-919-1694</Link></span>
          </div>
          <div className='flex flex-wrap w-full gap-4 max-[407px]:flex-col  '>
              {footerData.map((data) => (
                  <span className=" w-64 flex max-[962px]:w-52 max-[814px]:w-40 max-[610px]:mr-auto max-[407px]:w-full max-[407px]:justify-center" key={data}>
                      <span className=' underline  text-gray-400 max-[407px]:text-center '>{data }</span>
                  </span>
              ))}
          </div>
          <span className=' text-center text-gray-400 '>Made with 💙 by Swayam</span>
    </div>
  )
}

export default Footer;