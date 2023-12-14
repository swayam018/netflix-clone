import axios from 'axios';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const TrendingMovie =async ()=>{
    const response = await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US`);
    return response.data.results;
}

const TopRated =async ()=>{
    const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=e4e44a13615d79e9fcc02aeee08e3501&language=en-US&page=1`);
    return response.data.results;
}
const NetflixOriginal = async ()=>{
    const response = await axios.get( `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`);
    return response.data.results;
}
const ActionMovie = async ()=>{
    const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`);
    return response.data.results;
}
const ComdeyMovie = async ()=>{
    const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`);
    return response.data.results;
}
const HorrorMovie = async ()=>{
    const response = await axios.get( `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`);
    return response.data.results;
}
const RomanceMovie = async ()=>{
    const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`);
    return response.data.results;
}
const Documentray = async ()=>{
    const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`);
    return response.data.results;
}


export { TrendingMovie,TopRated,NetflixOriginal,ActionMovie,ComdeyMovie,HorrorMovie,RomanceMovie,Documentray} ; 