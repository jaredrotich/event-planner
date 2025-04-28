import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';

export default function Home() {
  const { darkMode } = useTheme();

  return (
    <div className={`home-page ${darkMode ? 'dark' : ''}`}>
      <div className="hero">
        <h1>Welcome to Event Planner</h1>
        <Link to="/dashboard" className="button">
          View Events
        </Link>
      </div>
    </div>
  );
}