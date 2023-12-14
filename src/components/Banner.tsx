import React from 'react'
import Image from 'next/image'


function Banner({banner}:any) {
    const length = banner.length;
    var randomNumber = Math.floor(Math.random() * length);
    return (
        <div className="flex flex-col space-y-2 py-20 justify-end md:space-y-4 h-[65vh] lg:h-[80vh] lg:justify-end  lg:pb-8 ">
            <div className="absolute top-0 left-0 -z-10 h-[100vh] w-screen ">
                <Image
                    src={`https://image.tmdb.org/t/p/original${banner[randomNumber]?.poster_path ||undefined}`}
                    alt="banner"
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: '140vh',
                        objectFit:"cover",
                      }}
                      width={500}
                      height={300}
                      priority={true} 
                />
            </div>
            <h1 className="text-2xl font-bold md:text-4xl lg:text-4xl ">
                {banner[randomNumber]?.title|| ""}
            </h1>
            <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
                {banner[randomNumber]?.overview||""}
            </p>

            <div className="flex space-x-3">
                <button className=" bg-white text-black px-4 py-2 flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                    Play
                </button>
                <button
                    className=" bg-[gray]/70 px-4 py-2 flex flex-row items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                    </svg>
                    More Info
                </button>
            </div>
        </div>
    )
}

export default Banner