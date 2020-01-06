import React, { Component } from "react";

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
  };

  // this.state.characters.name

  render() {
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
        {this.fetchChars()}
      </div>
    );
  }
}

export default MovieChars;
