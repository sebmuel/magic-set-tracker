import { sortSet, cardsToSet, filterCards, validateSearchString } from "../services/helpers";
import axios from "axios";

const fetchList = async (searchList) => {
  const cardNames = filterCards(searchList.current.value);
  if (searchList.current.value == "") {
    return false;
  }

  try {
    const resData = await axios.post("http://app.pathofcurrency.com:5555/cards/cardlist", {
      data: {
        card: JSON.stringify(cardNames),
      },
    });
    return resData;
  } catch (error) {
    console.err(error);
  }
};

export default fetchList;
