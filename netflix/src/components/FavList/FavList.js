import FavoritePage from "../FavoritePage"

function FavList(props){
    console.log(props)
return(

    <>
    <h1> Favorites </h1>
    <main>
        <FavoritePage favoriteList={props.favoriteList}/>
    </main>
    </>
)

}

export default FavList