import React, { useState } from "react";
import Movie from "./Movie";
import m1 from "./assets/C1.jpeg";
import m3 from "./assets/C3.jpeg"; 
import m4 from "./assets/C4.jpeg"; 
import m12 from "./assets/C12.jpeg"; 
import m13 from "./assets/C13.jpeg";
import m18 from "./assets/C18.jpeg";
import Watchlist from "./Watchlist"; 

function Comedy() {
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
                    img={m1}
                    name="The Hangover"
                    rating="4.6/5"
                    genres="Comedy"
                    stars="Bradley Cooper | Ed Helms | Zach Galifianakis"
                    discription="Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m3}
                    name="Superbad"
                    rating="4.5/5"
                    genres="Comedy"
                    stars="Jonah Hill | Michael Cera | Christopher Mintz-Plasse"
                    discription="Two high school friends plan to make the best of their final weeks before graduation, leading to a series of misadventures."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m4}
                    name="Mean Girls"
                    rating="4.5/5"
                    genres="Comedy, Teen"
                    stars="Lindsay Lohan | Rachel McAdams | Tina Fey"
                    discription="A teenage girl navigates the social cliques of high school after moving to a new town."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m12}
                    name="Step Brothers"
                    rating="4.2/5"
                    genres="Comedy"
                    stars="Will Ferrell | John C. Reilly | Mary Steenburgen"
                    discription="Two middle-aged slackers become stepbrothers when their single parents marry, leading to hilarious antics."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m13}
                    name="Forgetting Sarah Marshall"
                    rating="4.4/5"
                    genres="Comedy, Romance"
                    stars="Jason Segel | Kristen Bell | Mila Kunis"
                    discription="A heartbroken man travels to Hawaii to escape his ex-girlfriend, only to run into her and her new boyfriend."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m18}
                    name="The 40-Year-Old Virgin"
                    rating="4.5/5"
                    genres="Comedy, Romance"
                    stars="Steve Carell | Catherine Keener | Paul Rudd"
                    discription="A middle-aged man's friends try to help him lose his virginity, leading to awkward and humorous situations."
                    addToWatchlist={addToWatchlist}
                />
            </div>

           
        </>
    );
}

export default Comedy;
