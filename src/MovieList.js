import React from 'react'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types'
import './App.css'
import { useNavigate } from 'react-router-dom'


function MovieList({ movies, selectMovie}) {
    console.log(movies)

    const navigate = useNavigate();

    const selectedMovie = (movieId) => {
        selectMovie(movieId)
        navigate(`/movie/${movieId}`);
    }

    const listOfMovies = movies.movies.map(movie => {
        return (
            <MovieCard
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
                backdrop={movie.backdrop_path}
                title={movie.title}
                rating={movie.average_rating}
                release={movie.release_date}
                onSelect={() => selectedMovie(movie.id)}
            />
        )
    })

    return (
        <div className='movies-container' /*ref={trackRef}*/>
            {listOfMovies}
        </div>
    )
}

MovieList.propTypes = {
    movies: PropTypes.shape({
        id: PropTypes.number,
        poster_path: PropTypes.string,
        backdrop_path: PropTypes.string,
        title: PropTypes.string,
        average_rating: PropTypes.number,
        release_date: PropTypes.string
    }).isRequired,
    selectMovie: PropTypes.func.isRequired,
    trackRef: PropTypes.object,

}

export default MovieList;