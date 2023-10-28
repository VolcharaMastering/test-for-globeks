function Card({ title, usersData }) {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <div className="card-mail__box">
        <p>{usersData}</p>
      </div>
      <div className="card-phone__box">
        <p>{usersData}</p>
      </div>
    </div>
  );
}

export default Card;
