
import { useId } from 'react';
import './CardsList.scss'

import Card from "../../ui/Card/Card";

function CardList({ gotedCards }) {
  return (
    <section className="card-list">
      {gotedCards.map((card) => (
        <Card
          key={useId}
          card={card}
        />
      ))}
    </section>
  );
}

export default CardList;
