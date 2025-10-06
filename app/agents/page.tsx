"use client";
import { Box } from "@mui/material";
import HeroSection from "@/app/components/aiagents/HeroSection";
import OurStory from "@/app/components/aiagents/OurStory";
import VisualAgents from "@/app/components/aiagents/VisualAgents";
import VideoAIAgentFeature from "@/app/components/aiagents/VideoAIAgentFeature";
import GlobalReach from "@/app/components/aiagents/GlobalReach";
import EngagingAvatars from "@/app/components/aiagents/EngagingAvatars";
import Integrations from "@/app/components/aiagents/Integrations";
import OurPromise from "@/app/components/aiagents/OurPromise";
import CustomerTestimonials from "@/app/components/aiagents/CustomerTestimonials";

export default function AiAgents() {
	return (
		<Box sx={{ bgcolor: "#fff", overflowX: "hidden" }}>
			<HeroSection />
			<OurStory />
			<VisualAgents />
			<VideoAIAgentFeature />
			<GlobalReach />
			<EngagingAvatars />
			<Integrations />
			<OurPromise />
			<CustomerTestimonials />
		</Box>
	);
}
