import {Card, CardGroup, Button} from "react-bootstrap"


function FavoritePage(props){
    console.log(props.title)
    return(

        <>
        <CardGroup styly={{ display: "flex" }}>
                {
                    props.favoriteList.map(movie => {
                        return (
                            
                            <div className="wrapper" key={movie.id}>
                                <Card key={movie.id}>
                                <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>{movie.comment}</Card.Text>
                                    <Button className="cardButton" onClick={() => (props.movie)}>Remove from favorites</Button>
                                </Card.Body>
                            </Card>
                            </div>
                            
                        )
                    })
                }
                </CardGroup>
        
        </>
    )
}

export default FavoritePage;