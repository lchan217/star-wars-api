import React, { Component } from "react";

class MovieContainer extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/films")
      .then(response => response.json())
      .then(response => {
        this.setState({
          movies: response.results,
          isLoading: false
        });
      });
  }

  render() {
    return <div>Movie Container</div>;
  }
}

export default MovieContainer;
