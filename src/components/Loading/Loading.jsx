import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="cms-loading">
      <div className="cms-spinner">
        <div className="spinner-logo">
          <svg viewBox="0 0 100 100" className="logo-outer">
            <path 
              d="M50 10 L90 50 L50 90 L10 50 Z" 
              className="outer-square"
            />
          </svg>
          <svg viewBox="0 0 60 60" className="logo-inner">
            <path 
              d="M30 10 L50 30 L30 50 L10 30 Z" 
              className="inner-square"
            />
          </svg>
        </div>
        <div className="loading-progress">
          <div className="progress-track"></div>
          <div className="progress-thumb"></div>
        </div>
        <p className="loading-text">Loading ...</p>
      </div>
    </div>
  );
}