import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function MovieDetails({ movie, onBackClick, loading }) {

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }


    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="movie-detail" >
            <h2 className="movie-title">{movie.title}</h2>
            <h3 className="movie-tagline">{movie.tagline}</h3>
            <div className="movie-detail-main" style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
                <section className="movie-detail-left">
                    <img src={movie.backdrop_path} alt={`${movie.title} backdrop`}></img>
                    <article className="movie-detail-boxes">
                        <p className="movie-genres">{movie.genres.join(' • ')}</p>
                        <p className="movie-rating">Avg Rating: {movie.average_rating < 4 ? '🤮 ' + movie.average_rating : '🔥 ' + movie.average_rating}</p>
                        <p className="movie-runtime">{movie.runtime + ' minutes'}</p>
                    </article>
                </section>
                <section className="movie-detail-right">
                    <p className="movie-overview"> <span>Overview </span>{movie.overview}</p>
                    <p><span>Release Date </span>{formatDate(movie.release_date)}</p>
                    <p><span>Budget </span>{movie.budget === 0 ? 'Unknown Budget' : '$' + movie.budget.toLocaleString("en-us", { type: "currency", currency: "USD" })}</p>
                    <p><span>Revenue </span>{movie.revenue === 0 ? 'Unknown Box Office' : '$' + movie.revenue.toLocaleString("en-us", { type: "currency", currency: "USD" })}</p>
                    <NavLink to="/">
                        <button className="return-home" onClick={onBackClick}>Back to Movies</button>
                    </NavLink>
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
