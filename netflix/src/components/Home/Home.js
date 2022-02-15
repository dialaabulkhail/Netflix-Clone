import React from "react";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import axios from "axios";

function Home() {
    const [movies, setMovies] = useState([])

    function fetchData() {
        axios.get(`https://diala-movie.herokuapp.com/trending`).then(response => {
            setMovies(response.data);
        })

        // try{
        //     const response = await fetch(`https://diala-movie.herokuapp.com/trending`)
        //     const data = await response.json();
        //     setMovies(data);
        // } catch(error){
        //     console.log(error);
        // }
    }
    useEffect(fetchData, []);

    console.log(movies)
    return (
        <>
            <h1>here is home</h1>

            {/* <MovieList movies={(movies) ? movies : "x"} /> */}
            <MovieList movies={movies}/>
        </>
    )
}

export default Home;