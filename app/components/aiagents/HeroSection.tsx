'use client'
/** @jsxImportSource @emotion/react */
import { Box, Typography, Container } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#0b1635",
        color: "#fff",
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 8, md: 16 },
        backgroundImage: "url('/aiagents/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        overflow: "hidden",
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left Content */}
        <Box sx={{ flex: 1, maxWidth: { md: "55%" } }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Scalable AI Agents that Speak in Your Brand’s Voice
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.8 }}>
            From Service to Sales — Smarter Conversations with AI Agents. 
            Scalable AI Agents that Speak in Your Brand’s Voice
          </Typography>
        </Box>
      </Container>

      {/* Right Foreground Image */}
      <Box
        component="img"
        src="/aiagents/aigirl.png"
        alt="AI Agent"
        sx={{
          position: "absolute",
          bottom: 0,
          right: { xs: "50%", md: "5%" }, // center for mobile, right for desktop
          transform: { xs: "translateX(50%)", md: "none" },
          height: { xs: "65vh", md: "90vh" }, // taller image
          zIndex: 2,
        }}
      />

      {/* Optional dark overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(11,22,53,0.6)",
          zIndex: 1,
        }}
      />
    </Box>
  );
}
