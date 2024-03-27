import React from 'react'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types'
import './App.css'

function MovieList({ movies, selectMovie, trackRef }) {
    console.log(movies)

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
                onSelect={() => selectMovie(movie.id)}
            />
        )
    })

    return (
        <div className='movies-container' ref={trackRef}>
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