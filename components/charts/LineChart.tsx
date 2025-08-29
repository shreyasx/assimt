"use client";

import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { ensureChartSetup } from "./ChartBase";

export function LineChart({ data, options }: { data: any; options?: any }) {
  useEffect(() => ensureChartSetup(), []);
  return <Line data={data} options={options} />;
}

export default LineChart;
