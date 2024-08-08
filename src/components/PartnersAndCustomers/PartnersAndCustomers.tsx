import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./PartnersAndCustomers.module.scss";
import Bahco from "../../assets/img/bahco.png";
import Wikus from "../../assets/img/wikus.png";
import Eberle from "../../assets/img/eberle.png";
import { Typography } from "@mui/material";

import { Box, Stack } from "@mui/system";

const PartnersAndCustomers = () => {
  const parceiros = [
    { id: 1, image: Bahco, alt: "Parceiro 1" },
    { id: 2, image: Wikus, alt: "Parceiro 2" },
    { id: 3, image: Eberle, alt: "Parceiro 3" },
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
                    // width: "auto",
                    maxWidth: parceiro.id === 2 ? "100px" : "100%",

                    height: "auto",
                    maxHeight: parceiro.id === 3 ? "50px" : "125px",
                    backgroundColor: parceiro.id === 2 ? "#fff" : "transparent",
                    borderRadius: parceiro.id === 2 ? "1rem" : "",

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
