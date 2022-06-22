import React from 'react';
import Pets from './Pets';

export default function PetList({ pets = [] }) {
  return (
    <div className="pet-list">
      {
        pets.map((pet, i) => {
          return <Pets
            {...pet} key={pet.name + i + pet.id} />;
        })
      }
    </div>
  );
}

