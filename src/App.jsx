import { useState, useEffect } from "react";
import "./App.scss";
import { getCards, getCardByValue } from "./utils/api";
import { useSelector } from 'react-redux';
import CardList from "./components/CardsList/CardsList";
import Popup from "./components/Popup/Popup";

function App() {
  const [cards, setCards] = useState([]);

  const isPopupOpen = useSelector((state) => state.togglePopup.isOpen);

useEffect(() => {
  
  console.log('got',cards);
}, [cards]);
// setCardAtStart();
  // const findCard = (searchRequest) => {
  //   setCards(getCardByValue());
  // }

  // const handleOpenPopup = (id) => {
  //   setShowCard(cards.filter((item) => (item.id = id)));
  //   setPopupOpen(true);
  // };

  // const handleClosePopup = () => {
  //   setPopupOpen(false);
  // };
const getCardsFromApi = async ()=>{
  try {
    const cards = await getCards();
    setCards(cards.data);
  } catch(error) {
    console.error(error);
    return error;
  }
}
  useEffect(() => {
    getCardsFromApi();
  }, []);

  return (
    <>
      <main className="main">
        {/* <SearchBar 
        findCard = {findcard}

        /> */}
        {cards.length && <CardList gotedCards={cards} />}
        {isPopupOpen && (
          <Popup />
        )}
      </main>
    </>
  );
}

export default App;
