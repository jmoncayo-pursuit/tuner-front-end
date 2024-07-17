// Components/Songs.jsx
import { Link } from 'react-router-dom';

function Song({ song }) {
  return (
    <tr>
      <td>{song.is_favorite ? <span>⭐️</span> : null}</td>
      <td>
        <Link to={`/songs/${song.id}`}>
          {' '}
          {/* Update link */}
          {song.name} - {song.artist}
        </Link>
      </td>
    </tr>
  );
}

export default Song;
