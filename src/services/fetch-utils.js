import { client } from './client';

export async function getPets() {
  const resp = await client.from('pets').select('*');

  return resp.data;
}