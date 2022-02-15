import { FormGroup, Modal, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import FavList from "../FavList/FavList";


function ModalMovie(props) {

  const commentRef = useRef();
  function handleCaption(e) {
    e.preverntDefault();
    const userCaption = commentRef.current.value;
    const newCaption = { ...props.movie, userCaption };

  }
  return (
    <>
   
      <Modal show={props.show} onHide={() => { props.handleFav() }}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={props.movie.poster_path} alt={props.movie.title}/>
        <p>{props.movie.caption}</p>
        </Modal.Body>
        <Modal.Footer>
          <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
          <Form.Label>Comment :</Form.Label>
          <Form.Control ref={commentRef} type="textarea" placeholder={props.movie.caption ? props.movie.caption :"Add caption.."} />
          <FormGroup />
          <Button variant="primary" type="submit" onClick={handleCaption}>Add comment</Button>

          <Button variant="secondary" onClick={props.handleFav}>
            Favorite</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalMovie;

