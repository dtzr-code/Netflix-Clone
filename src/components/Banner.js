import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from "../axios"
import requests from "../Requests"


function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect(()=> {
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, [])

  function truncate(string, n){
    //for cutting off the movie description and ends it with a ...
    //we need to use string with a ? as there may not always be a string being passed, some may be undefined
    return string?.length > n ? string.substr(0, n-1) + '...' : string;
  }

  return (
    <header 
      className="banner" 
      //doing an inline styling
      style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center"}}
      >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.orginal_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
      
    </header>
  )
}

export default Banner
