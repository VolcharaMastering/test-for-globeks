import axios from "axios";

const url = "http://localhost:3000";

const getCards = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getCardByValue = async (searchValue) => {
  try {
    const response = await axios.get(`${url}?term=${searchValue}`);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { getCards, getCardByValue };
