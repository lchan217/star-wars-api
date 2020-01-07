import React, { Component } from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import "./css/MovieChars.css";

class MovieChars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      isLoading: true
    };
  }

  componentDidMount() {
    //push all character urls into an array
    let urls = [];
    this.props.movie.characters.map(char => {
      urls.push(char);
    });

    //fetch list of characters for specific movie
    const allRequests = urls.map(url =>
      fetch(url).then(response => response.json())
    );

    //add all characters into state at one time
    Promise.all(allRequests).then(arrayOfResponses =>
      this.setState({ characters: arrayOfResponses, isLoading: false })
    );
  }

  render() {
    let data;
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
      // show list of characters
      data = (
        <div className='movie-char-grid'>
          {this.state.characters.map((char, index) => (
            <div key={index}>{char.name}</div>
          ))}
        </div>
      );
    }
    return (
      <div>
        <div className='character-list'>
          <h1>{this.props.movie.title}</h1>
          <h3>Characters</h3>
          {data}
        </div>
      </div>
    );
  }
}

export default MovieChars;
