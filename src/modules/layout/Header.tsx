import { FC } from 'react';
import './styles/header.css';
import { Link, NavLink } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-content'>
          <div className='logo'>
            <Link to='#'>Financial card demo</Link>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/premium'>Premium</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
