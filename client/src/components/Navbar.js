import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/navbar.css';

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="logo">Hotelify</span>
        </Link>
        {user ? (
          <div className="signedInNavItem">
            <Link to="/cancellation-policy" className="policy">
              Our Policy
            </Link>
            <span>Welcome, {user.username}!</span>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/cancellation-policy" className="policy">
              Our Policy
            </Link>
            <button className="navButton">Create Account</button>
            <Link to="/login">
              <button className="navButton">Sign in</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
