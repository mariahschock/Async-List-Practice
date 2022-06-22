import React from 'react';

export default function Movies({ title, director, actors, year, color }) {
  return (
    <div className="movies" style ={{ background: color }}>
      <h3>{title}</h3>
      <p>Directed by {director} in {year}, starring {actors}.</p>
    </div>
  );
}

