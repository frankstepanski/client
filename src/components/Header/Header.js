import React from 'react';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import './Header.css';

const Header = () => (
  <nav className="header">
    <ul className="list-items">

      <li>

        <div>
          <h2>Bow-Wow</h2>
        </div>

      </li>

      <div className="headerAnchors">
        <li>
          <Link to="/home" style={{ textDecoration: 'none', color: '#3B2826' }}>
            <HomeIcon className="headerIcons" style={{ fontSize: 55 }} />
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            {' '}
            <AccountCircleIcon className="headerIcons" style={{ fontSize: 55 }} />
            {' '}

          </Link>
        </li>
        <li>
          <Link to="/addDog">
            {' '}
            <AddCircleIcon className="headerIcons" style={{ fontSize: 55 }} />
            {' '}

          </Link>
        </li>
      </div>
    </ul>
  </nav>
);

export default Header;
