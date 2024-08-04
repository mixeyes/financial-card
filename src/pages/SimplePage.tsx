import { ContentWrapper } from '@modules/wrappers/ContentWrapper';
import { FC } from 'react';

const SimplePage: FC = () => (
  <ContentWrapper>
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  </ContentWrapper>
);

export default SimplePage;
