"use client";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const promiseCards = [
	{
		title: "Security",
		icon: SecurityIcon,
		description:
			"We safeguard your trust with enterprise-grade security, industry certifications, and cutting-edge protection technologies to keep your data safe at every step.",
	},
	{
		title: "Privacy",
		icon: VisibilityOffIcon,
		description:
			"Your privacy is our priority. We follow the strictest compliance standards and use advanced safeguards to ensure your data remains secure and confidential.",
	},
	{
		title: "Ethics",
		icon: HandshakeIcon,
		description:
			"Our AI is built with responsibility at its core. We collaborate with customers to ensure positive impact and embed ethical use principles into our practices and policies.",
	},
	{
		title: "Support",
		icon: SupportAgentIcon,
		description:
			"Day or night, our expert support team is here for you. From API guidance to studio onboarding, we provide responsive help to make integration smooth and effortless.",
	},
];

export default function OurPromise() {
	return (
		<Box
			sx={{
				background:
					"linear-gradient(135deg, #0a1628 0%, #1a2844 50%, #0f1b36 100%)",
				py: { xs: 8, md: 12 },
				px: { xs: 2, md: 4 },
			}}
		>
			<Container maxWidth="lg">
				{/* Header */}
				<Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
					<Typography
						variant="h2"
						sx={{
							fontWeight: 600,
							fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
							color: "#ffffff",
							mb: 2,
							letterSpacing: "0.02em",
						}}
					>
						Our Promise
					</Typography>
					<Typography
						variant="h6"
						sx={{
							fontWeight: 400,
							fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
							color: "#ffffff",
							opacity: 0.9,
						}}
					>
						Strong Values. Strong Technology. Stronger Connections.
					</Typography>
				</Box>

				{/* Cards Row using flex for simpler responsive control */}
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						gap: { xs: 2.5, md: 3 },
						justifyContent: "center",
					}}
				>
					{promiseCards.map((card, index) => {
						const IconComponent = card.icon;
						return (
							<Box
								key={index}
								sx={{
									flex: "1 1 260px",
									maxWidth: { md: 280 },
									display: "flex",
									justifyContent: "center",
								}}
							>
								<Card
									sx={{
										height: "100%",
										width: "100%",
										maxWidth: 280,
										bgcolor: "#ffffff",
										borderRadius: "8px",
										boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
										transition: "transform 0.3s ease, box-shadow 0.3s ease",
										"&:hover": {
											transform: "translateY(-8px)",
											boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
										},
									}}
								>
									<CardContent
										sx={{
											p: { xs: 3, md: 3.5 },
											height: "100%",
											display: "flex",
											flexDirection: "column",
										}}
									>
										{/* Icon */}
										<Box
											sx={{
												mb: 2,
												display: "flex",
												alignItems: "center",
											}}
										>
											<IconComponent
												sx={{
													fontSize: { xs: 35, md: 40 },
													color: "#000",
													mr: 1.5,
												}}
											/>
											<Typography
												variant="h5"
												sx={{
													fontWeight: 700,
													fontSize: { xs: "1.5rem", md: "1.75rem" },
													color: "#ff6b35",
												}}
											>
												{card.title}
											</Typography>
										</Box>

										{/* Description */}
										<Typography
											variant="body1"
											sx={{
												fontSize: { xs: "0.95rem", md: "1rem" },
												lineHeight: 1.7,
												color: "#000000",
											}}
										>
											{card.description}
										</Typography>
									</CardContent>
								</Card>
							</Box>
						);
					})}
				</Box>
			</Container>
		</Box>
	);
}
