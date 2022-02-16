
// import { Link } from "react-router-dom";
// import Movie from "../Movie/Movie"
import { Card, CardGroup, Button } from "react-bootstrap";
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";


function MovieList(props) {
    const [show, setShow] = useState(false);
    const [movie, setMovie] = useState([]);

    console.log(props)
    return (
        <>
            <CardGroup style={{ display: "flex", justifyContent: "space-around" }}></CardGroup>
            {
                props.movies.map(movie => {
                    return <div key={movie.id}>
                        <Card key={movie.id} >
                            <Card.Img variant="top" src= {`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.overview ? movie.overview : "No text"}
                                </Card.Text>
                                <Card.Text>
                                    {movie.caption ? movie.caption : "No Caption Added"}
                                </Card.Text>
                                <Button variant="primary" onClick={() => { setMovie(movie); setShow(true) }}>show movie Model</Button>
                            </Card.Body>
                        </Card>
                        </div>;
                })
            }
            <CardGroup/>
             { show && <ModalMovie show={show} movie={movie} handleClose={() => { setShow(false) }} updateCaption={props.updateCaption} />}
           
        </>
    )

}

export default MovieList;