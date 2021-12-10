import React from "react";
import Card from "./Card";

function Movies({ movies }) {
  if (movies) {
    console.log(movies);
    return (
      <>
        <h1 className="movieSectionHeader">
          Total {movies.length} results found
        </h1>
        <div className="movies">
          {movies.map((movie) => (
            <Card movie={movie} key={Math.random()} />
          ))}
        </div>
      </>
    );
  } else if (movies && movies.length === 0) {
    return (
      <div className="initial-result">
        <h1>No results found</h1>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Movies;
