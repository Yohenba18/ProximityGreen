import { StaticImageData } from "next/image";
import React from "react";
import SingleCard from "./SingleCard";


interface CardData {
  id: number;
  type: string;
  title: string;
  location: string;
  description: string;
  col_amount: string;
  req_amount: string;
  image: StaticImageData;
}
interface Props  {
  data: CardData[];
}


const Card: React.FC<Props> = ({data}) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-24">
        {data.map((dat: CardData) => {
          return (
            <SingleCard
              key={dat.id}
              type={dat.type}
              image={dat.image}
              title={dat.title}
              location={dat.location}
              description={dat.description}
              col_amount={dat.col_amount}
              req_amount={dat.req_amount}
            />
          );
        })}
      </div>
    </>
  );
};

export default Card;
