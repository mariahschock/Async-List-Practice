import { useState, useEffect } from 'react';
import PetList from './PetList';
import SongList from './SongList';
import { getPets, getSongs } from './services/fetch-utils';

import './App.css';
// import your arrays here

function App() {
  const [pets, setPets] = useState([]);
  const [songs, setSongs] = useState([]);

  async function fetchPetsData() {
    const data = await getPets();
    setPets(data);
  }

  useEffect(() => {
    fetchPetsData(); 
  }, []);

  async function fetchSongData() {
    const data = await getSongs();
    setSongs(data);
  }

  useEffect(() => {
    fetchSongData();
  }, []);

  return (
    <div className="App">
      <header>
        <PetList pets={pets}/>
        <hr />
        <SongList songs={songs}/>
      </header>
    </div>
  );
}

export default App;
