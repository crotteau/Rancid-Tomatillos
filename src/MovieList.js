import React from 'react'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types'
import Headliner from './Headliner'
import './App.css'
import { useNavigate } from 'react-router-dom'


function MovieList({ movies, selectMovie, randomMovie, formatDate }) {
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

    const topRatedMovies = movies.movies.filter(movie => {
        return movie.average_rating > 7
    }).map((movie) => {
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

    const headlinerMovie =
        <Headliner
            id={randomMovie.id}
            key={randomMovie.id}
            poster={randomMovie.poster_path}
            backdrop={randomMovie.backdrop_path}
            title={randomMovie.title}
            rating={randomMovie.average_rating}
            release={randomMovie.release_date}
            onSelect={() => selectedMovie(randomMovie.id)}
            formatDate={formatDate}
        />

    return (
        <div className='movies-container' /*ref={trackRef}*/>
            <section className="headliner" style={{ backgroundImage: `url(${randomMovie.backdrop_path})` }}>
            {headlinerMovie}
            </section>
            <h3 className='container-header'>All Movies</h3>
            <section className='all-movies'>
                {listOfMovies}
            </section>
            <h3 className='container-header'>Top Rated</h3>
            <section className='top-rated'>
                {topRatedMovies}
            </section>
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