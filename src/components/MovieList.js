import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class MovieList extends Component {
  render() {
    return (
      <div className='movie-card'>
        <Card>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Meta>{this.props.release_date}</Card.Meta>
        </Card>
      </div>
    );
  }
}

export default MovieList;
