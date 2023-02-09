import React from 'react';
import { useState } from 'react';

export default function PostForm({ title = '', description = '', subHandler }) {
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);
  return (
    <div>
      <label>Title</label>
      <input type="text" />
      <label>Description</label>
      <input type="text"></input>
      <button>Submit</button>
    </div>
  );
}
