import React, { useState } from "react";
import Movie from "./Movie";
import m1 from "./assets/R1.jpeg";
import m2 from "./assets/R2.jpeg"; 
import m3 from "./assets/R3.jpeg"; 
import m4 from "./assets/R4.jpeg"; 
import m5 from "./assets/R5.jpeg";
import Watchlist from "./Watchlist";

function Romance() {
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
                    name="The Notebook"
                    rating="4.7/5"
                    genres="Romance, Drama"
                    stars="Ryan Gosling | Rachel McAdams"
                    discription="A poor young man and a wealthy young woman fall in love during the summer of 1940."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m2}
                    name="Pride and Prejudice"
                    rating="4.6/5"
                    genres="Romance, Drama"
                    stars="Keira Knightley | Matthew Macfadyen"
                    discription="Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m3}
                    name="La La Land"
                    rating="4.8/5"
                    genres="Romance, Musical"
                    stars="Ryan Gosling | Emma Stone"
                    discription="A jazz musician and an aspiring actress fall in love but struggle to maintain their relationship as they pursue their dreams."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m4}
                    name="Titanic"
                    rating="4.9/5"
                    genres="Romance, Drama"
                    stars="Leonardo DiCaprio | Kate Winslet"
                    discription="A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m5}
                    name="A Walk to Remember"
                    rating="4.6/5"
                    genres="Romance, Drama"
                    stars="Mandy Moore | Shane West"
                    discription="The story of two North Carolina high school students, their love for each other, and the challenges they face."
                    addToWatchlist={addToWatchlist}
                />
            </div>

           
        </>
    );
}

export default Romance;
