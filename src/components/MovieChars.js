import React, { Component } from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

class MovieChars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      isLoading: true
    };
  }

  componentDidMount() {
    let urls = [];
    this.props.movie.characters.map(char => {
      urls.push(char);
    });
    const allRequests = urls.map(url =>
      fetch(url).then(response => response.json())
    );

    Promise.all(allRequests).then(arrayOfResponses =>
      this.setState({ characters: arrayOfResponses, isLoading: false })
    );
  }

  render() {
    let data;
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
        <div className='movie-chars'>
          {this.state.characters.map((char, index) => (
            <li key={index}>{char.name}</li>
          ))}
        </div>
      );
    }
    return (
      <div className='movie-chars'>
        <h1>{this.props.movie.title}</h1>
        {data}
      </div>
    );
  }
}

export default MovieChars;
