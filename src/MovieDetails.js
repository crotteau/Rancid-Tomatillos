import React from 'react'
import PropTypes from 'prop-types'

function MovieDetails({ movie, onBackClick }) {

    return (
        <div className="movie-detail">
            <h2>{movie.title}</h2>
            <p>{movie.tagline}</p>
            <div class="movie-detail-main">
                <section class="movie-detail-left">
                    <img src={movie.backdrop_path} alt={`${movie.title} backdrop`}></img>
                    <article class="movie-detail-boxes">
                        <p class="movie-genres">{movie.genres.join(' • ')}</p>
                        <p class="movie-rating">Avg Rating: {movie.average_rating < 4 ? '🤮 ' + movie.average_rating : '🔥 ' + movie.average_rating}</p>
                        <p class="movie-runtime">{movie.runtime + ' minutes'}</p>
                    </article>
                </section>
                <section class="movie-detail-right">
                    <p class="movie-overview">Overview: {movie.overview}</p>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Budget: {movie.budget === 0 ? 'Unknown Budget' : '$' + movie.budget.toLocaleString("en-us", { type: "currency", currency: "USD" })}</p>
                    <p>Revenue: {movie.revenue === 0 ? 'Unknown Box Office' : '$' + movie.revenue.toLocaleString("en-us", { type: "currency", currency: "USD" })}</p>
                    <button class="return-home" onClick={onBackClick}>Back to Movies</button>
                </section>
            </div>
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