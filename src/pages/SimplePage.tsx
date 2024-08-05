import { ContentWrapper } from '@modules/wrappers/ContentWrapper';
import { FC } from 'react';
import { useAccess } from '@context/accessContext';

const SimplePage: FC = () => {
  const { getAccessStatus, resetAccessStatus } = useAccess();
  return (
    <ContentWrapper>
      <>
        <h1>Financial Side component demo</h1>
        <div className='card'>
          <button type='button' onClick={getAccessStatus}>
            Get Access Permission
          </button>
          <button type='button' onClick={resetAccessStatus}>
            Reset Access Permission
          </button>
        </div>
      </>
    </ContentWrapper>
  );
};

export default SimplePage;
