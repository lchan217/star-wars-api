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
          <br />
          <button onClick={this.closeData}>Close</button>
        </div>
      );
    }
  };

  render() {
    return (
      <div className='movie-card'>
        <div onClick={this.handleClick} className='movie-title'>
          {this.props.title}{" "}
        </div>
        <br />
        <div className='movie-date'>{this.props.release_date}</div>
        {this.show()}
      </div>
    );
  }
}

export default MovieList;
