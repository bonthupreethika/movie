import React from 'react';
import './Watchlist.css';

function Watchlist({ watchlist, removeFromWatchlist }) {
    return (
        <div className="watchlist-container">
            <h2>My Watchlist</h2>
            {watchlist.length === 0 ? (
                <p>No movies in your watchlist.</p>
            ) : (
                <ul>
                    {watchlist.map((movie, index) => (
                        <li key={index} className="watchlist-item">
                            <img src={movie.img} alt={movie.name} className="watchlist-img" />
                            <h3>{movie.name}</h3>
                            <button onClick={() => removeFromWatchlist(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Watchlist;
