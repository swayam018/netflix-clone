import Navbar from '@/components/Navbar'
import Image from 'next/image'
import bgImgae from '../../public/bg-image.jpg'

export default function Home() {
  return (
    <main className="bg-[url(bgImgae)]">
      <div >
        <Navbar />
        
        
      </div>
    </main>
  )
}
