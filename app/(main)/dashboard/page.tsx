import React from "react";
import { Typography, Card, CardContent, Grid } from "@mui/material";

export default function DashboardPage() {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome, John!
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Dashboard Overview
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is the main dashboard page. Statistics cards, user table,
                and other components will be implemented in subsequent tasks.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
