import { FC } from 'react';
import './styles/content.css';
import { Aside } from '@components/aside/Aside';
import { FinancialCard } from '@modules/finaincial-card/FinancialCard';
import { useAccess } from '@context/accessContext';

interface IContentWrapperProps {
  children: React.ReactNode;
}

export const ContentWrapper: FC<IContentWrapperProps> = ({ children }) => {
  const { isPremium } = useAccess();
  return (
    <div className='content-wrapper'>
      {/* <Aside>
        <FinancialCard />
      </Aside> */}
      <div className='content'>{children}</div>
      <Aside>{isPremium ? <FinancialCard /> : null}</Aside>
    </div>
  );
};
