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
      <div className='movie-card'>
        {/* <Card onClick={this.handleClick}> */}
        <span className='movie-card-detail'>
          <div className='header-movie-card-title'>{this.props.title}</div>
          <div className='move-card-meta'>
            Release Date: {this.props.release_date}
          </div>
        </span>
        {this.show()}
      </div>
    );
  }
}

export default MovieList;
