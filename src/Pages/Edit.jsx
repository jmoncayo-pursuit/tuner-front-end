// src/Pages/Edit.jsx
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchAPI } from '../utils/api';

function SongEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const updateSong = () => {
    fetchAPI(`/songs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(song),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => navigate(`/songs/${id}`))
      .catch(console.error);
  };

  useEffect(() => {
    fetchAPI(`/songs/${id}`).then(setSong).catch(console.error);
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong();
  };

  return (
    <div className='Edit'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          value={song.name}
          type='text'
          onChange={handleTextChange}
          placeholder='Name of Song'
          required
        />
        <label htmlFor='artist'>Artist:</label>
        <input
          id='artist'
          value={song.artist}
          type='text'
          onChange={handleTextChange}
          placeholder='Artist'
          required
        />
        <label htmlFor='album'>Album:</label>
        <input
          id='album'
          value={song.album}
          type='text'
          onChange={handleTextChange}
          placeholder='Album'
        />
        <label htmlFor='time'>Time:</label>
        <input
          id='time'
          value={song.time}
          type='text'
          onChange={handleTextChange}
          placeholder='Time (e.g., 4:20)'
        />
        <label htmlFor='is_favorite'>Favorite:</label>
        <input
          id='is_favorite'
          type='checkbox'
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
      <br />
      <Link to={`/songs/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default SongEditForm;
