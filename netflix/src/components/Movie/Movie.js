// import { Card } from "react-bootstrap";
// import { Button } from "react-bootstrap"
// import ModalMovie from "../ModalMovie/ModalMovie";
// import { useState } from "react";

// function Movie(props) {
//     console.log(props)
//     const [show, setShow] = useState(false);
//     return (

//         <div>
//             <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src={props.movies.poster_path} />
//                 <Card.Body>
//                     <Card.Title>{props.movies.title}</Card.Title>
//                     <Card.Text>{props.movies.overview}</Card.Text>
//                     <Button variant="primary" onClick={() => { setShow(true) }}>show movie Model</Button>
//                 </Card.Body>
//             </Card>
//             < ModalMovie show={show} movie={props} handleFav={() => { setShow(false) }}/>
//         </div>

//     )
// }
// export default Movie;