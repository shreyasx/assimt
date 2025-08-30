"use client";
/** @jsxImportSource @emotion/react */
import { Box, Typography, Container } from "@mui/material";

export default function EngagingAvatars() {
	const flags = [
		{ src: "/flags/flag-1.png", width: 128.2, height: 85.5 },
		{ src: "/flags/flag-2.png", width: 137.2, height: 86.3 },
		{ src: "/flags/flag-3.png", width: 132.7, height: 86.3 },
		{ src: "/flags/flag-4.png", width: 129, height: 86.3 },
		{ src: "/flags/flag-5.png", width: 138, height: 86.3 },
		{ src: "/flags/flag-6.png", width: 129, height: 86.3 },
		{ src: "/flags/flag-7.png", width: 132, height: 79.5 },
	];

	return (
		<Box
			sx={{
				position: "relative",
				bgcolor: "#f0f4f8",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
				alignItems: "center",
				py: { xs: 6, md: 10 },
				pb: { xs: 8, md: 12 },
				backgroundImage: "url('/aiagents/cty_bg.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center top",
				overflow: "hidden",
			}}
		>
			{/* Text Content - positioned lower on the page */}
			<Container
				maxWidth="lg"
				sx={{
					textAlign: "center",
					zIndex: 2,
					mb: { xs: 3, md: 4 },
					mt: { xs: "auto", md: "auto" },
					pt: { xs: "60vh", sm: "55vh", md: "50vh" },
				}}
			>
				<Typography
					variant="h2"
					sx={{
						fontWeight: 800,
						fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
						color: "#1a2332",
						mb: 2,
						letterSpacing: "0.065em",
					}}
				>
					Engaging AI Avatars
				</Typography>
				<Typography
					variant="h6"
					sx={{
						fontWeight: 600,
						fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
						color: "#1a2332",
						letterSpacing: "0.15em",
						textTransform: "uppercase",
					}}
				>
					Our Conversational Agent is Available in 40+ Languages
				</Typography>
			</Container>

			{/* Flags Strip (constrained inside container) */}
			<Container
				maxWidth="lg"
				sx={{
					zIndex: 2,
					mt: { xs: 4, md: 6 },
					mb: { xs: 2, md: 4 },
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "flex-end",
						justifyContent: "center",
						gap: 0,
						flexWrap: { xs: "wrap", md: "nowrap" },
						maxWidth: "100%",
						px: { xs: 2, md: 4 },
					}}
				>
					{flags.map((flag, index) => (
						<Box
							key={index}
							sx={{
								position: "relative",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<Box
								component="img"
								src={flag.src}
								alt={`Flag ${index + 1}`}
								sx={{
									width: {
										xs: `${flag.width * 0.6}px`,
										sm: `${flag.width * 0.8}px`,
										md: `${flag.width}px`,
									},
									height: {
										xs: `${flag.height * 0.6}px`,
										sm: `${flag.height * 0.8}px`,
										md: `${flag.height}px`,
									},
									objectFit: "cover",
									display: "block",
								}}
							/>
						</Box>
					))}
				</Box>
			</Container>
		</Box>
	);
}
