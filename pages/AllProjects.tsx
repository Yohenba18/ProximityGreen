import React from "react";
import List from "../components/AllProjects/List";
import Searchbar from "../components/AllProjects/Searchbar";
import Layout from "../components/shared/Layout";

const AllProject = () => {
  return (
    <div>
      <Layout>
        <Searchbar />
        <List />
      </Layout>
    </div>
  );
};

export default AllProject;
