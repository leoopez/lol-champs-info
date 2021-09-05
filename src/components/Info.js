/** @format */

import React from "react";

export default function Info({ info }) {
  return (
    <div className='cic__info'>
      <p>General Info</p>
      <ul>
        <li>Attack: {info.attack}</li>
        <li>Defense: {info.defense}</li>
        <li>Magic: {info.magic}</li>
        <li>Difficulty {info.difficulty}</li>
      </ul>
    </div>
  );
}
