// src/Pages/Show.jsx
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { fetchAPI } from '../utils/api';

function Show() {
  const [song, setSong] = useState({});
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    fetchAPI(`/songs/${id}`).then(setSong).catch(console.error);
  }, [id]);

  const handleDelete = () => {
    fetchAPI(`/songs/${id}`, { method: 'DELETE' })
      .then(() => navigate('/songs'))
      .catch(console.error);
  };

  return (
    <article>
      <h3>
        {song.is_favorite ? <span>⭐️</span> : null}
        {song.name} - {song.artist} ({song.time})
      </h3>
      <p>
        <strong>Album:</strong> {song.album}
      </p>
      <div className='showNavigation'>
        <Link to='/songs'>
          <button>Back</button>
        </Link>
        <Link to={`/songs/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
}

export default Show;
