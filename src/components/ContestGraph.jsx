import React, { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Card, Select } from "@shopify/polaris";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ContestGraph = ({ contests }) => {
  const [selectedPhase, setSelectedPhase] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handlePhaseChange = (value) => setSelectedPhase(value);

  const handleTypeChange = (value) => setSelectedType(value);

  const filteredContests = contests.filter((contest) => {
    const matchesPhase = selectedPhase ? contest.phase === selectedPhase : true;
    const matchesType = selectedType ? contest.type === selectedType : true;
    return matchesPhase && matchesType;
  });

  const chartRef = useRef(null);

  const data = {
    labels: filteredContests.map((contest) =>
      contest.name.length > 10
        ? contest.name.slice(0, 10) + "..."
        : contest.name
    ),
    datasets: [
      {
        label: "Contest Duration",
        data: filteredContests.map((contest) => contest.durationSeconds),
        backgroundColor: "rgba(78, 115, 223, 0.7)",
        borderColor: "#4e73df",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 30,
          font: {
            size: 12,
            weight: "normal",
            family: "Arial, sans-serif",
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
            weight: "normal",
            family: "Arial, sans-serif",
          },
          beginAtZero: true,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Contest Duration Over Time",
        font: {
          size: 16,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0,0,0,0.7)",
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 12,
        },
      },
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            size: 12,
            weight: "normal",
            family: "Arial, sans-serif",
          },
        },
      },
    },
  };

  useEffect(() => {
    const chartInstance = chartRef.current.chartInstance;
    if (chartInstance) {
      chartInstance.destroy();
    }
  }, [contests]);

  const phases = Array.from(new Set(contests.map((contest) => contest.phase)));
  const types = Array.from(new Set(contests.map((contest) => contest.type)));

  return (
    <Card title="Contest Duration">
      <div className="mb-4 grid grid-cols-2 gap-3 w-full">
        <Select
          label="Select Phase"
          options={[
            { label: "All", value: "" },
            ...phases.map((phase) => ({ label: phase, value: phase })),
          ]}
          value={selectedPhase}
          onChange={handlePhaseChange}
        />

        <Select
          label="Select Type"
          options={[
            { label: "All", value: "" },
            ...types.map((type) => ({ label: type, value: type })),
          ]}
          value={selectedType}
          onChange={handleTypeChange}
        />
      </div>

      {/* Chart */}
      <Card>
        <div className="h-72 lg:h-96 w-full">
          <Bar ref={chartRef} data={data} options={options} />
        </div>
      </Card>
    </Card>
  );
};

export default ContestGraph;
