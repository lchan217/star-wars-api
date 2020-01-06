import React, { Component } from "react";

class MovieChars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      isLoading: true
    };
  }

  componentDidMount() {
    {
      this.props.movie.characters.map(char => {
        fetch(char)
          .then(response => response.json())
          .then(response => console.log(response));
      });
    }
    // fetch("https://swapi.co/api/films")
    //   .then(response => response.json())
    //   .then(response => console.log(response));
    // .then(response => {
    //   this.setState({
    //     movies: response.results,
    //     isLoading: false
    //   });
    // });
  }

  render() {
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
        {/* {this.props.movie.characters.map(char => {
          return <li>{char}</li>;
        })} */}
      </div>
    );
  }
}

export default MovieChars;
