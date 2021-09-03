/** @format */

import React from "react";

import { spellImg } from "../config";

export default function Spells({ spells }) {
  const renderSpells = spells.map((spell, i) => (
    <Spell key={i} spell={spell} />
  ));
  return renderSpells;
}

const Spell = ({ spell }) => {
  return (
    <div className='cic__spell'>
      <img src={spellImg(spell.image.full)} alt={spell} />
      <p>{spell.description}</p>
    </div>
  );
};
