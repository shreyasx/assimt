"use client";
import { Box, Typography, Container } from "@mui/material";

export default function Integrations() {
	return (
		<Box
			sx={{
				position: "relative",
				bgcolor: "#e8f1f8",
				minHeight: { xs: "auto", md: "100vh" },
				display: "flex",
				alignItems: "center",
				py: { xs: 8, md: 12 },
			}}
		>
			<Container
				maxWidth="lg"
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					alignItems: "center",
					gap: 0,
				}}
			>
				{/* Left Content - Text */}
				<Box
					sx={{
						flex: 1,
						px: { xs: 4, md: 8 },
						py: { xs: 6, md: 0 },
						display: "flex",
						flexDirection: "column",
						gap: 3,
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
							fontWeight: 400,
							color: "#555",
							letterSpacing: "0.05em",
							mb: 1,
						}}
					>
						Integrations
					</Typography>

					<Typography
						variant="h2"
						sx={{
							fontWeight: 700,
							fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
							color: "#1a1a1a",
							lineHeight: 1.2,
							mb: 2,
						}}
					>
						Seamless Integrations, Smarter Workflows
					</Typography>

					<Typography
						sx={{
							fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
							color: "#333",
							lineHeight: 1.8,
							maxWidth: "600px",
						}}
					>
						Connect Narris with your favorite tools and platforms — from Meta
						and Canva to Google Meet and beyond. Effortlessly evolve your
						workflows with powerful AI video integrations designed to fit right
						into the tools you already use.
					</Typography>
				</Box>

				{/* Right Content - Background Image with all icons */}
				<Box
					sx={{
						flex: 1,
						position: "relative",
						minHeight: { xs: "500px", md: "600px" },
						width: "100%",
						backgroundImage: "url('/aiagents/integrations.jpg')",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
			</Container>
		</Box>
	);
}
