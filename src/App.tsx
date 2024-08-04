import { GeneralProvider } from '@context/GeneralContext';
import './App.css';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <GeneralProvider>
      <RouterProvider router={router}></RouterProvider>
    </GeneralProvider>
  );
}

export default App;
