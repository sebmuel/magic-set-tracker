import { useState } from "react";
import Card from "./Card";

export default function SetList({ name, cards, id }) {
    const [accordionVisibility, setAccordionVisibility] = useState();
  return (
    <>
      <h2 id={id} onClick={() => setAccordionVisibility(!accordionVisibility)} className="font-bold text-3xl pb-6 cursor-pointer select-none">{name}</h2>
      <div className={`${accordionVisibility ? 'flex': 'hidden'} gap-12 pb-10`}>
        {cards
          ? cards.map((c) => {
              return <Card key={c.id} card={c} />;
            })
          : null}
      </div>
    </>
  );
}
