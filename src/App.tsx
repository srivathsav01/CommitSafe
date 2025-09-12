import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AppLayout from './pages/AppLayout';
import { ROUTES } from './utils/routes';

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/'+ ROUTES.HOME, element: <HomePage /> },
        { path: '/'+ ROUTES.ANALYSE, element: <div className='text-center text-2xl mt-10'>Analyse Page Coming Soon!</div> },
        { path: '/'+ ROUTES.ABOUT, element: <div className='text-center text-2xl mt-10'>About Page Coming Soon!</div> },
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

