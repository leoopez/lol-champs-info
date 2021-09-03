/** @format */

import React from "react";

export default function Info({ info }) {
  return (
    <div>
      <ul>
        <li>{info.attack}</li>
        <li>{info.defense}</li>
        <li>{info.magic}</li>
        <li>{info.difficulty}</li>
      </ul>
    </div>
  );
}
