"use client";

import React from "react";
import {
  Typography,
  Box,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import { LineChart } from "@/components/charts/LineChart";
import { BarChart } from "@/components/charts/BarChart";

function generateSeries(length: number, factor = 1) {
  return Array.from({ length }, (_, i) =>
    Math.round((Math.sin(i / 2) + 1) * 50 * factor)
  );
}

export default function ReportsPage() {
  const [tab, setTab] = React.useState(0);
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");

  const labels = Array.from({ length: 12 }, (_, i) => `M${i + 1}`);
  const lineData = {
    labels,
    datasets: [
      {
        label: "Users",
        data: generateSeries(12),
        borderColor: "#1976d2",
        backgroundColor: "#1976d2",
      },
    ],
  };
  const barData = {
    labels,
    datasets: [
      {
        label: "Orders",
        data: generateSeries(12, 1.2),
        backgroundColor: "rgba(220,0,78,0.6)",
      },
    ],
  };

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Reports
      </Typography>

      <Box mb={2} display="flex" gap={2} alignItems="center" flexWrap="wrap">
        <TextField
          type="date"
          label="From"
          value={from}
          onChange={e => setFrom(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          type="date"
          label="To"
          value={to}
          onChange={e => setTo(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </Box>

      <Tabs
        value={tab}
        onChange={(_e, v) => setTab(v)}
        sx={{ mb: 2 }}
        aria-label="Report view tabs"
      >
        <Tab label="Daily" />
        <Tab label="Weekly" />
        <Tab label="Monthly" />
      </Tabs>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Trend (Line)
              </Typography>
              <LineChart data={lineData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Trend (Bar)
              </Typography>
              <BarChart data={barData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
