import React from 'react'
import PropTypes from 'prop-types'

function MovieDetails({ movie, onBackClick }) {

    return (
        <div className="movie-detail">
            <button onClick={onBackClick}>Back to Movies</button>
            <h2>{movie.title}</h2>
            <p>Average Rating: {movie.average_rating}</p>
            <img src={movie.backdrop_path} alt={`${movie.title} backdrop`}></img>
            <p>Release Date: {movie.release_date}</p>
            <p>Overview: {movie.overview}</p>
            <p>Genres: {movie.genres.join(', ')}</p>
            <p>Budget: {movie.budget === 0 ? 'Unknown Budget' : '$' + movie.budget.toLocaleString("en-us", { type: "currency", currency: "USD" })}</p>
            <p>Revenue: {movie.revenue === 0 ? 'Unknown Box Office' : '$' + movie.revenue.toLocaleString("en-us", { type: "currency", currency: "USD" })}</p>
            <p>Runtime: {movie.runtime + ` minutes`}</p>
            <p>Tagline: {movie.tagline}</p>
        </div>
    )

}

MovieDetails.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        average_rating: PropTypes.number,
        backdrop_path: PropTypes.string,
        release_date: PropTypes.string,
        overview: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string),
        budget: PropTypes.number,
        revenue: PropTypes.number,
        runtime: PropTypes.number,
        tagline: PropTypes.string,
    }).isRequired,
    onBackClick: PropTypes.func.isRequired,
};

export default MovieDetails;


// {
//     "id": 694919,
//     "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
//     "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
//     "title": "Money Plane",
//     "average_rating": 6.666666666666667,
//     "release_date": "2020-09-29"
//   }