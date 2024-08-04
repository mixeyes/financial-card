import { Header } from './Header';
import { Footer } from './Footer';
import { FC } from 'react';
import './styles/main.css';
import { Outlet } from 'react-router-dom';

export const MainContainer: FC = () => {
  return (
    <div className='main-container'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
