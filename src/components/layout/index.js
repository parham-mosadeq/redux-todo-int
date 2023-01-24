import React from 'react';
import Navbar from './Navbar';
const Layout = ({ children }) => {
  return (
    <div className='grid grid-cols-1 max-w-md md:max-w-3xl mx-auto sm:grid-cols-2'>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
