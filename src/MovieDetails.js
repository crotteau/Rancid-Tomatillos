import React from 'react'

function MovieDetails({ movie, onBackClick }) {

        return (
            <div className="movie-detail">
                <button onClick={onBackClick}>Back to Movies</button>
                <h2>{movie.title}</h2>
                <p>Average Rating: {movie.average_rating}</p>
                <img src={movie.backdrop_path} alt={`${movie.title} backdrop`}></img>
                <p>Release Date: {movie.release_date}</p>
                <p>Overview: {movie.overview}</p>
                <p>Genres: {movie.genres}</p>
                <p>Budget: {movie.budget.toLocaleString("en-us", {type: "currency", currency: "USD"})}</p>
                <p>Revenue: {movie.revenue.toLocaleString("en-us", {type: "currency", currency: "USD"})}</p>
                <p>Runtime: {movie.runtime}</p>
                <p>Tagline: {movie.tagline}</p>
            </div>
        )

}


export default MovieDetails;


// {
//     "id": 694919,
//     "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
//     "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
//     "title": "Money Plane",
//     "average_rating": 6.666666666666667,
//     "release_date": "2020-09-29"
//   }