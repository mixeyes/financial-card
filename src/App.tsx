import { GeneralProvider } from '@context/GeneralContext';
import './App.css';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { MainContainer } from '@modules/layout/Main';

function App() {
  return (
    <GeneralProvider>
      <MainContainer>
        <RouterProvider router={router} />
      </MainContainer>
    </GeneralProvider>
  );
}

export default App;
