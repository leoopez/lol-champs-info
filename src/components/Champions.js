/** @format */

import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Champion from "./Champion";

export default function Champions() {
  const { loading, data, error } = useFetch(
    "http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json"
  );

  useEffect(() => {}, [loading]);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;

  const objectData = JSON.parse(JSON.stringify(data.data));
  const rendered = Object.entries(objectData).map((item, i) => (
    <Champion key={i} name={item[0]} info={item[1]} />
  ));

  return <div className='flex-container'>{rendered}</div>;
}
