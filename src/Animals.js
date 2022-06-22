import React from 'react';

export default function Animals({ type, says, color }) {
  return (
    <div className="animals" style={{ color: color }}>
      <h3>The {type}</h3>
      <p>says {says}</p>
    </div>
  );
}
