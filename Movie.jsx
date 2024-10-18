import './Movie.css';

function Movie(props) {
    const handleAddToWatchlist = () => {
        props.addToWatchlist({
            img: props.img,
            name: props.name,
        });
    };

    return (
        <div className="movie-card">
            <img className="movie-img" src={props.img} alt='Movie Poster'/>
            <h2><b>Movie Name: </b>{props.name}</h2>
            <h3><b>Rating: </b>{props.rating}</h3>
            <p><b>Genres: </b>{props.genres}</p>
            <p><b>Stars: </b>{props.stars}</p>
            <p><b>Description: </b>{props.discription}</p>
            <button className="add-to-watchlist" onClick={handleAddToWatchlist}>Add to Watchlist</button>
        </div>
    );
}

export default Movie;
