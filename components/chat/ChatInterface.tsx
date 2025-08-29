"use client";

import React from "react";
import { Box, Paper } from "@mui/material";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { type Message } from "@/types";

export function ChatInterface() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      content: "Hello! How can I help you today?",
      sender: { id: "bot", name: "Support" },
      timestamp: new Date(),
      type: "text",
    },
  ]);

  const sendMessage = (content: string) => {
    const mine: Message = {
      id: crypto.randomUUID(),
      content,
      sender: { id: "me", name: "You" },
      timestamp: new Date(),
      type: "text",
    };
    setMessages(prev => [...prev, mine]);

    // Simulated reply
    setTimeout(() => {
      const reply: Message = {
        id: crypto.randomUUID(),
        content: `You said: "${content}"`,
        sender: { id: "bot", name: "Support" },
        timestamp: new Date(),
        type: "text",
      };
      setMessages(prev => [...prev, reply]);
    }, 600);
  };

  return (
    <Paper sx={{ display: "flex", flexDirection: "column", height: 500 }}>
      <Box sx={{ flex: 1, minHeight: 0 }}>
        <MessageList messages={messages} />
      </Box>
      <Box sx={{ p: 1 }}>
        <MessageInput onSend={sendMessage} />
      </Box>
    </Paper>
  );
}

export default ChatInterface;
