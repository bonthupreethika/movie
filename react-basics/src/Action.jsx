import React, { useState } from "react"; // Import useState
import Movie from "./Movie";
import m2 from "./assets/M2.jpeg";
import m5 from "./assets/M5.jpeg";
import m7 from "./assets/M7.jpeg";
import m14 from "./assets/M14.jpeg";
import m17 from "./assets/M17.jpeg";
import Watchlist from "./Watchlist";

function Action() {
    const [watchlist, setWatchlist] = useState([]);

    const addToWatchlist = (movie) => {
        setWatchlist((prevList) => [...prevList, movie]);
    };

    const removeFromWatchlist = (index) => {
        setWatchlist((prevList) => prevList.filter((_, i) => i !== index));
    };

    return (
        <>
             <Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />
            <div className="movie-container">
                <Movie
                    img={m2}
                    name="Avatar: The Way of Water"
                    rating="4.8/5"
                    genres="Sci-Fi, Action"
                    stars="Sam Worthington | Zoe Saldana | Sigourney Weaver"
                    discription="Jake Sully and Neytiri must protect their family and race as they fight new enemies in a spectacular new world."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m5}
                    name="The Dark Knight"
                    rating="4.9/5"
                    genres="Action, Crime"
                    stars="Christian Bale | Heath Ledger | Michael Caine"
                    discription="Batman faces off against the Joker, who seeks to create chaos and undermine Gotham's hero."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m7}
                    name="Avengers: Endgame"
                    rating="4.7/5"
                    genres="Action, Adventure"
                    stars="Robert Downey Jr. | Chris Evans | Mark Ruffalo"
                    discription="The Avengers assemble once more to reverse Thanos' actions and restore balance to the universe."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m14}
                    name="The Matrix"
                    rating="4.7/5"
                    genres="Sci-Fi, Action"
                    stars="Keanu Reeves | Laurence Fishburne | Carrie-Anne Moss"
                    discription="A computer hacker learns about the true nature of his reality and his role in the war against its controllers."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m17}
                    name="Gladiator"
                    rating="4.8/5"
                    genres="Action, Drama"
                    stars="Russell Crowe | Joaquin Phoenix"
                    discription="A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
                    addToWatchlist={addToWatchlist}
                />
            </div>

           
       
        </>
    );
}

export default Action;
