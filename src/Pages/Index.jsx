// src/Pages/Index.jsx
import { useState, useEffect } from 'react';
import Song from '../Components/Songs';
import { fetchAPI } from '../utils/api';

function Index() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchAPI(`/songs`).then(setSongs).catch(console.error);
  }, []);

  return (
    <div className='Index'>
      <h2>Index</h2>
      <table>
        <thead>
          <tr>
            <th>Favorite</th>
            <th>Song Details</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <Song key={song.id} song={song} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
