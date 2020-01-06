import React, { Component } from "react";
import { Dimmer, Loader, Image, Segment, Card } from "semantic-ui-react";
import MovieList from "../components/MovieList";

class MovieContainer extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/films")
      .then(response => response.json())
      .then(response => {
        this.setState({
          movies: response.results,
          isLoading: false
        });
      });
  }

  render() {
    let data;
    const Moment = require("moment");
    let sorted = this.state.movies.sort(
      (a, b) =>
        new Moment(a.release_date).format("YYYYMMDD") -
        new Moment(b.release_date).format("YYYYMMDD")
    );

    debugger;

    if (this.state.isLoading) {
      data = (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>

          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
      );
    } else {
      data = (
        <Card.Group itemsPerRow={4}>
          {sorted.map((movie, index) => (
            <MovieList key={index} {...movie} />
          ))}
        </Card.Group>
      );
    }
    return (
      <div className='star-wars-movies'>
        <h1>Star Wars Movies</h1>
        {data}
      </div>
    );
  }
}

export default MovieContainer;
