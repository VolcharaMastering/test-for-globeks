import Card from "../../ui/Card/Card";

function CardList({ gotedCards }) {
  return (
    <section className="card-list">
      {gotedCards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          phone={card.phone}
          email={card.email}
          address={card.address}
          position_name={card.position_name}
          department={card.department}
          hire_date={card.hire_date}
        />
      ))}
    </section>
  );
}

export default CardList;
