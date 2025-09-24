import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AppLayout from './pages/AppLayout';
import { ROUTES } from './utils/routes';
import Scan from './pages/Scan';
import Error from './pages/Error';

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/'+ ROUTES.HOME, element: <HomePage /> },
        { path: '/'+ ROUTES.ANALYSE, element: <Scan /> },
        { path: '/'+ ROUTES.DASHBOARD, element: <div className='text-center text-2xl mt-10'>Dashboard Page Coming Soon!</div> },
        { path: '/'+ ROUTES.SETTINGS, element: <div className='text-center text-2xl mt-10'>About Page Coming Soon!</div> },
        { path: '*', element: <Error /> }
      ]
    }
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;

