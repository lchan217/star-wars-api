import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import MovieChars from "./MovieChars";

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

  render() {
    return (
      <div className='movie-card'>
        <Card onClick={this.handleClick}>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Meta>{this.props.release_date}</Card.Meta>
        </Card>
        {this.state.showComponent ? <MovieChars movie={this.props} /> : null}
      </div>
    );
  }
}

export default MovieList;
