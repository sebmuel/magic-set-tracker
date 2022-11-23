import Image from "next/image";

export default function Card({ card }) {
  console.log(card)
  return (
    <h1>{card.name}</h1>
  );
}


