/** @format */

const API_URL = "http://ddragon.leagueoflegends.com/cdn";

export const championsJSON = `${API_URL}/11.17.1/data/en_US/champion.json`;

export const splashImg = (name, num = 0) =>
  `${API_URL}/img/champion/splash/${name}_${num}.jpg`;

export const loadingJSON = (name, num = 0) =>
  `${API_URL}/img/champion/loading/${name}_${num}.jpg`;

export const extraInfoChamp = champ =>
  `${API_URL}/11.17.1/data/en_US/champion/${champ}.json`;

export const spellImg = spell => `${API_URL}/11.17.1/img/spell/${spell}`;

export const passiveAsset = passive =>
  `${API_URL}/11.17.1/img/passive/${passive}`;