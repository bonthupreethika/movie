import React, { useState } from "react";
import Movie from "./Movie";
import m1 from "./assets/H1.jpeg";
import m2 from "./assets/H2.jpeg";
import m3 from "./assets/H3.jpeg";
import m4 from "./assets/H4.jpeg";
import Watchlist from "./Watchlist";

function Horror() {
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
                    name="The Conjuring"
                    rating="4.5/5"
                    genres="Horror, Mystery"
                    stars="Vera Farmiga | Patrick Wilson"
                    discription="Paranormal investigators help a family terrorized by a dark presence in their farmhouse."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m2}
                    name="Get Out"
                    rating="4.7/5"
                    genres="Horror, Thriller"
                    stars="Daniel Kaluuya | Allison Williams"
                    discription="A young African American man visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m3}
                    name="A Nightmare on Elm Street"
                    rating="4.6/5"
                    genres="Horror, Thriller"
                    stars="Heather Langenkamp | Johnny Depp"
                    discription="Teenagers in a small town are haunted by Freddy Krueger, a serial killer who attacks them in their dreams."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m4}
                    name="The Shining"
                    rating="4.8/5"
                    genres="Horror, Drama"
                    stars="Jack Nicholson | Shelley Duvall"
                    discription="A family heads to an isolated hotel for the winter where an evil presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future."
                    addToWatchlist={addToWatchlist}
                />
            </div>

          
        </>
    );
}

export default Horror;
