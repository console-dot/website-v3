import React, { useState, useEffect } from 'react';

export const Dot = ({ direction }) => {
  const [position, setPosition] = useState('');

  useEffect(() => {
    switch (direction) {
      case "top-left":
        setPosition("top-[-4px] left-[-4.5px]");
        break;
      case "top-right":
        setPosition("top-[-4px] right-[-4px]");
        break;
      case "bottom-left":
        setPosition("left-[-3px] bottom-[-4.5px]");
        break;
      default:
        setPosition("right-[-4px] bottom-[-5px]");
    }
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className={`w-2 h-2 bg-dottedBorder rounded-full absolute ${position}`}></div>
  );
};
