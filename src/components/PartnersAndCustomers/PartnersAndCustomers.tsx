import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./PartnersAndCustomers.module.scss";
import Eberle from "../../assets/img/eberle.png";
import Snapon from "../../assets/img/snapon.png"
import { Typography } from "@mui/material";

import { Box, Stack } from "@mui/system";

const PartnersAndCustomers = () => {
  const parceiros = [
    { id: 1, image: Eberle, alt: "Parceiro 1" },
    { id: 2, image: Snapon, alt: "Parceiro 2" },
  ];

  return (
    <Box
      display="flex"
      flex-direction="column"
      justify-content="space-around"
      padding="20px"
      sx={{
        backgroundColor: "rgb(53, 53, 53)",
        color: "white",
      }}
    >
      <Stack className={styles.partners}>
        <Typography
          variant="h2"
          color="#fff"
          padding={5}
          fontSize={{ sm: 35, md: 30, xs: 18 }}
          fontWeight={600}
          fontFamily="National 2 Condensed, Arial, sans-serif"
          flex={1}
          marginBottom={1}
          sx={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          PARCEIROS DA HIPERION
        </Typography>
        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          swipeable
          emulateTouch
        >
          {parceiros.map((parceiro) => (
            <div
              style={{ marginBottom: "4rem", width: "100%" }}
              key={parceiro.id}
              className={styles.item}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Box
                  component="img"
                  src={parceiro.image}
                  alt={parceiro.alt}
                  sx={{
                    height: "auto",
                    maxHeight: parceiro.id === 1 ? "40px" : "150px",

                    objectFit: "contain",
                  }}
                />
              </Box>
            </div>
          ))}
        </Carousel>
      </Stack>
    </Box>
  );
};

export default PartnersAndCustomers;
