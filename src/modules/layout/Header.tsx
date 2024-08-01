import { FC } from 'react';
import './styles/header.css';

export const Header: FC = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-content'>
          <div className='logo'>
            <a href='#'>Financial card demo</a>
          </div>
          <nav>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Services</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
