"use client"
import { removeModal, addtoList, removetoList } from '@/store/reducer/movieSlice'
import {CheckIcon,PlusIcon} from '@heroicons/react/24/outline'
import MuiModal from '@mui/material/Modal'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'

const toastStyle = {
    background: 'white',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '15px',
    borderRadius: '9999px',
    maxWidth: '1000px',
}
type Movie = {
    title: string
    backdrop_path: string
    media_type?: string
    release_date?: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}

function Modal() {
    const dispatch = useDispatch();
    const data: any = useSelector((state: any) => state.movie)
    const [trailer, setTrailer] = useState('');
    const [genres, setGenres] = useState([])
    const [muted, setMuted] = useState(true)
    const [addedToList, setAddedToList] =  useState(false);
    const [movies, setMovies] = useState<Movie | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setMovies(data.movieinfo);
        setShowModal(data.modalinfo);
        setAddedToList(data.addlist);
        setTrailer('');
        if (!movies) return

        async function fetchMovie() {
            const data = await fetch(
                `https://api.themoviedb.org/3/${movies?.media_type === 'tv' ? 'tv' : 'movie'
                }/${movies?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY
                }&language=en-US&append_to_response=videos`
            )
                .then((response) => response.json())
                .catch((err) => console.log(err.message))

            if (data?.videos) {
                const index = data.videos.results.findIndex(
                    (element: any) => element.type === 'Trailer'
                )
                setTrailer(data.videos?.results[index]?.key)
            }

            if (data?.genres) {
                setGenres(data.genres)
            }
        }
        if(showModal){
            fetchMovie();
        }
    }, [data.movieinfo,data.modalinfo,showModal])

    useEffect(
        () =>
          setAddedToList(
            data.addlist.findIndex((result:any) => result.id === movies?.id) !== -1
          ),
        [movies,data]
      )

    const handleList = async () => {
        if (addedToList) {
            dispatch(removetoList(movies));
            toast(
                `${movies?.title || movies?.original_name} has been removed from My List`,
                {
                    duration: 8000,
                    style: toastStyle,
                }
            )
        } else {
            dispatch(addtoList(movies));
            toast(
                `${movies?.title || movies?.original_name} has been added to My List`,
                {
                    duration: 8000,
                    style: toastStyle,
                }
            )
        }
    }



    const handleClose = () => {
        dispatch(removeModal(data));
    }

    return (
        <MuiModal
            open={showModal}
            onClose={handleClose}
            className="fixex !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
        >
            <>
                <button
                    onClick={handleClose}
                    className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
                </button>

                <div className="relative pt-[56.25%]">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${trailer}`}
                            width="100%"
                            height="100%"
                            style={{ position: 'absolute', top: '0', left: '0' }}
                            playing
                            muted={muted}
                        />
                    <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
                        <div className="flex space-x-2">
                            <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" /></svg>
                                Play
                            </button>

                            <button className="modalButton" onClick={handleList}>
                                {addedToList ? (
                                    <CheckIcon className="h-7 w-7" />
                                ) : (
                                    <PlusIcon className="h-7 w-7" />
                                )}
                            </button>

                            <button className="modalButton">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                                </svg>
                            </button>
                        </div>
                        <button className="modalButton" onClick={() => setMuted(!muted)}>
                            {muted ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                                    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
                    <div className="space-y-6 text-lg">
                        <div className="flex items-center space-x-2 text-sm">
                            <p className="font-semibold text-green-400">
                                {/* {movies!.vote_average * 10}% Match */}
                            </p>
                            <p className="font-light">
                                {movies?.release_date || movies?.first_air_date}
                            </p>
                            <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                                HD
                            </div>
                        </div>

                        <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
                            <p className="w-5/6">{movies?.overview}</p>
                            <div className="flex flex-col space-y-3 text-sm">
                                <div>
                                    <span className="text-[gray]">Genres: </span>
                                    {genres.map((genre: any) => genre.name).join(', ')}
                                </div>

                                <div>
                                    <span className="text-[gray]">Original language: </span>
                                    {movies?.original_language}
                                </div>

                                <div>
                                    <span className="text-[gray]">Total votes: </span>
                                    {movies?.vote_count}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </MuiModal>
    )
}

export default Modal