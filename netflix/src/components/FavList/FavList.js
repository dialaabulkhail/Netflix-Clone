import {Card, CardGroup} from "react-bootstrap"

function FavList(props){
    return(

        <>
        <h1>Favorites</h1>
        
        <CardGroup styly={{ display: "flex" }}>
                {
                    (props.favoriteList ?? []).map(movie => {
                        return (
                            <Card key={movie.id}>
                                <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>{movie.caption}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
                </CardGroup>
        
        </>
    )
}

export default FavList;