import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class MovieChars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  fetchChars = () => {
    let urls = [];
    this.props.movie.characters.map(char => {
      urls.push(char);
    });
    const allRequests = urls.map(url =>
      fetch(url).then(response => response.json())
    );

    Promise.all(allRequests).then(arrayOfResponses =>
      this.setState({ characters: arrayOfResponses })
    );

    return this.state.characters.map((char, index) => (
      <li key={index}>{char.name}</li>
    ));
  };

  render() {
    return (
      <div className='movie-chars'>
        <h1>{this.props.movie.title}</h1>
        <ul>{this.fetchChars()}</ul>
      </div>
    );
  }
}

export default MovieChars;
