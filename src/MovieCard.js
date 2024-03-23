import React from 'react';

function MovieCard({ poster, title, rating, onSelect }) {
    return (
        <div className='movie-card' onClick={onSelect}>
            <img src={poster} alt={`${title} poster`}></img>
            <h3>{title}</h3>
            <h3>{rating.toFixed(2)}</h3>
        </div>
    )
}

export default MovieCard