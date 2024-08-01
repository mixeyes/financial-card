import { Header } from './Header';
import { Footer } from './Footer';
import { FC } from 'react';
import './styles/main.css';

interface IMainContainer {
  children: React.ReactNode;
}

export const MainContainer: FC<IMainContainer> = ({ children }) => {
  return (
    <div className='main-container'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
