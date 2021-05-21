import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from './axios'

function Row({title, fetchUrl, isLargeRow = false}) {

  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  //useEffect dependent on the variable fetchUrl
  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (

          //This conditional statement prevents any deadlinks 
          //Only render image if isLargeRow and there is poster_path or if is not isLargerow and there is backdrop_path
          ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
            <img 
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key = {movie.id}
            src={`${base_url}${
            //if isLargeRow, use poster_path else backdrop_path
            isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}
          />
          )
        ))}
      </div>
    </div>
  )
}

export default Row
