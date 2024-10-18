import React, { useState } from "react";
import Movie from "./Movie";
import m8 from "./assets/M8.jpeg"; 
import m9 from "./assets/M9.jpeg";  
import m10 from "./assets/M10.jpeg"; 
import m12 from "./assets/M12.jpeg";
import m13 from "./assets/M13.jpeg"; 
import m16 from "./assets/M16.jpeg"; 
import m18 from "./assets/M18.jpeg";
import m19 from "./assets/M19.jpeg"; 
import m20 from "./assets/M20.jpeg"; 
import Watchlist from "./Watchlist"; 

function Drama() {
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
                    img={m8}
                    name="The Shawshank Redemption"
                    rating="4.9/5"
                    genres="Drama"
                    stars="Tim Robbins | Morgan Freeman"
                    discription="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m9}
                    name="The Godfather"
                    rating="4.9/5"
                    genres="Crime, Drama"
                    stars="Marlon Brando | Al Pacino | James Caan"
                    discription="The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m10}
                    name="Pulp Fiction"
                    rating="4.8/5"
                    genres="Crime, Drama"
                    stars="John Travolta | Uma Thurman | Samuel L. Jackson"
                    discription="The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m12}
                    name="Fight Club"
                    rating="4.8/5"
                    genres="Drama"
                    stars="Brad Pitt | Edward Norton | Helena Bonham Carter"
                    discription="An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much more."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m13}
                    name="Forrest Gump"
                    rating="4.8/5"
                    genres="Drama, Romance"
                    stars="Tom Hanks | Robin Wright | Gary Sinise"
                    discription="The presidencies of Kennedy and Johnson, the events of Vietnam, and more unfold through the perspective of a man with low IQ."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m16}
                    name="Se7en"
                    rating="4.7/5"
                    genres="Crime, Drama, Thriller"
                    stars="Brad Pitt | Morgan Freeman | Kevin Spacey"
                    discription="Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m18}
                    name="Saving Private Ryan"
                    rating="4.9/5"
                    genres="Drama, War"
                    stars="Tom Hanks | Matt Damon | Tom Sizemore"
                    discription="Following the Normandy landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m19}
                    name="The Silence of the Lambs"
                    rating="4.8/5"
                    genres="Crime, Drama, Thriller"
                    stars="Jodie Foster | Anthony Hopkins"
                    discription="A young F.B.I. cadet must confide in an incarcerated and manipulative cannibal to catch another serial killer."
                    addToWatchlist={addToWatchlist}
                />

                <Movie
                    img={m20}
                    name="Schindler's List"
                    rating="4.9/5"
                    genres="Biography, Drama"
                    stars="Liam Neeson | Ben Kingsley | Ralph Fiennes"
                    discription="In Nazi-occupied Poland, industrialist Oskar Schindler becomes concerned for his Jewish workforce after witnessing their persecution."
                    addToWatchlist={addToWatchlist}
                />
            </div>

            
        </>
    );
}

export default Drama;
