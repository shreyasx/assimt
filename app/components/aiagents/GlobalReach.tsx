"use client";
import { Box, Typography, Container } from "@mui/material";

export default function GlobalReach() {
	return (
		<Box
			sx={{
				position: "relative",
				bgcolor: "#0b1635",
				color: "#fff",
				px: { xs: 3, sm: 6, md: 10 },
				py: { xs: 8, md: 16 },
				minHeight: { xs: "auto", md: "100vh" },
				overflow: "hidden",
				display: "flex",
				alignItems: "center",
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
					gap: { xs: 4, md: 8 },
				}}
			>
				{/* Left Content - Text and World Map */}
				<Box
					sx={{
						flex: 1,
						maxWidth: { xs: "100%", md: "55%" },
						display: "flex",
						flexDirection: "column",
						gap: 4,
					}}
				>
					<Typography
						variant="h2"
						fontWeight="bold"
						sx={{
							fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
							lineHeight: 1.2,
							color: "#7ec8e3",
						}}
					>
						Reaching people across the globe
					</Typography>

					{/* World Map Image */}
					<Box
						component="img"
						src="/aiagents/world.png"
						alt="World Map"
						sx={{
							width: "100%",
							maxWidth: "700px",
							height: "auto",
							my: 4,
						}}
					/>

					<Typography
						variant="h5"
						sx={{
							opacity: 0.9,
							fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
							fontWeight: 300,
						}}
					>
						We work with staff and clients from various parts of the world.
					</Typography>
				</Box>

				{/* Right Content - Video */}
				<Box
					sx={{
						flex: { xs: "none", md: 1 },
						maxWidth: { xs: "100%", md: "40%" },
						display: "flex",
						justifyContent: { xs: "center", md: "flex-end" },
						alignItems: "center",
						width: "100%",
					}}
				>
					<Box
						sx={{
							position: "relative",
							width: { xs: "100%", sm: "80%", md: "100%" },
							maxWidth: "500px",
							aspectRatio: "9/16",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{/* Video Container */}
						<Box
							component="video"
							autoPlay
							loop
							muted
							playsInline
							sx={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "20px",
								boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
							}}
						>
							<source src="/aiagents/video1.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</Box>
					</Box>
				</Box>
			</Container>

			{/* Optional dark overlay for depth */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					bgcolor: "rgba(11,22,53,0.3)",
					zIndex: 1,
				}}
			/>
		</Box>
	);
}
