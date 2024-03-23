import React from 'react'
import MovieCard from './MovieCard'
import './App.css'

function MovieList({ movies, selectMovie }) {

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
        <div className='movies-container'>
            { listOfMovies }
        </div>
    )
}

// {
//     "id": 694919,
//     "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
//     "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
//     "title": "Money Plane",
//     "average_rating": 6.666666666666667,
//     "release_date": "2020-09-29"
//   }

export default MovieList;