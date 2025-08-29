"use client";

import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { ensureChartSetup } from "./ChartBase";

export function PieChart({ data, options }: { data: any; options?: any }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    ensureChartSetup();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <div>Loading chart...</div>;
  }

  return <Pie data={data} options={options} />;
}

export default PieChart;
