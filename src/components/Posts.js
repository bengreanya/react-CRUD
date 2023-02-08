import React from 'react';
import { usePosts } from '../hooks/usePosts.js';
export default function Posts() {
  const { posts } = usePosts();
  return (
    <div>
      {posts.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </div>
  );
}
