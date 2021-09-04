/** @format */

import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { championsJSON } from "../config";

import Champions from "./Champions";
import InfoChamp from "./InfoChamp";

export default function Main() {
  const [champSelected, setChampSelected] = useState(false);
  const { loading, data, error } = useFetch(championsJSON);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;

  const objectData = JSON.parse(JSON.stringify(data.data));

  return champSelected ? (
    <InfoChamp onChange={setChampSelected} info={champSelected} />
  ) : (
    <Champions objectData={objectData} onChange={setChampSelected} />
  );
}
