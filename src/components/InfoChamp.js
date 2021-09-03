/** @format */

import React from "react";

import Info from "./Info";
import Tags from "./Tags";
import Spells from "./Spells";
import Pasive from "./Pasive";
import Skins from "./Skins";

export default function InfoChamp({ info }) {
  console.log(info, info.spells);
  return (
    <div className='card__info--champ'>
      <div className='cic__rank'></div>
      <div className='cic__front'></div>
      <div className='cic__back'></div>
      <Info info={info.info} />
      <Tags tags={info.tags} />
      <Spells spells={info.spells} />
      <Pasive passive={info.passive} />
      <Skins skins={info.skins} name={info.name} />
    </div>
  );
}
