import React, { useState } from 'react';

export const Breadcrumbs = () => {
  // State to keep track of the breadcrumb trail
  const [trail, setTrail] = useState([]);

  // Function to update the breadcrumb trail
  const updateTrail = (page) => {
    // Check if the page already exists in the trail
    if (!trail.includes(page)) {
      setTrail([...trail, page]); // Add the page to the trail
    }
  };

  return (
    <div>
      {/* Display each breadcrumb */}
      {trail.map((page, index) => (
        <span key={index}>
          {page}
          {index < trail.length - 1 && ' > '}
        </span>
      ))}
    </div>
  );
};
