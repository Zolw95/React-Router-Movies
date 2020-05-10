import React from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';


const SavedList = props => (

  <div className="saved-list">

    <h3>Saved Movies:</h3>
    {props.savedList.map(movie => (
      <Link to={`/movies/${movie.id}`}><span className="saved-movie">{movie.title}</span></Link>
    ))}
    <Link to="/">
    <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
