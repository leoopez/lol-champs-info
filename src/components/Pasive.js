/** @format */

import React from "react";
import { passiveAsset } from "./../config";
export default function Pasive({ passive }) {
  return (
    <div>
      <img src={passiveAsset(passive.image.full)} alt={passive.description} />
      <p>{passive.description}</p>
    </div>
  );
}
