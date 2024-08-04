import { FC } from 'react';
import './styles/content.css';
import { Aside } from '@components/aside/Aside';
import { FinancialCard } from '@modules/aside-cards/FinancialCard';

interface IContentWrapperProps {
  children: React.ReactNode;
}

export const ContentWrapper: FC<IContentWrapperProps> = ({ children }) => {
  return (
    <div className='content-wrapper'>
      <Aside>
        <FinancialCard />
      </Aside>
      <div className='content'>{children}</div>
      <Aside>
        <FinancialCard />
      </Aside>
    </div>
  );
};