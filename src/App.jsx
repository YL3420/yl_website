import { useState } from 'react'
import { Route, BrowserRouter, createBrowserRouter, createRoutesFromElements, Link, NavLink, RouterProvider } from 'react-router-dom'
import { toast } from 'react-toastify'
import viteLogo from '/vite.svg'
import './index.css';
import HomePage from './pages/HomePage.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const App = () => {

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('copied text!');
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout copyText={copyText} />}>
        <Route index element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return (<RouterProvider router={router} />);

}

export default App
