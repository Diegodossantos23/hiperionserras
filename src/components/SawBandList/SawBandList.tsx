import React from "react";
import { Box, Container, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { products } from "./data/data";
import SawBandCard from "./SawBandCard/SawBandCard";

const SawBandList: React.FC = () => {
  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    console.log("Product clicked:", id);
    navigate(`/serra-fita/detalhes/${id}`);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: { xs: "1rem" },
          marginBottom: "8rem",
          paddingLeft: { xs: "1rem" },
          width: "100%",
          maxWidth: "1200px",
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        <Button
          variant="contained"
          startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
          sx={{
            backgroundColor: "#F2BF27",

            color: "#000",

            "&:hover": {
              backgroundColor: "#F2BF27",
            },
          }}
          onClick={() => navigate("/")}
        >
          Voltar
        </Button>
      </Box>

      <Container
        sx={{
          textAlign: "center",
          marginBottom: { xs: "5rem", md: "2rem", xl: "2rem" },
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Box
          sx={{
            display: "flex",

            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 10, md: 5, lg: 2, xl: 5 },
          }}
        >
          {products.map((product) => (
            <Box
              key={product.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                flexBasis: {
                  xs: "100%",
                  md: "calc(33.33% - 16px)",
                  xl: "calc(33.33% - 16px)",
                },
                maxWidth: {
                  xs: "100%",
                  md: "calc(33.33% - 16px)",
                  xl: "calc(33.33% - 16px)",
                },
              }}
            >
              <SawBandCard
                product={product}
                handleProductClick={handleProductClick}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SawBandList;
