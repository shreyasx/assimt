"use client";

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { ensureChartSetup } from "./ChartBase";
import type { ChartData, ChartOptions } from "chart.js";

type BarChartData = ChartData<"bar">;
type BarChartOptions = ChartOptions<"bar">;

export function BarChart({
  data,
  options,
}: {
  data: BarChartData;
  options?: BarChartOptions;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    ensureChartSetup();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <div>Loading chart...</div>;
  }

  return <Bar data={data} options={options} />;
}

export default BarChart;
