import './App.css';
import movieData from './Data/movieData.js'
import MovieList from './MovieList.js';
import MovieDetails from './MovieDetails.js'
import React, { useEffect, useState } from 'react'

function App() {
  const [movies, setMovies] = useState(movieData);
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [error, setError] = useState('')
  const backButton = () => setSelectedMovie(null)

  const fetchData = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch all movies');
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
          throw new Error(`Failed to fetch individual movie info for movie ID:${movieId}`);
        }
        return response.json();
      })

    Promise.all([movieDetails])
      .then(data => {
        setSelectedMovie(data[0].movie)
      })
      .catch(error => setError(error.message))
  }

  const selectMovie = (movieId) => {
    const movie = movies.movies.find((movie) => movie.id === movieId);
    fetchMovieDetails(movie.id)
  }


  return (
    <main className="App">
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <section>
        <div>Headliner</div>
      </section>
      <section>
        <div>Organized Movies Carousel</div>
      </section>
      {error && <h2>{error}</h2>}
      <section>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBackClick={backButton} />
      ) : (<MovieList movies={movies} selectMovie={selectMovie} />
      )}
      </section>
    </main>
  )
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
