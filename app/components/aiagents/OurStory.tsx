"use client";
import { Box, Typography, Button, Container } from "@mui/material";

export default function OurStory() {
	return (
		<Box
			sx={{
				py: { xs: 6, md: 12 },
				bgcolor: "#f5f7fb",
			}}
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						alignItems: "center",
						justifyContent: "space-between",
						gap: { xs: 2, md: 3 },
					}}
				>
					{/* Left Text Section */}
					<Box sx={{ flex: { xs: "none", md: 1 } }}>
						<Typography
							variant="h2"
							fontWeight="bold"
							gutterBottom
							sx={{ color: "#0A1E3D" }}
						>
							Our Story
						</Typography>
						<Typography
							variant="body1"
							color="text.secondary"
							paragraph
							sx={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "500px" }}
						>
							At Narris, we are redefining the way the world connects through
							voice and video.
						</Typography>
						<Typography
							variant="body1"
							color="text.secondary"
							paragraph
							sx={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "500px" }}
						>
							Our AI-powered solutions — from Conversational AI Agents to AI
							Dubbing and Visual AI — are designed to help businesses, creators,
							and enterprises break barriers, scale communication, and deliver
							lifelike experiences across borders.
						</Typography>
						<Button
							variant="contained"
							sx={{
								mt: 2,
								px: 4,
								py: 1.5,
								fontWeight: "bold",
								background: "linear-gradient(90deg, #001a4d, #0b1635)",
								boxShadow: "0 4px 15px 0 rgba(0, 26, 77, 0.4)",
								"&:hover": {
									opacity: 0.9,
									background: "linear-gradient(90deg, #001a4d, #000000)",
									boxShadow: "0 6px 20px 0 rgba(0, 26, 77, 0.5)",
								},
							}}
						>
							Reach Us
						</Button>
					</Box>

					{/* Right Image Section */}
					<Box sx={{ flex: { xs: "none", md: 1 }, textAlign: "center" }}>
						<Box
							component="img"
							src="/aiagents/boy.png"
							alt="Our Story"
							sx={{
								width: "100%",
								maxWidth: "550px",
								borderRadius: 2,
								mx: "auto",
								boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
							}}
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
