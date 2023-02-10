import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';
import { signOut } from '../services/auth.js';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();
  //   if (!user) {
  //     location.replace = './auth';
  //   }
  const handleClick = async () => {
    await signOut();
    setUser(null);
  };
  return (
    <header>
      <h2>Bulletin Board</h2>
      {user && (
        <>
          <div>Hello {user.email}</div>

          <button onClick={handleClick}>Sign Out</button>
          <Link to="/posts/new">Create a new Post!</Link>
        </>
      )}
    </header>
  );
}
