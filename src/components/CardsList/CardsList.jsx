/* eslint-disable react/prop-types */
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import './CardsList.scss'
import { setChosenCard } from '../../store/slices/togglePopupSlice';

import Card from "../../ui/Card/Card";

// eslint-disable-next-line react/prop-types
function CardList({ gotedCards }) {
    console.log('Enier CARDLIST');
    const dispatch = useDispatch();

    const handleCheckCard = (card) =>{
        dispatch(setChosenCard(card));
    }
  return (
    <section className="card-list">
      {gotedCards.map((card) => (
        <Card
          onClick = {handleCheckCard(card)}
          key={useId}
          name={card.name}
          phone={card.phone}
          email = {card.email}
        />
      ))}
    </section>
  );
}

export default CardList;
