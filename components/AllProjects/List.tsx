import React from "react";
import Card from "../Card/Card";
import { data } from "../../data/ListedProjects";

const List = () => {
  return (
    <div className="flex mx-auto my-10">
      <Card data={data} />
    </div>
  );
};

export default List;
