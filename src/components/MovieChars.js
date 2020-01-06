import React from "react";

const MovieChars = props => {
  return (
    <div>
      <h1>{props.movie.title}</h1>
      {props.movie.characters.map(char => {
        return <li>{char}</li>;
      })}
    </div>
  );
};

export default MovieChars;
