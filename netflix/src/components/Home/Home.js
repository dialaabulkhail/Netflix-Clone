import React from "react";
import { Row, Container } from "react-bootstrap"
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import axios from "axios";

function Home() {
    const [movies, setMovies] = useState([])

    function fetchData() {
        axios.get(`https://diala-movie.herokuapp.com/trending`).then(response => {
            setMovies(response.data);
        })
    }

    const updateCaptions = (data, id) => {
        let updateMovies = movies.map(movie => {
            if (movie.id == id) {
                movie.caption = data.userCaption;
                return movie;
            } else return movie;
        })
        setMovies(updateMovies);
    }

    useEffect(fetchData, []);

    
    return (
        <>
            <h1>Movies</h1>
            <main>
                {movies && (
                    <Container fluid className="main-container">
                        <Row className="flex-row">
                            <MovieList movies={movies} updateCaption={updateCaptions} />
                        </Row>
                    </Container>
                )}
            </main>
        </>
    )
}

export default Home;