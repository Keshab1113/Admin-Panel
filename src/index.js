import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from '../src/components/pages/Home'
import ImagesPage from '../src/components/pages/ImagesPage'
import NoPage from './components/pages/NoPage';
import Features from './components/pages/Features';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element:<Home/>
      },
      {
        path: 'features',
        element:<Features/>
      },
      {
        path: 'images',
        element:<ImagesPage/>
      },
      {
        path: '*',
        element:<NoPage/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

