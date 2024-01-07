import React from 'react'


export const Movie = ({movie}) => {
  return (
    <div>
    
      <div className="container">
        <div className="movie">
          <div>
            <p> {movie.Year}</p>
          </div>
          <div>
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : (movie.Poster = "https://via.placeholder.com/400")
              }
              alt="movie 1 "
            />
          </div>
          <div> 
          <span> 
            {movie.Type}

          </span>
          <h1> {movie.Title}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
