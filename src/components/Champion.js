/** @format */
import React, { useState } from "react";

import { loadingJSON, extraInfoChamp } from "./../config";

import InfoChamp from "./InfoChamp";
// const loadJSON = key => key && JSON.parse(localStorage.getItem(key));
// const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export default function Champion({ name, info }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState();

  const onClick = async () => {
    try {
      const moreInfo = await fetch(extraInfoChamp(name)).then(res =>
        res.json()
      );
      setData(moreInfo);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {data && <InfoChamp info={data.data[name]} />}
      <div className='champion-card'>
        <img className='cc-img' src={loadingJSON(name)} alt={name} />
        <div className='cc-container'>
          <div className='cc-assets'></div>
          <div className='cc-info'>
            <h2 className='cc-name'>{info.name}</h2>
            <p className='cc-text'>{info.title}</p>
            <div className='tags'>
              {info.tags.map((tag, i) => (
                <span key={i} className={`tag tag-${tag}`}>
                  {tag}
                </span>
              ))}
            </div>
            <button onClick={onClick} className='btn-more'>
              More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// const obj = {version: "11.17.1", id: "Yorick", key: "83", name: "Yorick", title: "Shepherd of Souls"}
// blurb: "The last survivor of a long-forgotten religious order, Yorick is both blessed and cursed with power over the dead. Trapped on the Shadow Isles, his only companions are the rotting corpses and shrieking spirits that he gathers to him. Yorick's monstrous..."
// id: "Yorick"
// image: {full: "Yorick.png", sprite: "champion4.png", group: "champion", x: 384, y: 96, …}
// info: {attack: 6, defense: 6, magic: 4, difficulty: 6}
// key: "83"
// name: "Yorick"
// partype: "Mana"
// stats: {hp: 580, hpperlevel: 100, mp: 300, mpperlevel: 60, movespeed: 340, …}
// tags: (2) ["Fighter", "Tank"]
// title: "Shepherd of Souls"
