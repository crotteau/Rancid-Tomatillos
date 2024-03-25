import React from 'react'
import PropTypes from 'prop-types'

function MovieDetails({ movie, onBackClick }) {
    // style={{backgroundImage: `url(${movie.backdrop_path})`}}
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div className="movie-detail" >
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-tagline">{movie.tagline}</p>
            <div className="movie-detail-main" style={{backgroundImage: `url(${movie.backdrop_path})`}}>
                <section className="movie-detail-left">
                    <img src={movie.backdrop_path} alt={`${movie.title} backdrop`}></img>
                    <article className="movie-detail-boxes">
                        <p className="movie-genres">{movie.genres.join(' • ')}</p>
                        <p className="movie-rating">Avg Rating: {movie.average_rating < 4 ? '🤮 ' + movie.average_rating : '🔥 ' + movie.average_rating}</p>
                        <p className="movie-runtime">{movie.runtime + ' minutes'}</p>
                    </article>
                </section>
                <section className="movie-detail-right">
                    <p className="movie-overview">Overview: {movie.overview}</p>
                    <p>Release Date: {formatDate(movie.release_date)}</p>
                    <p>Budget: {movie.budget === 0 ? 'Unknown Budget' : '$' + movie.budget.toLocaleString("en-us", { type: "currency", currency: "USD" })}</p>
                    <p>Revenue: {movie.revenue === 0 ? 'Unknown Box Office' : '$' + movie.revenue.toLocaleString("en-us", { type: "currency", currency: "USD" })}</p>
                    <button className="return-home" onClick={onBackClick}>Back to Movies</button>
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