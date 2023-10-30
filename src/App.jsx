/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "./App.scss";
import { getCards, getCardByValue } from "./utils/api";
import { useSelector } from "react-redux";
import CardList from "./components/CardsList/CardsList";
import Popup from "./components/Popup/Popup";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [cards, setCards] = useState([]);
  
  const [searchRequest, setSearchRequest] = useState('');

  const isPopupOpen = useSelector((state) => state.togglePopup.isOpen);  

  const getCardsFromApi = async (flag) => {
    try {
      if(flag){
      const cards = await getCards();
      setCards(cards.data);
      }else{
        const cards = await getCardByValue(searchRequest)
        setCards(cards.data);
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  useEffect(() => {
    getCardsFromApi(true);
  }, []);

  useEffect(() => {
    if (searchRequest){
      getCardsFromApi(false);
    }else{
    getCardsFromApi(true);
    }
  }, [searchRequest]);

  return (
    <>
        <SearchBar findCard={setSearchRequest} />
      <main className="main">
        {cards.length && <CardList gotedCards={cards} />}
        {isPopupOpen && <Popup />}
      </main>
    </>
  );
}

export default App;
