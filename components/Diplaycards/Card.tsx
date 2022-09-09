import React from "react";
import SingleCard from "./SingleCard";
import { data } from "../../data/Displaycard";

const Card = () => {
  return (
    <>
      <div className="flex gap-10">
        {data.map((dat, id) => {
          return (
            <SingleCard
              key={id}
              image={dat.image}
              title={dat.title}
              location={dat.location}
              description={dat.description}
              req_amount={dat.req_amount}
            />
          );
        })}
      </div>
    </>
  );
};

export default Card;
