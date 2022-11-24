import Image from "next/image";

export default function Card({ card }) {
  const image = JSON.parse(card.image_uris);
  return (
    <div className="lg:w-1/6">
      <h1 className="text-black font-medium text-lg py-4">{card.name}</h1>
      <Image width={244} height={340} alt={card.name} src={image.normal} />
    </div>
  );
}
