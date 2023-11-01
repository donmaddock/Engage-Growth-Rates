import { useState } from "react";
import "./App.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Colors,
} from "chart.js";
import { units, unitNames, classNames, classes } from "./Units";
import { List } from "./List";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Colors
);

const labels = ["HP", "Str", "Mag", "Dex", "Spd", "Def", "Res", "Lck", "Bld"];

function App() {
  const [unit1, setUnit1] = useState("Alear");
  const [class1, setClass1] = useState("Dragon Child");

  function selectUnit(unit) {
    setUnit1(unit);
  }

  function selectClass(job) {
    setClass1(job);
  }

  function getData() {
    const unit = {
      label: units[unit1].label,
      data: units[unit1].data,
      backgroundColor: "#36A2EB",
    };

    const unitClass = {
      label: classes[class1].label,
      data: classes[class1].data,
      backgroundColor: "#FF6384",
    };

    return {
      labels,
      datasets: [unit, unitClass],
    };
  }

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        suggestedMin: 0,
        suggestedMax: 100,
        stacked: true,
      },
    },
  };

  return (
    <>
      <h2>FE:Engage Growth Rates</h2>
      <List items={unitNames} onSelectUnit={selectUnit} type={"unit"} />
      <List items={classNames} onSelectUnit={selectClass} type={"class"} />
      <Bar data={getData()} options={options} />
      <h1>
        {class1} {unit1}
      </h1>
    </>
  );
}

export default App;
