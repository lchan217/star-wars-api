import React from "react";
import { Card } from "semantic-ui-react";

const MovieList = ({ title, release_date }) => {
  return (
    <div className='movie-card'>
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{release_date}</Card.Meta>
      </Card>
    </div>
  );
};

export default MovieList;
