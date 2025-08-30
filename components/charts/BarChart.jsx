"use client";

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { ensureChartSetup } from "./ChartBase";

export function BarChart({ data, options }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    ensureChartSetup();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <div>Loading chart...</div>;
  }

  return (
    <Bar
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false, // 🔑 allow parent to control size
        plugins: {
          legend: { display: true, position: "top" },
          tooltip: { enabled: true },
        },
        ...options,
      }}
    />
  );
}

export default BarChart;
