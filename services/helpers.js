import { filterBasicLands } from "../config";

export function cardsToSet(cards) {
  const setDictionary = {};
  for (const card of cards) {
    for (const c of card) {
      if (c.set_name in setDictionary) {
        setDictionary[c.set_name].push(c);
      } else {
        setDictionary[c.set_name] = [c];
      }
    }
  }
  return setDictionary;
}

export function filterCards(searchString) {
  const names = searchString.split("\n").map((s) => {
    const name = s.substring(s.indexOf(" ") + 1);
    if (!filterBasicLands.includes(name)) return name;
    return null;
  });
  return names;
}

export const validateSearchString = (searchString, stringType) => {
  if (searchString === "") {
    return false;
  }
  return true;
};
