import { FormGroup, Modal, Form, Button } from "react-bootstrap";
import { useRef, useState } from "react";


function ModalMovie(props) {

  const commentRef = useRef();
  function handleCaption(e) {
    console.log(e)
    e.preventDefault();
    const userCaption = (commentRef.current.value) ;
    const newData = { ...props.movie, userCaption };
    props.updateCaption(newData, props.movie.id);

  }


  async function addToFavorite(movie) {
    try {
      const response = await fetch(`https://diala-movie.herokuapp.com/addMovie`, {
        method: "POST",
        header: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: movie.title,
          image: movie.poster_path,
          comment: movie.comment,
        })
      })
      const data = await response.json();
    }

    catch (error) {
      console.log("error", error)
    }
  }

  
  return (
    <>

      <Modal show={props.show} onHide={() => { props.handleClose() }}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img width="100%" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.movie.poster_path}`} alt={props.movie.title} />
          <p>{props.movie.caption}</p>
        </Modal.Body>
        <Modal.Footer>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" />
            <Form.Label>Captions: </Form.Label>
            <Form.Control ref={commentRef} type="textarea"  placeholder={props.movie.caption ? props.movie.caption : "Add Your Caption Here..."} />
            <FormGroup />

            <Button className="addBtn" variant="primary" type="submit" onClick={handleCaption}> Add a comment </Button>
         
          <Button variant="secondary" onClick={props.handleClose}>
            close</Button>

          <Button variant="primary" onClick={() => addToFavorite(props.movie)}>
            Favorite</Button>

        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalMovie;

