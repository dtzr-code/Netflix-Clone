import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from '../axios'
import YouTube from 'react-youtube'; /* npm install --save youtube-api */
import {API_KEY} from '../Requests'

function Row({ title, fetchUrl, isLargeRow = false}) {

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const base_url = 'https://image.tmdb.org/t/p/original';

  //useEffect dependent on the variable fetchUrl
  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])

  /* To show the trailers */
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
        autoplay: 1,
    }
  }

  /* When the user clicked on the picture */
  const handleClick = async (movie) => {
    /* if the video is already open, close it by setting the setTrailerUrl to empty */
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=${API_KEY}`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);  /* To get the value of the id key*/
    }
  };


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
            onClick={()=>handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key = {movie.id}
            src={`${base_url}${
              //if isLargeRow, use poster_path else backdrop_path
              isLargeRow ? movie.poster_path : movie.backdrop_path}`
            } 
            alt={movie.name}
            />
          )
        ))}
      </div>
      
      {/* Only when trailerUrl exists then play youtube video */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row
