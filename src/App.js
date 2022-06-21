import { useState, useEffect } from 'react';
import PetList from './PetList';
import { getPets } from './services/fetch-utils';

import './App.css';
// import your arrays here

function App() {
  const [pets, setPets] = useState([]);

  async function fetchPetsData() {
    const data = await getPets();
    setPets(data);
  }

  useEffect(() => {
    fetchPetsData(); 
  }, []);

  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <header>
        <PetList pets={pets}/>
      </header>
    </div>
  );
}

export default App;
