import React from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';
import { signOut } from '../services/auth.js';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();
  const handleClick = async () => {
    await signOut();
    setUser(null);
  };
  return (
    <header>
      <h2>Bulletin Board</h2>
      {user && (
        <>
          <div className="greeting">Hello {user.email}</div>
          <button className="button" onClick={handleClick}>
            Sign Out
          </button>
        </>
      )}
    </header>
  );
}
