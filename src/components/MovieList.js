import React, { Component } from "react";
import { Card } from "semantic-ui-react";
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

  render() {
    return (
      <div className='movie-card'>
        <Card onClick={this.handleClick}>
          <span className='movie-card-detail'>
            <Card.Header className='movie-card-title'>
              {this.props.title}
            </Card.Header>
            <Card.Meta>Release Date: {this.props.release_date}</Card.Meta>
          </span>
        </Card>
        {this.state.showComponent ? <MovieChars movie={this.props} /> : null}
        {this.state.showComponent ? (
          <button onClick={this.closeData}>Close</button>
        ) : null}
      </div>
    );
  }
}

export default MovieList;
