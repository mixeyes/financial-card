import { AccessProvider } from '@context/accessContext';
import './App.css';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <AccessProvider>
      <RouterProvider router={router} />
    </AccessProvider>
  );
}

export default App;
