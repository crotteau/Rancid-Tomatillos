import './App.scss';
import tomatillo from './assets/tomatillo.png'
import movieData from './Data/movieData.js'
import MovieList from './MovieList.js'
import MovieDetails from './MovieDetails.js'
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState(movieData);
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const backButton = () => {
    setSelectedMovie(null)
    setLoading(true)
  }


  const fetchData = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch all movies. Please refresh and try again.');
        }
        return response.json();
      })
      .then(data => setMovies(data))
      .catch(error => setError(error.message))
  }

  useEffect(() => {
    fetchData()
  }, [])


  const fetchMovieDetails = (movieId) => {
    const movieDetails = fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
      .then(response => {
        if (!response.ok) {
          setLoading(false)
          throw new Error(`Failed to fetch individual movie info for movie ID:${movieId}. Please refresh and try again.`);
        }
        return response.json();
      })

    Promise.all([movieDetails])
      .then(data => {
        setLoading(false)
        setSelectedMovie(data[0].movie)
      })
      .catch(error => setError(error.message))
  }


  const selectMovie = (movieId) => {
    const movie = movies.movies.find((movie) => movie.id === movieId);
    fetchMovieDetails(movie.id)
  }

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }
  const randomMovie = movies.movies[Math.floor(Math.random() * movies.movies.length)]


  return (

    <main className="App">
      <header>
        <h1>Rancid Tomatillos</h1>
        <img className="tomatillo" src={tomatillo} alt='tomatillo' />
      </header>
      {error && <h2 className='error'>{error}</h2>}
      <section>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} selectMovie={selectMovie} randomMovie={randomMovie} formatDate={formatDate} />} />
          <Route path="/movie/:movieId" element={<MovieDetails movie={selectedMovie} onBackClick={backButton} loading={loading} formatDate={formatDate} />} />
        </Routes>
      </section>
    </main>

  );
};

export default App;