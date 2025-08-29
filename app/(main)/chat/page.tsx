import React from "react";
// Removed unused imports
import { PageHeader, PageContainer, SectionCard } from "@/components/ui";
import ChatInterface from "@/components/chat/ChatInterface";

export default function ChatPage() {
  return (
    <PageContainer>
      <PageHeader title="Chat" subtitle="Converse with your assistant" />
      <SectionCard>
        <ChatInterface />
      </SectionCard>
    </PageContainer>
  );
}
