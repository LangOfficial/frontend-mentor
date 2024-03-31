import { useState, useEffect } from 'react';
import DesktopBg from '../assets/images/background-pattern-desktop.svg';
import MobileBg from '../assets/images/background-pattern-mobile.svg';

const Background = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const backgroundPattern = width >= 1440 ? DesktopBg : MobileBg;

  return (
    <img className='absolute -z-10 w-full' src={backgroundPattern} alt="" />
  )
}

export default Background