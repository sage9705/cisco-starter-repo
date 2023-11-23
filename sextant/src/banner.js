import React from 'react';
import './banner.css';

const Banner = ({ bannerText }) => (
  <div className="Banner">
    <h1>{bannerText}</h1>
  </div>
);

export default Banner;
