import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Product } from "./SawProductData/SawProductData";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

interface SawProductProps {
  product: Product;
  handleProductClick: (id: number) => void;
}

export const SawProductCard: React.FC<SawProductProps> = ({
  product,
  handleProductClick,
}) => {
  const handleButtonClick = (id: number) => {
    window.scrollTo(0, 0);
    handleProductClick(id);
  };

  return (
    <Box
      sx={{
        borderRadius: "10px",
        transition: "transform 0.3s",
        cursor: "pointer",
        margin: "1rem",
        marginBottom: { xs: "5rem" },
        width: "300px",
        position: "relative",
        "&:hover": { transform: "scale(1.05)" },
      }}
      onClick={() => handleButtonClick(product.id)}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.imageUrl}
        alt={product.title}
        sx={{
          position: "absolute",
          top: "-90px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "200px",
          borderRadius: "10px 10px 0 0",
          border: "5px solid #fff",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          border: "1px solid #abb8c3",
          paddingTop: "120px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          "&:hover": { border: "1px solid #F2BF27" },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom color="#363636">
            {product.title}
          </Typography>
          <Typography variant="body2" color="#abb8c3" paragraph>
            {product.linha}
          </Typography>
        </CardContent>
        <Box textAlign="center" padding="1rem">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleButtonClick(product.id);
            }}
            variant="contained"
            style={{
              background: "#F2BF27",
              color: "#000",
              borderRadius: "5px",
            }}
          >
            Saiba Mais
            <FontAwesomeIcon
              style={{ marginLeft: "1rem", color: "#000" }}
              icon={faArrowRight}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
