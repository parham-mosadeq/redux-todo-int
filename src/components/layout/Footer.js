import React from 'react';

const Footer = () => {
  return (
    <div
      className='flex flex-col items-center justify-center h-fit my-10 
    text-center capitalize tracking-wider'
    >
      <ul className='text-stone-500'>
        <li className='hover:text-slate-600'>
          to edit doubleClick on todo's title
        </li>
        <li className='hover:text-slate-600'>to remove a todo click on ❌</li>
        <li className='hover:text-slate-600'>to finish a todo click on ✔</li>
        <li className='hover:text-slate-600'>
          todos automatically are added to related pages
        </li>
      </ul>
    </div>
  );
};

export default Footer;
