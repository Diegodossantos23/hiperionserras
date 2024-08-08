import React from "react";
import { Box,  Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTheme, Theme } from "@mui/material/styles";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedTypography = styled(Typography)`
  animation: ${fadeInAnimation} 1s ease-out;
`;

const CarouselContent = [
  {
    title: "CORTE COM QUEM ENTENDE DE SERRA",
    description:
      "Cortando com precisão e eficiência, com as melhores serras do mercado.",
  },
  {
    title: "SERRAS CIRCULARES",
    description: "HSS, METAL DURO, CERMET e SEGMENTADA",
  },
  {
    title: "SERRA FITA",
    description: "M42, M42 PREMIUM, M51, METAL DURO",
  },
];

const Hero = () => {
  const theme = useTheme<Theme>();
  console.log(
    `A resolução da tela é ${window.screen.width}x${window.screen.height}`
  );

  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      height={{ xs: "100vh", md: "60vh" }}
    >
      <video
        autoPlay
        loop
        muted
        style={theme.customStyles.hero.video as React.CSSProperties}
        controls={false}
      >
        <source
          src="https://vid.cdn-website.com/9235761d/videos/ZksMSZELQySGrxBM2yyh_Design+sem+nome-v.mp4"
          type="video/mp4"
        />
        Seu navegador não suporta a tag de vídeo.
      </video>

      <Box sx={theme.customStyles.hero.carouselText}>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          interval={5000}
        >
          {CarouselContent.map((content, index) => (
            <div key={index}>
              <AnimatedTypography
                variant="h2"
                marginTop={10}
                fontSize={{ xs: 16, sm: 36, md: 30, lg: 40, xl: 40 }}
                fontWeight={600}
                fontFamily="National 2 Condensed, Arial, sans-serif"
                sx={{
                  marginBottom: "1rem",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                {content.title}
              </AnimatedTypography>
              <AnimatedTypography
                variant="body1"
                fontSize={{ xs: 10, sm: 16, md: 15, xl: 25 }}
                fontFamily="National 2 Condensed, Arial, sans-serif"
                sx={{
                  marginBottom: "2rem",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                }}
              >
                {content.description}
              </AnimatedTypography>
            </div>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Hero;
