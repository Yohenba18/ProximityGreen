import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { TiChartLine } from "react-icons/ti";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["2015", "2016", "2017", "2018", "2019", "2020"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 7 })),
      borderColor: "#128C76",
      backgroundColor: "#75C696",
    },
  ],
};

const Graph = () => {
  return (
    <div className="flex justify-evenly p-5 py-20 items-center  bg-gradient-to-b from-white to-blue-100">
      <div className="w-1/2">
        <Line options={options} data={data} />
      </div>
      <div className="w-1/3 flex flex-col gap-3">
        <TiChartLine className="h-12 w-12 text-green-700" />
        <h3 className="font-bold text-4xl">$7M+ paid out to ESG Investors</h3>
        <p className="font-normal text-xl text-gray-400">
          There are many ESG rating, reporting agencies but the companies are
          the same, hence we aggregate all the information together on a single
          Index and give users the freedom to browse through metrics of each
          company before investing in any fund.
        </p>
      </div>
    </div>
  );
};

export default Graph;
