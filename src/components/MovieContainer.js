import React, { Component } from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import MovieList from "./MovieList";
import "./css/MovieContainer.css";

class MovieContainer extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isLoading: true
    };
  }

  componentDidMount() {
    // fetch list of movies and add to state
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

    //sort movies by release date
    const Moment = require("moment");
    let sorted = this.state.movies.sort(
      (a, b) =>
        new Moment(a.release_date).format("YYYYMMDD") -
        new Moment(b.release_date).format("YYYYMMDD")
    );

    if (this.state.isLoading) {
      // show loading status while app is fetching data
      data = (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>

          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
      );
    } else {
      // sorted data passed as props to MovieList
      data = sorted.map((movie, index) => <MovieList key={index} {...movie} />);

      return <div className='movie-card-grid'> {data} </div>;
    }
    return (
      <div className='star-wars-movies'>
        <br />
        <div>{data}</div>
      </div>
    );
  }
}

export default MovieContainer;
