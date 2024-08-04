import { FC } from 'react';
import './styles/footer.css';
import { NavLink } from 'react-router-dom';

export const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div className='footer-section'>
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies aliquam, nunc
              nisl aliquam nisl, eget aliquam nisl nunc vel nisl.
            </p>
          </div>
          <div className='footer-section'>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/premium'>Premium</NavLink>
              </li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <i className='fas fa-map-marker-alt'></i> 123 Main Street, City, State
              </li>
              <li>
                <i className='fas fa-phone'></i> (123) 456-7890
              </li>
              <li>
                <i className='fas fa-envelope'></i> info@example.com
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
