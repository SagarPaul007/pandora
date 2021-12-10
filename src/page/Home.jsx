import React, { useState } from "react";

// components
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Movies from "../components/Movies";
import Overlay from "../components/Overlay";

function Home() {
  const [movies, setMovies] = useState(null);
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="home">
      {overlay && <Overlay />}
      <div className="container">
        <Navbar />
        <Form setMovies={setMovies} setOverlay={setOverlay} />
      </div>
      <Movies movies={movies} />
    </div>
  );
}

export default Home;
