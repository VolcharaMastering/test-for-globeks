/* eslint-disable react/prop-types */
import "./Card.scss";
import { useDispatch } from "react-redux";
import {
  setChosenCard,
  togglePopup,
} from "../../store/slices/togglePopupSlice";

function Card({ card }) {
  const dispatch = useDispatch();

  const handleCheckCard = (card) => {
    dispatch(togglePopup(true));
    dispatch(setChosenCard(card));
  };

  return (
    <div className="card" onClick={() => handleCheckCard(card)}>
      <h1 className="card__title">{card.name}</h1>
      <div className="card__mail-box">
        <p  className="card__values">{card.email}</p>
      </div>
      <div className="card__phone-box">
        <p className="card__values">{card.phone}</p>
      </div>
    </div>
  );
}

export default Card;
