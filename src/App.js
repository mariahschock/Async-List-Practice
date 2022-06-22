import { useState, useEffect } from 'react';
import PetList from './PetList';
import SongList from './SongList';
import MovieList from './MovieList';
import AnimalList from './AnimalList';
import { getMovies, getPets, getSongs, getAnimals } from './services/fetch-utils';

import './App.css';
// import your arrays here

function App() {
  const [pets, setPets] = useState([]);
  const [songs, setSongs] = useState([]);
  const [movies, setMovies] = useState([]);
  const [animals, setAnimals] = useState([]);

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

  async function fetchMovieData() {
    const data = await getMovies();
    setMovies(data);
  }

  useEffect(() => {
    fetchMovieData();
  }, []);

  async function fetchAnimalData() {
    const data = await getAnimals();
    setAnimals(data);
  }

  useEffect(() => {
    fetchAnimalData();
  }, []);

  return (
    <div className="App">
      <header>
        <PetList pets={pets}/>
        <hr />
        <SongList songs={songs}/>
        <hr />
        <MovieList movies={movies}/>
        <hr />
        <AnimalList animals={animals}/>
      </header>
    </div>
  );
}

export default App;
