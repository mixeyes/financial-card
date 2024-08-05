import { FC, ReactNode } from 'react';
import './styles/content.css';
import { Aside } from '@components/aside/Aside';
import { FinancialCard } from '@modules/finaincial-card/FinancialCard';
import { useAccess } from '@context/accessContext';

interface IContentWrapperProps {
  children: ReactNode;
}

export const ContentWrapper: FC<IContentWrapperProps> = ({ children }) => {
  const { isPremium } = useAccess();
  return (
    <div className='content-wrapper'>
      {/* <Aside>
        <FinancialCard />
      </Aside> */}
      <div className='content'>{children}</div>
      <Aside>
        <FinancialCard isPremium={isPremium} />
      </Aside>
    </div>
  );
};
