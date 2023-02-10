import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';
import { usePosts } from '../hooks/usePosts.js';
import PostCard from './PostCard.js';
export default function Posts() {
  const { posts } = usePosts();
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth" />;
  }
  return (
    <div>
      <Link className="link" to="/posts/new">
        Create a new Post!
      </Link>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
