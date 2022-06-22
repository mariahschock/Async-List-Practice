import React from 'react';

export default function Pets({ name, age, likes, color }) {
  return (
    <div className="pets" style={{ background: color }}>
      <p>{name}</p>
      <p>{age}</p>
      <p>{likes}</p>
    </div>
  );
}

