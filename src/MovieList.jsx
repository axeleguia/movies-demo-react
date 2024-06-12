import React from "react";
import { MovieItem } from "./MovieItem";
import './MovieList.css';

export const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} poster={movie.poster_path} title={movie.title} />
      ))}
    </div>
  );
};
