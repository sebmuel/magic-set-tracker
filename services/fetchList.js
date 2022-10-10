import axios from "axios";

const filterBasicLands = ["Swamp", "Island", "Mountain", "Forest", "Plains"]

const fetchList = async (searchList) => {
  const endpoint = "https://api.scryfall.com/cards/named?fuzzy=";
  const objectList = [];

  try {
    for (let i = 0; i < searchList.length; i++) {
      const resp = await axios.get(endpoint + searchList[i]);
      if (filterBasicLands.includes(resp.data.name)) continue;
      // check if card has reprints, only push card to array if no reprints are present
      if(resp.data.reprint){
        // set Timeout to prevent API from rejecting requests
        setTimeout(200);
        // do requests for reprints
        const reprint = await axios.get(resp.data.prints_search_uri)
        //console.log("Reprints", reprint.data);
        for (let j = 0; j < reprint.data.data.length; j++) {
          objectList.push(reprint.data.data[j]);
        }
        continue;
      }
      //console.log("No reprints found", resp.data)
      objectList.push(resp.data);
    }
  } catch (err) {
    // Handle Error Here
    return err;
  }
  return objectList;
};

export default fetchList;
