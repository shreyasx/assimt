"use client";
import { Box, Typography, Container, Button, Avatar } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
	{
		name: "Mehwish",
		text: "Compliment interested discretion estimating on stimulated apartments oh.",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
		position: { top: "0%", right: "0%" },
	},
	{
		name: "Elizabeth Jeff",
		text: "Dear so sing when in find read of call. As distrusts behaviour abilities defective is.",
		image:
			"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
		position: { top: "50%", left: "10%", transform: "translateY(-50%)" },
		highlight: true,
	},
	{
		name: "Emily Thomas",
		text: "Never at water me might. On formed merits hunted unable merely by mr whence or.",
		image:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
		position: { bottom: "0%", right: "5%" },
	},
];

export default function CustomerTestimonials() {
	return (
		<Box
			sx={{
				bgcolor: "#f8f9fa",
				py: { xs: 8, md: 12 },
				px: { xs: 2, md: 4 },
				position: "relative",
				overflow: "hidden",
			}}
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						alignItems: "center",
						gap: { xs: 6, md: 8 },
						position: "relative",
					}}
				>
					{/* Left Content */}
					<Box
						sx={{
							flex: 1,
							maxWidth: { md: "45%" },
							zIndex: 2,
						}}
					>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 400,
								fontSize: { xs: "1.1rem", md: "1.3rem" },
								color: "#666",
								mb: 1,
							}}
						>
							What Our
						</Typography>
						<Typography
							variant="h2"
							sx={{
								fontWeight: 700,
								fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
								color: "#000",
								mb: 3,
								lineHeight: 1.2,
							}}
						>
							Customers Says
						</Typography>
						<Typography
							variant="body1"
							sx={{
								fontSize: { xs: "1rem", md: "1.1rem" },
								lineHeight: 1.8,
								color: "#555",
								mb: 4,
								maxWidth: "480px",
							}}
						>
							From seamless integrations to transformative results, discover how
							Narris is helping businesses and individuals alike.
						</Typography>
						<Button
							variant="contained"
							sx={{
								background:
									"linear-gradient(90deg, #a855f7 0%, #ec4899 50%, #ef4444 100%)",
								color: "#fff",
								px: 4,
								py: 1.5,
								fontSize: "1rem",
								fontWeight: 600,
								borderRadius: "8px",
								textTransform: "none",
								boxShadow: "0 8px 20px rgba(168, 85, 247, 0.3)",
								"&:hover": {
									background:
										"linear-gradient(90deg, #9333ea 0%, #db2777 50%, #dc2626 100%)",
									boxShadow: "0 12px 28px rgba(168, 85, 247, 0.4)",
								},
							}}
						>
							View More
						</Button>
					</Box>

					{/* Right Content - Testimonials */}
					<Box
						sx={{
							flex: 1,
							position: "relative",
							minHeight: { xs: 400, md: 600, lg: 650 },
							width: "100%",
							display: { xs: "none", md: "block" },
						}}
					>
						{testimonials.map((testimonial, index) => (
							<Box
								key={index}
								sx={{
									position: "absolute",
									...testimonial.position,
									width: { md: "260px", lg: "290px" },
									bgcolor: "#fff",
									borderRadius: "12px",
									boxShadow: testimonial.highlight
										? "0 15px 40px rgba(0, 0, 0, 0.15)"
										: "0 8px 25px rgba(0, 0, 0, 0.08)",
									p: 2.5,
									border: testimonial.highlight
										? "2px solid #e0e0e0"
										: "1px solid #f0f0f0",
									transition: "transform 0.3s ease, box-shadow 0.3s ease",
									"&:hover": {
										transform: "translateY(-8px)",
										boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
									},
								}}
							>
								{/* Profile Section */}
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										mb: 1.5,
									}}
								>
									<Avatar
										src={testimonial.image}
										alt={testimonial.name}
										sx={{
											width: 50,
											height: 50,
											mr: 1.5,
											border: "2px solid #f0f0f0",
										}}
									/>
									<Typography
										variant="h6"
										sx={{
											fontWeight: 600,
											fontSize: "1rem",
											color: "#000",
										}}
									>
										{testimonial.name}
									</Typography>
								</Box>

								{/* Testimonial Text */}
								<Box sx={{ position: "relative" }}>
									<FormatQuoteIcon
										sx={{
											position: "absolute",
											top: -8,
											right: 0,
											fontSize: 35,
											color: "#e0e0e0",
											transform: "rotate(180deg)",
										}}
									/>
									<Typography
										variant="body2"
										sx={{
											fontSize: "0.875rem",
											lineHeight: 1.55,
											color: "#999",
											pr: 2,
										}}
									>
										{testimonial.text}
									</Typography>
								</Box>
							</Box>
						))}

						{/* Decorative accent line */}
						<Box
							sx={{
								position: "absolute",
								left: "-10%",
								top: "40%",
								width: "80px",
								height: "4px",
								background: "linear-gradient(90deg, #a855f7, #ec4899)",
								borderRadius: "2px",
							}}
						/>
					</Box>

					{/* Mobile Testimonials - Simple Stack */}
					<Box
						sx={{
							display: { xs: "flex", md: "none" },
							flexDirection: "column",
							gap: 3,
							width: "100%",
						}}
					>
						{testimonials.map((testimonial, index) => (
							<Box
								key={index}
								sx={{
									bgcolor: "#fff",
									borderRadius: "12px",
									boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
									p: 3,
									border: "1px solid #f0f0f0",
								}}
							>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										mb: 2,
									}}
								>
									<Avatar
										src={testimonial.image}
										alt={testimonial.name}
										sx={{
											width: 50,
											height: 50,
											mr: 2,
											border: "3px solid #f0f0f0",
										}}
									/>
									<Typography
										variant="h6"
										sx={{
											fontWeight: 600,
											fontSize: "1rem",
											color: "#000",
										}}
									>
										{testimonial.name}
									</Typography>
								</Box>
								<Typography
									variant="body2"
									sx={{
										fontSize: "0.9rem",
										lineHeight: 1.6,
										color: "#999",
									}}
								>
									{testimonial.text}
								</Typography>
							</Box>
						))}
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
