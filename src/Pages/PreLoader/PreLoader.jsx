import React, { useEffect } from 'react';
import './Preloader.css';
import { PreLoader, logo } from '../../assets/images';
import ScrollLineUp from './ScrollLineUp';
import ScrollLine from './ScrollLine';

const Preloader = ({ onLoad }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.getElementById('preloader').classList.add('fade-out');
      setTimeout(onLoad, 1000);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [onLoad]);

  return (
    <div id="preloader" className="preloader">
      <div className="preloader-content">
        <div className='flex flex-col justify-center items-center'>
        <ScrollLineUp />
        <img src={PreLoader} alt="Consoledot Logo" className="logo" />
        <ScrollLine />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
