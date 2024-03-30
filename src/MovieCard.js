import React from 'react';
import PropTypes from 'prop-types'

function MovieCard({ poster, title, rating, onSelect }) {
    return (
        <div className='movie-card' onClick={onSelect}>
            <img src={poster} alt={`${title} poster`}></img>
            <h3>{title}</h3>
            <h3>Rating: {rating ? rating.toFixed(2): ''}</h3>
        </div>
    )
}

MovieCard.propTypes = {
    poster: PropTypes.string ,
    title: PropTypes.string,
    rating: PropTypes.number,
    onSelect: PropTypes.func,
}

export default MovieCard