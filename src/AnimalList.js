import React from 'react';
import Animals from './Animals';

export default function AnimalList({ animals = [] }) {
  return (
    <div className="animal-list">
      {
        animals.map((animal, i) => {
          return <Animals
            {...animal} key={animal.type + i + animal.id} />;
        })
      }
    </div>
  );
}

