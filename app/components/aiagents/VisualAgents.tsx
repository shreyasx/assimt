'use client'
import { Box, Typography, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const agents = [
  {
    name: "DS ETH",
    role: "For Operations",
    eth: "39k",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
  },
  {
    name: "Anna",
    role: "For Operations",
    eth: "2.45 ETH",
    likes: "46k",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    name: "Alex",
    role: "For Banking & Finance queries",
    eth: "2.45 ETH",
    likes: "50k",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
  },
  {
    name: "Amber",
    role: "For Customer support",
    eth: "2.3 ETH",
    likes: "47k",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop",
  },
  {
    name: "Pastel",
    role: "For Your Estate",
    eth: "23 ETH",
    likes: "47k",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=500&fit=crop",
  },
    {
    name: "Amber",
    role: "For Customer support",
    eth: "2.3 ETH",
    likes: "47k",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop",
  },
  {
    name: "Pastel",
    role: "For Your Estate",
    eth: "23 ETH",
    likes: "47k",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=500&fit=crop",
  },
];

export default function VisualAgents() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 cards as per screenshot
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px", // No padding since we want exact 5 cards
    focusOnSelect: true,
    arrows: false,
    draggable: true,
    swipe: true,
    touchMove: true,
    swipeToSlide: true,
    initialSlide: 2, // Start with Alex in center
    responsive: [
      { 
        breakpoint: 1280, 
        settings: { 
          slidesToShow: 3,
          centerMode: true,
        } 
      },
      { 
        breakpoint: 960, 
        settings: { 
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "100px",
        } 
      },
      { 
        breakpoint: 600, 
        settings: { 
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "50px",
        } 
      },
    ],
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0c0c2e 0%, #1a1a4a 50%, #252561 100%)",
        py: 8,
        px: 4,
        textAlign: "center",
        color: "white",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Custom CSS for slick carousel */}
      <style>{`
        .slick-slide {
          transition: transform 0.4s ease, opacity 0.4s ease;
          opacity: 0.7;
        }
        .slick-center {
          transform: scale(1.15);
          opacity: 1;
          z-index: 2;
        }
        .slick-list {
          padding: 60px 0 !important;
          margin: 0 -10px;
        }
        .slick-track {
          display: flex;
          align-items: center;
          padding: 20px 0;
        }
        .agent-card {
          transition: all 0.4s ease;
          border-radius: 20px;
          overflow: hidden;
          margin: 0 10px;
        }
        .slick-center .agent-card {
          box-shadow: 0 25px 60px rgba(90, 90, 255, 0.4);
        }
      `}</style>

      {/* Badge */}
      <Box
        sx={{
          display: "inline-block",
          bgcolor: "rgba(255, 255, 255, 0.1)",
          color: "white",
          px: 3,
          py: 1,
          borderRadius: "20px",
          fontSize: "14px",
          fontWeight: "bold",
          mb: 3,
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        1024.5 × 576
      </Box>

      {/* Section Title */}
      <Typography 
        variant="h2" 
        fontWeight="bold" 
        gutterBottom
        sx={{
          fontSize: { xs: "2rem", md: "3.5rem" },
          mb: 2,
          background: "linear-gradient(45deg, #fff 30%, #a0a0ff 90%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "0 0 30px rgba(160, 160, 255, 0.4)",
        }}
      >
        Visual AI Agents
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          mb: 8, 
          opacity: 0.8,
          fontSize: { xs: "1rem", md: "1.25rem" },
          color: "#e0e0ff",
          fontWeight: 300,
        }}
      >
        Meet our Online 24/7 Live Agents for Audience Engagement.
      </Typography>

      {/* Carousel */}
      <Container maxWidth="lg" sx={{ 
        pb: 8,
        cursor: "grab",
        "&:active": {
          cursor: "grabbing",
        }
      }}>
        <Slider {...settings}>
          {agents.map((agent, idx) => (
            <Box key={idx} sx={{ 
              py: 4,
              position: "relative",
            }}>
              <Box
                className="agent-card"
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: "all 0.4s ease",
                  background: "linear-gradient(145deg, #1e1e4a, #2a2a6e)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  height: { 
                    xs: "320px",
                    md: idx === 2 ? "500px" : "380px" // Center card (Alex) is taller
                  },
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 40px rgba(90, 90, 255, 0.3)",
                  },
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={agent.img}
                  alt={agent.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.85) contrast(1.1)",
                  }}
                />

                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to top, rgba(12, 12, 46, 0.95) 0%, rgba(26, 26, 74, 0.7) 50%, transparent 100%)",
                    color: "#fff",
                    p: 3,
                    pt: 6,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Box textAlign="left" sx={{ flex: 1 }}>
                    <Typography 
                      variant="h6" 
                      fontWeight="bold"
                      sx={{ 
                        mb: 0.5,
                        fontSize: agent.name === "Alex" ? "1.3rem" : "1.1rem",
                        color: "#fff",
                        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                      }}
                    >
                      {agent.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        opacity: 0.9,
                        fontSize: agent.name === "Alex" ? "0.95rem" : "0.85rem",
                        color: "#e0e0ff",
                        textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                      }}
                    >
                      {agent.role}
                    </Typography>
                  </Box>
                  <Box textAlign="right" sx={{ flexShrink: 0 }}>
                    <Typography 
                      variant="body1" 
                      fontWeight="bold"
                      sx={{
                        fontSize: agent.name === "Alex" ? "1.1rem" : "0.9rem",
                        color: "#a0a0ff",
                        textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                      }}
                    >
                      {agent.eth}
                    </Typography>
                    {agent.likes && (
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          opacity: 0.9,
                          fontSize: agent.name === "Alex" ? "0.9rem" : "0.8rem",
                          color: "#c0c0ff",
                          textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                        }}
                      >
                        {agent.likes}
                      </Typography>
                    )}
                  </Box>
                </Box>

                {/* "Meet Alex" badge - only for Alex card */}
                {agent.name === "Alex" && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      background: "linear-gradient(45deg, #ff6b6b, #ff8e8e)",
                      color: "white",
                      px: 2.5,
                      py: 1,
                      borderRadius: "15px",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      boxShadow: "0 6px 20px rgba(255, 107, 107, 0.5)",
                      zIndex: 3,
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Meet Alex
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>

      {/* Scroll instructions */}
      <Typography 
        variant="body2" 
        sx={{ 
          mt: 2,
          opacity: 0.6,
          color: "#a0a0ff",
          fontSize: "0.9rem",
          fontWeight: 300,
        }}
      >
        Drag horizontally to scroll through agents
      </Typography>
    </Box>
  );
}
