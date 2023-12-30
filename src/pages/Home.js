import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import User from './User';
import Posts from './Posts';
import Products from './Products';
import { Nav } from './Nav';
import ChangePassword from './ChangePassword';

const Home = () => {
  const storedUserData = JSON.parse(localStorage.getItem('userData'));
  const userName = storedUserData ? storedUserData.name : null;
  const location = useLocation();

  // Check if the current pathname is '/home'
  const isHomeRoute = /^\/home(\/home)?$/.test(location.pathname);

  return (
    <div>
    <h3>React Application</h3>
      <Nav />
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/change-pass" element={<ChangePassword />} />
      </Routes>

      {/* Render userName only when the route is '/home' */}
      {isHomeRoute && userName && <h1>User: {userName}</h1>}
    </div>
  );
};

export default Home;
