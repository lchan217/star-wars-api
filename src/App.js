import React from "react";
import "./index.css";
import MovieContainer from "./components/MovieContainer";

function App() {
  return (
    <div className='App'>
      <h1 className='center-title'>Star Wars Movies</h1>
      <MovieContainer />
    </div>
  );
}

export default App;
