/** @format */

import React from "react";
import { IoClose } from "react-icons/io5";

import { splashImg } from "./../config";

import Info from "./Info";
import Tags from "./Tags";
import Spells from "./Spells";
import Pasive from "./Pasive";
import Skins from "./Skins";

export default function InfoChamp({ info, onChange = f => f }) {
  console.log(`url(${splashImg(info.name)})`);
  return (
    <>
      <div
        className='card__info--background'
        style={{ backgroundImage: `url(${splashImg(info.name)})` }}>
        <div className='cic__btn' onClick={() => onChange(null)}>
          <IoClose size={"100%"} />
        </div>
        <Info info={info.info} />
        <Tags tags={info.tags} />
        <Spells spells={info.spells} />
        <Pasive passive={info.passive} />
        <Skins skins={info.skins} name={info.name} />
      </div>
    </>
  );
}
