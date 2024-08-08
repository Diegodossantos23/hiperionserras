import { Box, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SawProductsList from "src/components/SawProduct/SawProdutList/SawProductList";
import ServiceImage from "../../assets/img/serra-hiperion.jpeg";

const ProductDetailsPage = () => {
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
          height: "55vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          // variant={"h2"}
          marginTop={{ lg: 10 }}
          fontSize={{ xs: 35, md: 30, lg: 50, xl: 50 }}
          gutterBottom
          style={{
            color: "#fff",
            marginBottom: "1rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Serras Circulares
        </Typography>
        <Breadcrumbs aria-label="breadcrumb" style={{ color: "#fff" }}>
          <MuiLink
            component={RouterLink}
            to="/"
            fontSize={{ xs: 11.5, md: 30, xl: 30 }}
            sx={{
              color: "#fff",
              textDecoration: "none",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontSize: { xs: "1rem" },
            }}
          >
            Hiperion Serras
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/produtos"
            fontSize={{ xs: 11.5, md: 30, xl: 30 }}
            sx={{
              color: "#fff",
              textDecoration: "none",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontSize: { xs: "1rem" },
            }}
          >
            Produtos
          </MuiLink>
          <Typography color="#fff">Serras Circulares</Typography>
        </Breadcrumbs>
      </div>

      <SawProductsList />
    </Box>
  );
};

export default ProductDetailsPage;
