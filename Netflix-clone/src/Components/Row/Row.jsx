import React, { useEffect, useState } from 'react';
import axios from "../axios";
import "../Row/row.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"



const base_url = "https://image.tmdb.org/t/p/original/";



function Row ({title, fetchUrl, isLargeRow}) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl]= useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      // console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //[] dependncie only run once when the page loads//

  //  console.table(movies);
    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };
  
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.orginal_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="row_Container">
      <h2>{title}</h2>
      {/* <div className="row_Posters">
        {movies?.map((movie, id) => (
          <img
            key={movie.id}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div> */}
   <div className="row__Posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} 
    </div>
  );
}

export default Row;




