import React from 'react';

export default function Songs({ title, artist, color }) {
  return (
    <div className="songs" style={{ color: color }}>
      <p>{title}</p>
      <p>{artist}</p>
    </div>
  );
}

