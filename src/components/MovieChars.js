import React, { Component } from "react";

class MovieChars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
        {this.props.movie.characters.map(char => {
          return <li>{char}</li>;
        })}
      </div>
    );
  }
}

export default MovieChars;
