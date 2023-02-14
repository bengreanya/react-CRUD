import { checkError, client } from './client.js';

export async function getPosts() {
  const resp = await client.from('bulletins').select('*');
  return checkError(resp);
}
export async function createPost(title, description, user_id) {
  const resp = await client.from('bulletins').insert({ title, description, user_id });
  return checkError(resp);
}

export async function updatePost(id, title, description) {
  const resp = await client.from('bulletins').update({ title, description }).match({ id });
  return checkError(resp);
}

export async function getPostDetail(id) {
  const resp = await client.from('bulletins').select('*').match({ id }).single();
  return checkError(resp);
}

export async function deletePost(id) {
  const resp = await client.from('bulletins').delete().match({ id }).single();
  return checkError(resp);
}
