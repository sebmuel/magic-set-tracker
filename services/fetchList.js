import axios from "axios";

const fetchList = async (searchList) => {
  const endpoint = "https://api.scryfall.com/cards/named?fuzzy=";
  const objectList = [];

  try {
    for (let i = 0; i < searchList.length; i++) {
      const cardName = searchList[i];
      if (!cardName) {
        continue;
      }
      const resp = await axios.get(endpoint + cardName);
      // check if card has reprints, only push card to array if no reprints are present
      // set Timeout to prevent API from rejecting requests
      setTimeout(75);
      // do requests for reprints
      const reprint = await axios.get(resp.data.prints_search_uri);

      if (reprint.data.has_more) {
        console.log("has more reprints");
      }
      //console.log("Reprints", reprint.data);
      if (reprint.data.object === "error") {
        continue;
      }
      for (let j = 0; j < reprint.data.data.length; j++) {
        objectList.push(reprint.data.data[j]);
      }
    }
  } catch (err) {
    // Handle Error Here
    return err;
  }
  return objectList;
};

export default fetchList;
