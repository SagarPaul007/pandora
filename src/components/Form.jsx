import React, { useState } from "react";
import axios from "axios";

import hero from "../images/hero.svg";

function Form({ setMovies, setOverlay }) {
  const [search, setSearch] = useState("");

  const searchMovies = async (e) => {
    e.preventDefault();
    setOverlay(true);

    await axios
      .get(
        `https://movie-downloader-api.herokuapp.com/search?name=${search.trim()}`
      )
      .then((res) => res.data)
      .then((data) => {
        setMovies(data);
        setOverlay(false);
      });
  };

  return (
    <div className="form-section">
      <form>
        <h1 className="heading">
          Download your
          <br />
          favourite Movies
        </h1>
        <h2 className="sub-heading">
          Movies, Tv Shows, Web Series, Songs, Books, Software etc available.
        </h2>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="e.g. Game Of Thrones"
        />
        <button onClick={searchMovies} className="btn">
          Search
        </button>
      </form>

      <div className="image">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default Form;
