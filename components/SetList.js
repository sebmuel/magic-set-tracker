import Card from "./Card";

export default function SetList({ result }) {
  const setName = result[0];
  const cards = result[1];
  const cardsAmount = cards.length;
  
  return (
    <>
      <h2 className="set-name">{setName}-Anzahl:{cardsAmount}</h2>
      <div className="cardGrid">
        {cards.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </>
  );
}
