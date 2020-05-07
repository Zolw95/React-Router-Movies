import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import MovieCard from './MovieCard';
import SavedList from './SavedList';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const params = useParams();
  //console.log(params);

  useEffect(() => {
    const id = params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[params.id]);

  //Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  };


  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard key={movie.id} movie={movie} />
      <div onClick={saveMovie} className="save-button">Save</div>
    </div>
  );
}

export default Movie;
