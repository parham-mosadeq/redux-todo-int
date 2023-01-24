import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='min-h-fit md:min-h-screen flex mt-10 text-justify justify-center sm:justify-start  '>
      <ul className='capitalize tracking-wider text-md text-blue-500'>
        <li>
          <Link className='hover:cursor-pointer hover:text-blue-700' to='/'>
            Todo
          </Link>
        </li>
        <li>
          <Link
            className='hover:cursor-pointer hover:text-blue-700'
            to='/completed'
          >
            completed
          </Link>
        </li>
        <li>
          <Link
            className='hover:cursor-pointer hover:text-blue-700'
            to='/unfinished'
          >
            unfinished
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
