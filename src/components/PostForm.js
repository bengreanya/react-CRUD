import React, { useEffect } from 'react';
import { useState } from 'react';

export default function PostForm({ title = '', description = '', submitHandler }) {
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);

  useEffect(() => {
    console.log('click');
    setTitleInput(title);
    setDescriptionInput(description);
  }, [title, description]);

  return (
    <div>
      <label>Title</label>
      <input type="text" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
      <label>Description</label>
      <input
        type="text"
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
      />
      <button
        onClick={() => {
          submitHandler(titleInput, descriptionInput);
        }}
      >
        Submit
      </button>
    </div>
  );
}
