import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
const Layout = ({ children }) => {
  return (
    <div className='flex justify-center flex-col items-center  max-w-xs md:max-w-lg mx-auto  '>
      <Navbar />
      <Footer />
      {children}
    </div>
  );
};

export default Layout;
