import Card from "./Card";

export default function SetList({ name, cards }) {

  return (
    <div>
      <h2 className=" font-bold text-lg">{name}</h2>
      {cards ? cards.map((c) => <Card key={c.id}  card={c}/>) : null}
    </div>
  );
}
