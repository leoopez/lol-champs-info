/** @format */

import React from "react";

export default function Info({ info }) {
  const setBars = (num, color) =>
    [...Array(10)].map((item, i) => (
      <span key={i} className={`info--bar ${num > i ? color : ""}`}></span>
    ));
  return (
    <div className='cic__info'>
      <h3>General Info</h3>
      <ul>
        <li>
          <h4>Attack: {info.attack}</h4>
          <div className='info--bars'>{setBars(info.attack, "attack")}</div>
        </li>
        <li>
          <h4> Defense: {info.defense}</h4>
          <div className='info--bars'>{setBars(info.defense, "defense")}</div>
        </li>
        <li>
          <h4> Magic: {info.magic}</h4>
          <div className='info--bars'>{setBars(info.magic, "magic")}</div>
        </li>
        <li>
          <h4>Difficulty: {info.difficulty}</h4>
          <div className='info--bars'>
            {setBars(info.difficulty, "difficulty")}
          </div>
        </li>
      </ul>
    </div>
  );
}
