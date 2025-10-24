import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AppLayout from './pages/AppLayout';
import { ROUTES } from './utils/routes';
import Scan from './pages/Scan';
import Error from './pages/Error';
import DashBoard from './pages/DashBoard';
import { UserProvider } from './contexts/UserContexts';

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/'+ ROUTES.HOME, element: <HomePage /> },
        { path: '/'+ ROUTES.ANALYSE, element: <Scan /> },
        { path: '/'+ ROUTES.DASHBOARD, element: <DashBoard /> },
        { path: '/'+ ROUTES.SETTINGS, element: <div className='text-center text-2xl mt-10'>Settings Page Coming Soon!</div> },
        { path: '*', element: <Error /> }
      ]
    }
  ]);

  return (
    <>
    <UserProvider>
        <RouterProvider router={router} />
    </UserProvider>
    </>
  );
}

export default App;

