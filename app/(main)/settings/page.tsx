import React from "react";
import { Typography, Card, CardContent } from "@mui/material";

export default function SettingsPage() {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Application Settings
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Settings page will be implemented in task 17.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
