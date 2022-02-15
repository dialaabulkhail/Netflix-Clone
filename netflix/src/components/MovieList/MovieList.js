
// import { Link } from "react-router-dom";
// import Movie from "../Movie/Movie"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap"
import ModalMovie from "../ModalMovie/ModalMovie";
import { useState } from "react";



function MovieList(props) {
    const [show, setShow] = useState(false);

    // console.log((props)?props.movies[0].title:"nothing");
    console.log(props)
    return (
        <>
            {
                props.movies.map(movie => {

                    return  <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={movie.poster_path} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.overview}</Card.Text>
                            <Button variant="primary" onClick={() => { setShow(true) }}>show movie Model</Button>
                        </Card.Body>
                    </Card>
                    < ModalMovie show={show} movie={props} handleFav={() => { setShow(false) }}/>
                </div>;


                })
            } 
            


          
                {/* <Movie movies={props}/> */}
            
        </>
    )

}

export default MovieList;