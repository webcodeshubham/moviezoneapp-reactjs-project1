import React, { useState, useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=ab06f71e";

// const movie1 = {
//     "Title": "Peaky Blinders",
//     "Year": "2022",
//     "imdbID": "tt2442560",
//     "Type": "series",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_SX300.jpg"
// }

const App = () => {
  // store the current state of the application and perform any necessary operations.
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Asynchronous Function to retrieve the list of movies from the database
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    // console.log(data.Search)
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <>
      <div className="app">
        <h1>MovieZone</h1>

        <div className="search">
          <input
            type="text"
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={searchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {/* // Optional Chaining Mechanism */}
        {movies?.length > 0 ? (
          <>
            <div className="container">
              {movies.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
          </>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;

// import { Component } from 'react';

// class App extends Component {
//     render() {
//         return(
//             <h1>Hello, React!</h1>
//         )
//     }
// }
