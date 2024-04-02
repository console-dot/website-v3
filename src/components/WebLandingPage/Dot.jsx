import React, { useState, useEffect } from 'react';

export const Dot = ({ direction }) => {
  const [position, setPosition] = useState('');

  useEffect(() => {
    switch (direction) {
      case "top-left":
        setPosition("top-[-4px] left-[-4.5px]");
        break;
      case "top-right":
        setPosition("top-[-6px] right-[-6px]");
        break;
      case "bottom-left":
        setPosition("left-[-3px] bottom-[-4.5px]");
        break;
        case "bottom-right":
        setPosition("right-[-5px] bottom-[-6.5px]");
        break;
      default:
        setPosition("");
    }
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className={`w-3 h-3 bg-dottedBorder rounded-full absolute ${position}`}></div>
  );
};
