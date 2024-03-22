import React from 'react';

function MovieCard({ poster, title, rating }) {
    return (
        <div className='movie-card'>
            <img src={poster}></img>
            <h3>{title}</h3>
            <h3>{rating.toFixed(2)}</h3>
        </div>
    )
}

export default MovieCard