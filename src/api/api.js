import axios from "axios";

const url = 'http://127.0.0.1:3000';

const getCards = async () => {
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const findCard = async ({ searchValue }) => {
  try {
    const response = await axios.get(`${url}?term=${searchValue}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { getCards, findCard };
