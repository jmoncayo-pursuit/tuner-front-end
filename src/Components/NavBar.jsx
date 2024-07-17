// Components/NavBar.jsx
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to='/songs'>Tuner</Link> {/* Update link text */}
      </h1>
      <button>
        <Link to='/songs/new'>New Song</Link> {/* Update link text */}
      </button>
    </nav>
  );
}
