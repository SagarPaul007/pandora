import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import "./app.scss";

// pages
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
