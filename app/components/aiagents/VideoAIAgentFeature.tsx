"use client";
import { Box, Typography, Container } from "@mui/material";

export default function VideoAIAgentFeature() {
	return (
		<Box
			sx={{
				bgcolor: "#e8eef5",
				py: { xs: 8, md: 12 },
				px: { xs: 3, sm: 4 },
			}}
		>
			<Container maxWidth="xl">
				{/* Main Title */}
				<Typography
					variant="h2"
					fontWeight="bold"
					textAlign="center"
					sx={{
						fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
						mb: { xs: 6, md: 10 },
						color: "#0b1635",
						textTransform: "uppercase",
						letterSpacing: "0.05em",
					}}
				>
					EXPLORE OUR VIDEO AI AGENT FEATURE
				</Typography>

				{/* Two Column Layout */}
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
						gap: { xs: 6, md: 8, lg: 12 },
						alignItems: "center",
						maxWidth: "1400px",
						mx: "auto",
					}}
				>
					{/* Left Column - Text Content */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 3,
							pr: { md: 4 },
						}}
					>
						<Typography
							variant="h3"
							sx={{
								fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
								fontWeight: 600,
								color: "#0b1635",
								mb: 1,
							}}
						>
							Visual AI Agents by Narris - NOVA
						</Typography>

						<Typography
							variant="h6"
							sx={{
								fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
								color: "#4a5568",
								fontWeight: 400,
								mb: 2,
							}}
						>
							Redefining how brands connect in the digital age.
						</Typography>

						<Typography
							sx={{
								fontSize: { xs: "0.95rem", sm: "1rem", md: "1.125rem" },
								color: "#2d3748",
								mb: 3,
								lineHeight: 1.8,
							}}
						>
							With Narris, craft lifelike conversational AI agents that don't
							just respond—they understand.
						</Typography>

						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: 1.5,
								pl: 2,
							}}
						>
							<Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
								<Typography sx={{ color: "#f59e0b", fontSize: "1.25rem" }}>
									✨
								</Typography>
								<Typography
									sx={{
										fontSize: { xs: "0.95rem", sm: "1rem", md: "1.125rem" },
										color: "#2d3748",
										lineHeight: 1.7,
									}}
								>
									They know your products and services inside out.
								</Typography>
							</Box>

							<Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
								<Typography sx={{ color: "#f59e0b", fontSize: "1.25rem" }}>
									✨
								</Typography>
								<Typography
									sx={{
										fontSize: { xs: "0.95rem", sm: "1rem", md: "1.125rem" },
										color: "#2d3748",
										lineHeight: 1.7,
									}}
								>
									They reflect your brand's look, voice, and tone.
								</Typography>
							</Box>

							<Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
								<Typography sx={{ color: "#f59e0b", fontSize: "1.25rem" }}>
									✨
								</Typography>
								<Typography
									sx={{
										fontSize: { xs: "0.95rem", sm: "1rem", md: "1.125rem" },
										color: "#2d3748",
										lineHeight: 1.7,
									}}
								>
									They engage customers with a human-like presence, anytime,
									anywhere.
								</Typography>
							</Box>
						</Box>

						<Typography
							sx={{
								fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
								color: "#0b1635",
								fontWeight: 500,
								mt: 3,
								lineHeight: 1.6,
							}}
						>
							Your brand. Your personality. Your AI agent.
							<br />
							That's the Narris difference.
						</Typography>
					</Box>

					{/* Right Column - Browser-Framed Video */}
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{/* Browser Frame Container */}
						<Box
							sx={{
								width: "100%",
								maxWidth: "700px",
								borderRadius: "12px",
								overflow: "hidden",
								boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
								bgcolor: "#1e293b",
								border: "1px solid #334155",
								transition: "transform 0.3s ease, box-shadow 0.3s ease",
								"&:hover": {
									transform: "translateY(-8px)",
									boxShadow: "0 30px 80px rgba(0, 0, 0, 0.35)",
								},
							}}
						>
							{/* Browser Header/Top Bar */}
							<Box
								sx={{
									bgcolor: "#334155",
									px: 3,
									py: 1.5,
									display: "flex",
									alignItems: "center",
									gap: 1.5,
									borderBottom: "1px solid #475569",
								}}
							>
								{/* Browser Dots */}
								<Box sx={{ display: "flex", gap: 1 }}>
									<Box
										sx={{
											width: "12px",
											height: "12px",
											borderRadius: "50%",
											bgcolor: "#ef4444",
										}}
									/>
									<Box
										sx={{
											width: "12px",
											height: "12px",
											borderRadius: "50%",
											bgcolor: "#f59e0b",
										}}
									/>
									<Box
										sx={{
											width: "12px",
											height: "12px",
											borderRadius: "50%",
											bgcolor: "#10b981",
										}}
									/>
								</Box>

								{/* Address Bar */}
								<Box
									sx={{
										flex: 1,
										bgcolor: "#1e293b",
										borderRadius: "6px",
										px: 2,
										py: 0.5,
										display: "flex",
										alignItems: "center",
										gap: 1,
									}}
								>
									<Typography
										sx={{
											fontSize: "0.75rem",
											color: "#94a3b8",
											fontFamily: "monospace",
										}}
									>
										🔒
									</Typography>
									<Typography
										sx={{
											fontSize: "0.75rem",
											color: "#cbd5e1",
											fontFamily: "monospace",
										}}
									>
										narris.ai/demo
									</Typography>
								</Box>

								{/* Browser Icons */}
								<Box sx={{ display: "flex", gap: 1 }}>
									<Typography sx={{ fontSize: "0.875rem", color: "#94a3b8" }}>
										⋯
									</Typography>
								</Box>
							</Box>

							{/* Video Container */}
							<Box
								sx={{
									position: "relative",
									width: "100%",
									aspectRatio: "16/9",
									bgcolor: "#000",
								}}
							>
								<Box
									component="video"
									autoPlay
									muted
									loop
									playsInline
									controls
									sx={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										display: "block",
									}}
								>
									<source src="/aiagents/video2.mp4" type="video/mp4" />
									Your browser does not support the video tag.
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
