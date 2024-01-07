import { React, useEffect, useState } from "react";
import "./App.css";
import { Movie } from "./Movie";
import SearchImage from "./search.svg";

//e1b1429d

const API_URL = "http://www.omdbapi.com/?apikey=e1b1429d";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>Movie Name </h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchImage} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies.length ? (
        <div className="container">
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No Movies Found </h2>
        </div>
      )}
    </div>
  );
};

export default App;
