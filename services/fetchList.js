import { sortSet, cardsToSet, filterCards, validateSearchString } from "../services/helpers";
import axios from "axios";

const fetchList = async (searchList) => {
  const cardNames = filterCards(searchList.current.value);  
  const resData = await axios.post("http://app.pathofcurrency.com:5555/cards/cardlist", null, {
      params: {
        card: JSON.stringify(cardNames),
      },
    })
  return resData;
};

export default fetchList;
