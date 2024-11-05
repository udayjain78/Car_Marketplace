import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home';
import Contact from './contact';
import { ClerkProvider } from '@clerk/clerk-react';
const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
import App from "./App";
import AddListing from './add-listing';

const router=createBrowserRouter([ 
    {
      path:'/',
      element: <Home/>
    },

    {
      path: '/contact',
      element: <Contact/>
    },
    {
      path:'/add-listing',
      element:<AddListing/>
    }
    
])

function apple() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-listing" element={<AddListing />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<apple />, document.getElementById('root'));

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
      <RouterProvider router={router}/>
   </ClerkProvider>
  </StrictMode>,
)
