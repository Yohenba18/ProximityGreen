import React from "react";
import SingleCard from "./SingleCard";
import { data } from "../../data/Card";

const Card = () => {
  return (
    <>
      <div className="flex gap-10">
        {data.map((dat, id) => {
          return (
            <SingleCard
              key={id}
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
