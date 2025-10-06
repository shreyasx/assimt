"use client";
import { Box, Typography, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function EngagingAvatars() {
	const flags = [
		{ src: "/flags/flag-1.png", name: "Flag 1", width: 128.2, height: 85.5 },
		{ src: "/flags/flag-2.png", name: "Flag 2", width: 137.2, height: 86.3 },
		{ src: "/flags/flag-3.png", name: "Flag 3", width: 132.7, height: 86.3 },
		{ src: "/flags/flag-4.png", name: "Flag 4", width: 129, height: 86.3 },
		{ src: "/flags/flag-5.png", name: "Flag 5", width: 138, height: 86.3 },
		{ src: "/flags/flag-6.png", name: "Flag 6", width: 129, height: 86.3 },
		{ src: "/flags/flag-7.png", name: "Flag 7", width: 132, height: 79.5 },
		// Duplicate for seamless infinite scroll
		{ src: "/flags/flag-1.png", name: "Flag 1", width: 128.2, height: 85.5 },
		{ src: "/flags/flag-2.png", name: "Flag 2", width: 137.2, height: 86.3 },
		{ src: "/flags/flag-3.png", name: "Flag 3", width: 132.7, height: 86.3 },
	];

	const settings = {
		dots: false,
		infinite: true,
		speed: 600,
		slidesToShow: 7,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: "0px",
		focusOnSelect: true,
		arrows: false,
		draggable: true,
		swipe: true,
		touchMove: true,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 2500,
		cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 5,
					centerMode: true,
				},
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 3,
					centerMode: true,
					centerPadding: "40px",
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: "80px",
				},
			},
		],
	};

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
			{/* Custom CSS for flags carousel */}
			<style>{`
				.flags-carousel .slick-slide {
					transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
											opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
											filter 0.5s cubic-bezier(0.4, 0, 0.2, 1);
					opacity: 0.5;
					transform: scale(0.75) translateY(20px);
					filter: grayscale(40%) brightness(0.8);
				}
				.flags-carousel .slick-center {
					transform: scale(1.15) translateY(0) !important;
					opacity: 1 !important;
					z-index: 10 !important;
					filter: grayscale(0%) brightness(1.1) !important;
				}
				.flags-carousel .slick-list {
					padding: 60px 0 !important;
					margin: 0;
					overflow: visible !important;
				}
				.flags-carousel .slick-track {
					display: flex !important;
					align-items: center !important;
				}
				.flags-carousel .slick-slide > div {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.flag-container {
					transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
					transform-origin: center center;
					cursor: grab;
				}
				.flag-container:active {
					cursor: grabbing;
				}
				.flags-carousel .slick-center .flag-container {
					filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
				}
			`}</style>

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

			{/* Flags Carousel */}
			<Container
				maxWidth="lg"
				sx={{
					zIndex: 2,
					mt: { xs: 4, md: 6 },
					mb: { xs: 2, md: 4 },
				}}
			>
				<Box className="flags-carousel">
					<Slider {...settings}>
						{flags.map((flag, index) => (
							<Box
								key={index}
								sx={{
									px: 1,
									display: "flex !important",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Box
									className="flag-container"
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										p: 2,
									}}
								>
									<Box
										component="img"
										src={flag.src}
										alt={flag.name}
										sx={{
											width: {
												xs: "80px",
												sm: "100px",
												md: "130px",
											},
											height: "auto",
											objectFit: "contain",
											display: "block",
											borderRadius: "8px",
											transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
										}}
									/>
								</Box>
							</Box>
						))}
					</Slider>
				</Box>

				{/* Scroll instructions */}
				<Typography
					variant="body2"
					sx={{
						mt: 4,
						textAlign: "center",
						opacity: 0.7,
						color: "#1a2332",
						fontSize: "0.9rem",
						fontWeight: 400,
					}}
				>
					Drag to explore languages • Auto-plays every 2.5 seconds
				</Typography>
			</Container>
		</Box>
	);
}
