import Card from "./Card";
import { Accordion } from "flowbite-react";

export default function SetList({ result }) {
  const setName = result[0];
  const cards = result[1];
  const cardsAmount = cards.length;
  
  return (
    <Accordion.Panel>
      <Accordion.AccordionTitle className="set-name">{setName}-Anzahl:{cardsAmount}</Accordion.AccordionTitle>
      <Accordion.Content>
        {cards.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </Accordion.Content>
    </Accordion.Panel>
  );
}
