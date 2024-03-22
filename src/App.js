import logo from './logo.svg';
import './App.css';
import movieData from './Data/movieData.js' 
import MovieList from './MovieList.js';
import React, { useState } from 'react'

function App() {
  const [movies, setMovies] = useState(movieData);

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
        <MovieList movies={movies}/>
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
console.log(movieData)

export default App;
