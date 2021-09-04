/** @format */

import React from "react";
import { FaWindowClose } from "react-icons/fa";

import Info from "./Info";
import Tags from "./Tags";
import Spells from "./Spells";
import Pasive from "./Pasive";
import Skins from "./Skins";

export default function InfoChamp({ info, onChange = f => f }) {
  return (
    <div className='card__info--champ'>
      <button onClick={() => onChange(null)}>
        <FaWindowClose />
      </button>
      <Info info={info.info} />
      <Tags tags={info.tags} />
      <Spells spells={info.spells} />
      <Pasive passive={info.passive} />
      <Skins skins={info.skins} name={info.name} />
    </div>
  );
}
