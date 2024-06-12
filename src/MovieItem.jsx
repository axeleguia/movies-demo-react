import React from "react";

export const MovieItem = ({ poster, title }) => {
  return (
    <div className="card" style={{ marginBottom: 0 }}>
      <div className="card-image">
        <figure className="image is-3by5">
          <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} onError={({ target }) => {
            target.src = 'https://fakeimg.pl/500x750?text=NoImage';
            target.error = null;
          }} />
        </figure>
      </div>
    </div>
  );
};
