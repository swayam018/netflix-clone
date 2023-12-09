import Image from 'next/image';
import React from 'react'
import settingtab from '../../../../../public/settingup.png'
import Link from 'next/link';
function Register() {
  return (
      <div className=' bg-slate-50 h-full'>
          <div className=' [&>*]:text-slate-950 flex flex-col gap-5 w-7/12 justify-center items-center'>
              <Image src={settingtab} alt='settingup' width={200} height={100} />
              <span>STEP 1 OF 3</span>
              <span>Finish setting up your account</span>
              <span>Netflix is personalised for you. Create a password to watch on any device at any time.</span>
              <button className=''><Link href="/">Next</Link></button>
          </div>
    </div>
  )
}

export default Register;