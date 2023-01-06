import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './error.page';
import MainArea from './components/MainArea';
import BookAbout from './components/BookAbout'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>
  },
  {
    path:'MainArea',
    element: <MainArea/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "BookAbout",
    element: <BookAbout/>,
    errorElement: <ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default function Root() {
  return <App />;
}
