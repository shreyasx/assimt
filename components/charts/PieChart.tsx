"use client";

import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { ensureChartSetup } from "./ChartBase";

export function PieChart({ data, options }: { data: any; options?: any }) {
  useEffect(() => ensureChartSetup(), []);
  return <Pie data={data} options={options} />;
}

export default PieChart;
