"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { ensureChartSetup } from "./ChartBase";

export function LineChart({ data, options }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    ensureChartSetup();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <div>Loading chart...</div>;
  }

  return (
    <Line
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false, // 🔑 allow parent height to control size
        plugins: {
          legend: { display: true, position: "top" },
          tooltip: { enabled: true },
        },
        ...options,
      }}
    />
  );
}

export default LineChart;
