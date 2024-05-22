import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const CardCaseStudy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { card } = location.state || {};

  if (!card) {
    return <div>No case study selected</div>;
  }

  return (
    <div className="w-full overflow-hidden">
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{card.title}</h1>
      <img src={card.image} alt={card.title} />
      <p>{card.description}</p>
    </div>
  );
};
