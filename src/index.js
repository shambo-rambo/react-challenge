import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Portfolio from './pages/Portfolio'; // Make sure this is the correct path to your Portfolio component
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <About /> },
      { path: 'about', element: <About />},
      { path: 'portfolio', element: <Portfolio /> }, // This should point to the Portfolio component
      { path: 'contact', element: <Contact /> },
      { path: 'resume', element: <Resume /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
