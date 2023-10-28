/* eslint-disable react/prop-types */
import './Card.scss'

function Card({ name, phone, email }) {
  return (
    <div className="card">
      <h1 className="card__title">{name}</h1>
      <div className="card__mail-box">
        <p>{email}</p>
      </div>
      <div className="card__phone-box">
        <p>{phone}</p>
      </div>
    </div>
  );
}

export default Card;
