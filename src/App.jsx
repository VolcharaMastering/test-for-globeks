import { useState, useEffect } from "react";
import "./App.scss";
import getCards from "./api/api";
import CardList from "./components/CardsList/CardsList";

function App() {
  // const [popupOpen, setPopupOpen] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(getCards());
  }, []);
  return (
    <>
      <main className="main">
        {/* <SearchBar /> */}
        <CardList cards={cards} />
      </main>
    </>
  );
}

export default App;
