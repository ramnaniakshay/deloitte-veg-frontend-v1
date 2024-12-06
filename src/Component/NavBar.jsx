import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import '../CSS/Navbar.css';


const Navbar = () => {
    const navigate = useNavigate();
    const jwtToken = localStorage.getItem('jwt');

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/login'); 
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Home</NavLink> {/* "end" prop for exact match */}
        </li>
        <li className="nav-item">
          <NavLink to="/news" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>News</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/create" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Create</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/view" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>View</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/delete" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Delete</NavLink>
        </li>

        {jwtToken ? ( 
          <li className="nav-item">
            <button onClick={handleLogout} className="nav-link logout-button">Logout</button> {/* Style the logout button */}
          </li>
        ) : (
          <>
             <li className="nav-item">
              <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Sign Up</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Login</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

