import type { NextPage } from "next";
import Funds from "../components/Home/Funds";
import Graph from "../components/Home/Graph";
import Intro from "../components/Home/Intro";
import Marketplace from "../components/Home/Marketplace";
import Raise from "../components/Home/Raise";
import Layout from "../components/shared/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col">
          <Intro />
          <div className="p-5 py-20 bg-gradient-to-b from-white  to-blue-100">
            <Funds />
            <Graph />
          </div>
          <Marketplace />
          <Raise />
        </div>
      </Layout>
    </>
  );
};

export default Home;
