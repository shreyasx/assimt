import React from "react";
import { Typography, Card, CardContent } from "@mui/material";

export default function ChatPage() {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Chat
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Chat Interface
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Chat interface will be implemented in tasks 15-16.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
