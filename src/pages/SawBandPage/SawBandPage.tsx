import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Link as MuiLink, Breadcrumbs } from "@mui/material";

import ServiceImage from "../../assets/img/background-top.jpg";
import SawBandList from "src/components/SawBandList/SawBandList";

const SawBandPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        background: "#fff",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${ServiceImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            marginTop: { xs: 13 },
            fontSize: { xs: 25, md: 40 },
            padding: { xs: 3 },
            fontFamily: "National 2 Condensed, Arial, sans-serif",
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Lâminas de Serra Fita
        </Typography>
        <Breadcrumbs aria-label="breadcrumb" style={{ color: "#fff" }}>
          <MuiLink
            component={RouterLink}
            to="/"
            fontSize={{ xs: 11.5, md: 20, lg: 20, xl: 22 }}
            style={{
              color: "#fff",
              textDecoration: "none",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Hiperion Serras
          </MuiLink>
          <MuiLink
            component={RouterLink}
            fontSize={{ xs: 11.5, md: 20, lg: 20, xl: 22 }}
            to="/produtos"
            style={{
              color: "#fff",
              textDecoration: "none",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Produtos
          </MuiLink>
          <MuiLink
            component={RouterLink}
            fontSize={{ xs: 11.5, md: 20, lg: 20, xl: 22 }}
            to="/produtos"
            style={{
              color: "#fff",
              textDecoration: "none",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Serra Fita
          </MuiLink>
   
        </Breadcrumbs>
      </div>
      <SawBandList />
    </Box>
  );
};

export default SawBandPage;
