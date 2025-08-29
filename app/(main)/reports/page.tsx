import React from "react";
import { Typography, Card, CardContent } from "@mui/material";

export default function ReportsPage() {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Reports
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Analytics & Charts
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Charts and analytics will be implemented in tasks 12-14.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
