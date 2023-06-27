import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="logo">Hotelify</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="navButton">Create Account</button>
            <button className="navButton">Sign in</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
