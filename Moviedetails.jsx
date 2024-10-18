import React, { useState } from "react";
import Movie from "./Movie";
import Watchlist from "./Watchlist";
import m1 from "./assets/M1.jpeg"; 
import m2 from "./assets/M2.jpeg";
import m3 from "./assets/M3.jpeg";
import m4 from "./assets/M4.jpeg";
import m5 from "./assets/M5.jpeg";
import m6 from "./assets/M6.jpeg";
import m7 from "./assets/M7.jpeg";
import m8 from "./assets/M8.jpeg";
import m9 from "./assets/M9.jpeg";
import m10 from "./assets/M10.jpeg";
import m11 from "./assets/M11.jpeg";
import m12 from "./assets/M12.jpeg";
import m13 from "./assets/M13.jpeg";
import m14 from "./assets/M14.jpeg";
import m15 from "./assets/M15.jpeg";
import m16 from "./assets/M16.jpeg";
import m17 from "./assets/M17.jpeg";
import m18 from "./assets/M8.jpeg";
import m19 from "./assets/M9.jpeg";
import m20 from "./assets/M10.jpeg";


function MovieDetails() {
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
                    name="HanuMan"
                    rating="4.5/5"
                    genres="Action"
                    stars="Teja Sajja | Amritha Aiyer | Varalaxmi Sarathkumar"
                    discription="An imaginary place called Anjanadri where the protagonist gets the powers of Hanuman and fights for Anjanadri."
                    addToWatchlist={addToWatchlist}
                />
                {/* Add other Movie components similarly */}
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
                img={m3}
                name="Spider-Man: No Way Home"
                rating="4.7/5"
                genres="Action, Adventure"
                stars="Tom Holland | Zendaya | Benedict Cumberbatch"
                discription="Spider-Man's identity is revealed, and he teams up with other Spider-Men from across the multiverse."
                addToWatchlist={addToWatchlist}
            />
              <Movie
                img={m4}
                name="Inception"
                rating="4.9/5"
                genres="Sci-Fi, Thriller"
                stars="Leonardo DiCaprio | Joseph Gordon-Levitt | Ellen Page"
                discription="A skilled thief is given a chance at redemption if he can successfully plant an idea into a target's subconscious."
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
                img={m6}
                name="Interstellar"
                rating="4.8/5"
                genres="Sci-Fi, Drama"
                stars="Matthew McConaughey | Anne Hathaway | Jessica Chastain"
                discription="A group of explorers travel through a wormhole in space to ensure humanity's survival."
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
                img={m11}
                name="The Lord of the Rings: The Return of the King"
                rating="4.9/5"
                genres="Adventure, Drama"
                stars="Elijah Wood | Viggo Mortensen | Ian McKellen"
                discription="Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom."
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
                img={m14}
                name="The Matrix"
                rating="4.7/5"
                genres="Sci-Fi, Action"
                stars="Keanu Reeves | Laurence Fishburne | Carrie-Anne Moss"
                discription="A computer hacker learns about the true nature of his reality and his role in the war against its controllers."
                addToWatchlist={addToWatchlist}
            />

            <Movie
                img={m15}
                name="Goodfellas"
                rating="4.8/5"
                genres="Crime, Drama"
                stars="Robert De Niro | Ray Liotta | Joe Pesci"
                discription="The story of Henry Hill and his life in the mob, covering his relationship with his wife and his mob partners."
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
                img={m17}
                name="Gladiator"
                rating="4.8/5"
                genres="Action, Drama"
                stars="Russell Crowe | Joaquin Phoenix"
                discription="A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
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

export default MovieDetails;
