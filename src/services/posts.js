import { checkError, client } from './client.js';

export async function getPosts() {
  const resp = await client.from('bulletins').select('*');
  return checkError(resp);
}
export async function createPost(title, description) {
  const resp = await client.from('posts').insert({ title: title, description });
  return checkError(resp);
}
