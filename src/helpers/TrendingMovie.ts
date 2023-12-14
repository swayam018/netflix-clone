// import axios from "axios";
// export const TrendingMovie = async () => {
//   try {
//     const options = {
//       method: "GET",
//       url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGU0NGExMzYxNWQ3OWU5ZmNjMDJhZWVlMDhlMzUwMSIsInN1YiI6IjYzMzZlMGE0MjU1ZGJhMDA3YzdjYWYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nAO2u-ny_s4qmxQFsZjXmPWacm426EvWqOWNy3IG3GM",
//       },
//     };

//     // const response = await axios.request(options);
//     const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=e4e44a13615d79e9fcc02aeee08e3501&language=en-US")
//     return response.data.results;
//   } catch (err: any) {
//     console.log("error occurred", err.message);
//     return [];
//   }
// };
// export const TopRated = async () => {
//   try {
//     const options = {
//       method: "GET",
//       url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGU0NGExMzYxNWQ3OWU5ZmNjMDJhZWVlMDhlMzUwMSIsInN1YiI6IjYzMzZlMGE0MjU1ZGJhMDA3YzdjYWYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nAO2u-ny_s4qmxQFsZjXmPWacm426EvWqOWNy3IG3GM",
//       },
//     };

//     const response = await axios.request(options);
//     return response.data.results;
//   } catch (err: any) {
//     console.log("error occurred", err.message);
//     return [];
//   }
// };
