import React from "react";

function Card({ movie }) {
  return (
    <div className="movie">
      <h1 className="movie-name">{movie.name}</h1>

      <div className="detail">
        <h2>Size</h2>
        <h2>{movie.size}</h2>
      </div>

      <div className="detail">
        <div>
          <h2>Seeders</h2>
          <h3>{movie.seeders}</h3>
        </div>

        <div>
          <h2>Peers</h2>
          <h3>{movie.peers}</h3>
        </div>
      </div>

      <div className="detail">
        <h2>{movie.category}</h2>
        <a href={movie.link} className="btn">
          Download
        </a>
      </div>
    </div>
  );
}

export default Card;
