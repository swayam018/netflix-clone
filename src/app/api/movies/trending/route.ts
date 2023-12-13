import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGU0NGExMzYxNWQ3OWU5ZmNjMDJhZWVlMDhlMzUwMSIsInN1YiI6IjYzMzZlMGE0MjU1ZGJhMDA3YzdjYWYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nAO2u-ny_s4qmxQFsZjXmPWacm426EvWqOWNy3IG3GM'
            }
        };
        
        const response = await axios.request(options);
        
        return NextResponse.json({ message: "success", resp: response.data.results });
    } catch (error) {
        console.error('error: ' + error);
        return NextResponse.json({ message: "error", resp: null });
    }
}
