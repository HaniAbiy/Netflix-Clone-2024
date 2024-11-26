import React, { useState,useEffect } from 'react'
import "../Banner/banner.css";
import axios from "../axios";
import request from "../request";


function Banner() {
  const[movie, setMovie]=useState({});

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchNetflixOriginals);
      setMovie( requests.data.results[
          Math.floor(Math.random()*requests.data.results.length)
        ]);
      return request;
    } fetchData();
  }, []);

    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (
    <header>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="conetnt">
          <h1 className="title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_button">
            <button>Play</button>
            {/* <br /> */}
            <button>My List</button>
          </div>
          <h3 className="description">{truncate(movie?.overview, 150)}</h3>
        </div>
        {/* <div className="bannerFade" /> */}
      </div>
    </header>
  );
}

export default Banner