import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';
import './PostCard.css';
import { usePosts } from '../hooks/usePosts.js';
import { deletePost } from '../services/posts.js';

export default function PostCard({ title, description, posts, setPosts, user_id, id }) {
  const { user } = useUser();
  const owner = user.id === user_id;
  const { loading, error, setError } = usePosts(id);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  const handleClick = async () => {
    try {
      setPosts(posts.filter((post) => post.id !== id));
      await deletePost(id);
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div className="postcard">
      <h3>{title}</h3>
      <p>{description}</p>
      {owner && (
        <>
          <p>
            <Link to={`/posts/edit/${id}`}>Edit</Link>
          </p>
          <button onClick={handleClick}>Delete Post</button>
        </>
      )}
    </div>
  );
}
