import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import MovieChars from "./MovieChars";
import "./MovieList.css";

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
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Meta>{this.props.release_date}</Card.Meta>
        </Card>
        {this.state.showComponent ? <MovieChars movie={this.props} /> : null}
        {this.state.showComponent ? (
          <Button onClick={this.closeData}>Close</Button>
        ) : null}
      </div>
    );
  }
}

export default MovieList;
