/** @format */

import React from "react";

export default function Champion({ name, info }) {
  console.log(info);
  return (
    <div className='champion-card'>
      <img
        className='cc-img'
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`}
        alt={name}
      />
      <div className='cc-container'>
        <div className='cc-assets'>
          <div>Later</div>
        </div>
        <div className='cc-info'>
          <h2 className='cc-name'>{info.name}</h2>
          <p className='cc-text'>{info.blurb}</p>
          <a href='#' className='btn-more'>
            More
          </a>
        </div>
      </div>
    </div>
  );
}
