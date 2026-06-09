import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-card-image" />
          <div className="shimmer-card-body">
            <div className="shimmer-line shimmer-line-title" />
            <div className="shimmer-line" />
            <div className="shimmer-line short" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
