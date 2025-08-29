import React from "react";
import { Typography, Box } from "@mui/material";
import ChatInterface from "@/components/chat/ChatInterface";

export default function ChatPage() {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Chat
      </Typography>
      <Box>
        <ChatInterface />
      </Box>
    </div>
  );
}
