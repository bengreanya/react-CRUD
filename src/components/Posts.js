import React from 'react';
import { usePosts } from '../hooks/usePosts.js';
import PostCard from './PostCard.js';
export default function Posts() {
  const { posts } = usePosts();
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
