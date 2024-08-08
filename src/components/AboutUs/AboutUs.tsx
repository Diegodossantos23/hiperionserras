import { Box, Typography, CardMedia } from "@mui/material";
import { Stack } from "@mui/system";
import HiperionOffice1 from "../../assets/img/hiperion.jpeg";

const AboutUs = () => {

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      gap={5}
      marginBottom={{ xs: 15, md: 4 }}
      width="100%"
      height={{ xs: "100%", md: "80vh" }}
    >
      <Stack
        component="div"
        display="flex"
        flexDirection="column"
        justifyContent={{ sm: "flex-start", md: "flex-start", xs: "center" }}
        alignItems={{ sm: "center", md: "flex-start", xs: "center" }}
        paddingLeft={{ xs: "1rem", sm: "2rem", md: "2rem" }}
        marginBottom={{ xs: "0rem", md: "0" }}
        width={{ xs: "90%", sm: "60%", md: "40%" }}
      >
        <Typography
          variant="h2"
          color="#F2BF27"
          textAlign={{ xs: "center", md: "left" }}
          fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem", xl: "3.5rem" }}
          fontFamily="National 2 Condensed, Arial, sans-serif"
          fontWeight={700}
          marginBottom={{ sm: 5, md: 4, xs: 3 }}
        >
          Sobre a Hiperion Serras
        </Typography>
        <Typography
          variant="body1"
          fontFamily="National 2 Condensed, Arial, sans-serif"
          fontSize={{ xs: "0.8rem", sm: "1.25rem", md: "1.2rem", xl: "2rem" }}
          color="#696969"
          textAlign={{ xs: "center", md: "left" }}
          marginBottom={{ xs: 3 }}
        >
          Contamos com um time técnico com mais de 15 anos de experiência no
          segmento, capacitado para acompanhar cada processo e implementar os
          produtos em linha, para entregar solução adequada de acordo com a
          particularidade de cada necessidade.
        </Typography>
      </Stack>
      <CardMedia
        component="img"
        image={HiperionOffice1}
        alt="Sobre Nós"
        sx={{
          width: { xs: "90%", sm: "80%", md: "40%", xl: "60" },
          maxWidth: "100%",
          height: "auto",
          margin: { xs: "1rem 0", md: "0" },
          borderRadius: "2rem",
        }}
      />
    </Box>
  );
};

export default AboutUs;
