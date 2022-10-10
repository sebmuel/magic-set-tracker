import Card from "./Card";

export default function SetList({result}) {
  const setName = result[0];
  const cards = result[1];
  console.log(cards);
  return (
    <div>
      <h2 className="set-name">{setName}</h2>
      <div className="cardGrid">
      {cards.map(card => <Card cardData={card}/>)}
      </div>
    </div>
  )
}
