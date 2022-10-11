import { filterBasicLands } from "../config";

export function sortSet(a, b) {
  if (a[1].length === b[1].length) {
    return 0;
  } else {
    return a[1].length > b[1].length ? -1 : 1;
  }
}

export function cardsToSet(cards) {
  const setDictionary = {};
  for (const card of cards) {
    if (card.set_name in setDictionary) {
      setDictionary[card.set_name].push(card);
    } else {
      setDictionary[card.set_name] = [card];
    }
  }
  return setDictionary;
}

export function filterCards(searchString) {
    const names = searchString
      .split("\n")
      .map((s) => {
        const name = s.substring(s.indexOf(" ") + 1);
        if (!filterBasicLands.includes(name)) return name;
        return null;
      })
      return names;
}

export const validateSearchString = (searchString, stringType) => {
  if (searchString === "") {
    return false;
  }
  return true;
}