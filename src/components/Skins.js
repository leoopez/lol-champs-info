/** @format */

import React from "react";

import { loadingJSON } from "./../config";

export default function Skins({ skins, name }) {
  console.log(skins);
  const renderSkins = skins.map((skin, i) => (
    <Skin key={i} num={skin.num} name={name} />
  ));
  return renderSkins;
}

const Skin = ({ name, num }) => {
  return (
    <div>
      <img src={loadingJSON(name, num)} alt={name + num}></img>
    </div>
  );
};
