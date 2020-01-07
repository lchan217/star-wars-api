import React from "react";
import "./App.css";
import MovieContainer from "./containers/MovieContainer";

function App() {
  return (
    <div className='App'>
      <div className='background'>
        <MovieContainer />
      </div>
    </div>
  );
}

export default App;
