"use client";

import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { ensureChartSetup } from "./ChartBase";

export function BarChart({ data, options }: { data: any; options?: any }) {
  useEffect(() => ensureChartSetup(), []);
  return <Bar data={data} options={options} />;
}

export default BarChart;
