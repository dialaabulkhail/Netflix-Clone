
// import { Link } from "react-router-dom";
// import Movie from "../Movie/Movie"
import { Card, CardGroup, Button } from "react-bootstrap";
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";
import "./MovieList.css"


function MovieList(props) {
    const [show, setShow] = useState(false);
    const [movie, setMovie] = useState([]);

    console.log(props)
    return (
        <>



            <CardGroup>
            {
                props.movies.map(movie => {
                    return <div className="wrapper" key={movie.id}>
                        <Card key={movie.id} >

                            <Card.Img src= {`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} />
                           
                            <Card.Body>
                                <Card.Title className="cardTitle"><h4>{movie.title}</h4></Card.Title>
                              
                                <Card.Text>
                                    {movie.caption ? movie.caption : "No Caption Added"}
                               
                                </Card.Text>
                                <Button  className="cardButton" onClick={() => { setMovie(movie); setShow(true) }}>Show movie </Button>
                           
                            </Card.Body>
                        </Card>
                        </div>;
                })
            }
            </CardGroup>
             { show && <ModalMovie show={show} movie={movie} handleClose={() => { setShow(false) }} updateCaption={props.updateCaption} />}
           
        </>
    )

}

export default MovieList;