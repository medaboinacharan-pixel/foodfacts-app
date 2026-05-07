import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar({ savedCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>🍔 FoodFacts</h1>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/saved"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Saved Items
            {savedCount > 0 && <span className="badge">{savedCount}</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
