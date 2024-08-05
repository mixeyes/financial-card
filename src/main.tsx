import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LoaderWrapper } from '@modules/wrappers/LoaderWrapper.tsx';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoaderWrapper>
      <App />
    </LoaderWrapper>
  </StrictMode>,
);
