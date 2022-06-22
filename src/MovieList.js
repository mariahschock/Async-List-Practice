import React from 'react';
import Movies from './Movies';

export default function MovieList({ movies = [] }) {
  return (
    <div className="movie-list">
      {
        movies.map((movie, i) => {
          return <Movies
            {...movie} key={movie.title + i + movie.id} />;
        })
      }
    </div>
  );
}

