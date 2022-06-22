import { client } from './client';

export async function getPets() {
  const resp = await client.from('pets').select('*');

  return resp.data;
}

export async function getSongs() {
  const resp = await client.from('songs').select('*');

  return resp.data;
}

export async function getMovies() {
  const resp = await client.from('movies').select('*');

  return resp.data;
}