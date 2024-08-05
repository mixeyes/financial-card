import { FC } from 'react';
import './styles/skeleton.css';

export const Skeleton: FC = () => (
  <div className='skeleton-container' data-testid='skeleton'>
    <div className='ratings-summary'>
      {/* <div className='skeleton-header'></div> */}
      <div className='skeleton-row'>
        <div className='skeleton-title'></div>
        <div className='skeleton-status'></div>
        <div className='skeleton-rating'></div>
      </div>
      <div className='skeleton-row'>
        <div className='skeleton-title'></div>
        <div className='skeleton-status'></div>
        <div className='skeleton-rating'></div>
      </div>
      <div className='skeleton-row'>
        <div className='skeleton-title'></div>
        <div className='skeleton-status'></div>
        <div className='skeleton-rating'></div>
      </div>
    </div>
  </div>
);
