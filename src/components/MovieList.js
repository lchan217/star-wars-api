import React, { Component } from "react";
import MovieChars from "./MovieChars";
import "./css/MovieList.css";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false
    };
  }

  handleClick = () => {
    this.setState({
      showComponent: true
    });
  };

  closeData = () => {
    this.setState({
      showComponent: false
    });
  };

  show = () => {
    if (this.state.showComponent) {
      return (
        <div className='popup'>
          <MovieChars movie={this.props} />
          <button onClick={this.closeData}>Close</button>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div onClick={this.handleClick} className='movie-card'>
          {this.props.title}
          Release Date: {this.props.release_date}
        </div>
        {this.show()}
      </div>
    );
  }
}

export default MovieList;
