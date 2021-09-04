/** @format */

import React from "react";
import Champion from "./Champion";

export default function Champions({ objectData, onChange = f => f }) {
  const rendered = Object.entries(objectData).map((item, i) => (
    <Champion key={i} name={item[0]} info={item[1]} onChange={onChange} />
  ));

  return <div className='flex-container'>{rendered}</div>;
}
