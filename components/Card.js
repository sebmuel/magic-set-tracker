import Image from "next/image"

export default function Card({ cardData}) {
  return (
    <div>
{cardData.image_uris ?
        <Image
        width={146}
        height={204}
        src={cardData.image_uris.small}
        ></Image>: null}
        <h6>{cardData.name}</h6>
    </div>
  )
}
