import React from 'react';
import { useUser } from '../context/UserContext.js';

export default function PostCard({ title, description }) {
  const { user } = useUser();
  return (
    <div className="postcard">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
