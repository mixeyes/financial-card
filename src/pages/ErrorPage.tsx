import { FC } from 'react';
import './styles/error.css';

const ErrorPage: FC = () => {
  const stars = Array.from({ length: 100 }, (_, index) => <div key={index} className='star'></div>);
  return (
    <div className='wrapper'>
      <div className='text_group'>
        <p className='text_404'>404</p>
        <p className='text_lost'>
          The page you are looking for <br />
          has been lost in space.
        </p>
      </div>
      <div className='window_group'>
        <div className='window_404'>
          <div className='stars'>{stars}</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
