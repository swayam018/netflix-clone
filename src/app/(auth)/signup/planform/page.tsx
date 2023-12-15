import Footer from '@/components/Footer';
import Image from 'next/image';
import tick from '../../../../../public/tick.png';
import MemberPlan from '@/components/MemberPlan';
import Header from '@/components/Header';

function PlanForm() {
    return (
        <div className='bg-white'>
            <Header/>
            <hr />
            <div className=' bg-slate-50 h-full flex flex-col items-center gap-10 pt-10 '>
                <div className=' [&>*]:text-slate-950 flex flex-col gap-5 w-3/4 justify-center max-[485px]:w-full  max-[485px]:pl-4 pb-16  '>
                    <span className='pt-4'>STEP 2 OF 3</span>
                    <span className=' text-4xl font-bold '>Choose the plan that’s right for you</span>
                    <div className='flex flex-col gap-5 justify-center' >
                        <div className=' flex flex-row gap-4 items-center justify-start'>
                            <Image src={tick} alt='settingup' width={32} height={32} className=' select-none' />
                            <span className='text-lg'>Watch all you want. Ad-free.</span>
                        </div>
                        <div className=' flex flex-row gap-4 items-center'>
                            <Image src={tick} alt='settingup' width={32} height={32} className=' select-none' />
                            <span className='text-lg'>Recommendations just for you.</span>
                        </div>
                        <div className=' flex flex-row gap-4 items-center'>
                            <Image src={tick} alt='settingup' width={32} height={32} className=' select-none' />
                            <span className='text-lg'>Change or cancel your plan anytime.</span>
                        </div>
                    </div>
                    <MemberPlan/>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default PlanForm;