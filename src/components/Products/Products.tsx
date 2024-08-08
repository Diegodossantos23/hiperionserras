import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import SerraImg from "../../assets/img/serra.jpeg";

const products = [
  {
    id: 1,
    title: "Serras circulares",
    description:
      "Descubra a qualidade e variedade de nossas serras circulares.",
    topics: ["HSS", "Metal Duro (TCT)", "Cermet", "Segmentada"],
    imageUrl:
      "https://lirp.cdn-website.com/9235761d/dms3rep/multi/opt/lamina+site+-427w.png",
  },
  {
    id: 2,
    title: "Serviços de Afiação",
    description:
      "Conheça nossos serviços especializados em afiação e reparos de serras.",
    topics: [
      "Afiação para HSS e TCT",
      "Repastilhamento",
      "Redentaçao",
      "Solda",
    ],
    imageUrl: SerraImg,
  },
  {
    id: 3,
    title: "Lâminas de Serra Fita",
    description:
      "Explore nossa variedade de lâminas de serra fita para diferentes aplicações.",
    topics: [
      "Bimetálicas M42",
      "Bimetálicas M51",
      "Bimetálicas MD",
      "Aço Carbono",
    ],
    imageUrl:
      "https://lirp.cdn-website.com/9235761d/dms3rep/multi/opt/SERRA+FITA+SEM+FUNDO-400w.png",
  },
];

const Products = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId: number) => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    if (productId === 2) {
      navigate("/servicos-afiação");
    } else if (productId === 3) {
      navigate("/serra-fita");
    } else {
      navigate(`/serras-circulares`);
    }
  };

  return (
    <Box
      component={"div"}
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      minHeight="100vh"
      position="relative"
      padding={{ xs: "2rem 0", sm: "2rem 0", md: "2rem 0", xl: "1rem" }}
      paddingTop={{ xs: "2rem" }}
      sx={{
        background: "linear-gradient(135deg, #F2BF27, #F2d127)",
      }}
    >
      <Typography
        variant="h2"
        color="#000"
        fontSize={{ xs: 23, sm: 35, md: 30, xl: 40 }}
        padding={{ xs: 5, sm: 15, md: 15, xl: 20 }}
        fontWeight={600}
        align="center"
      >
        NOSSOS PRODUTOS
      </Typography>

      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {products.map((product) => (
          <Card
            sx={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s",
              cursor: "pointer",
              margin: "1rem",
              width: "350px",
              height: "auto",
              "@media (max-width: 1368px)": {
                width: "300px",
                height: "auto",
              },
              "@media (max-width: 400px)": {
                width: "90%",
                height: "auto",
              },
              "&:hover": { transform: "scale(1.05)" },
            }}
            key={product.id}
            onClick={() => handleProductClick(product.id)}
          >
            <CardMedia
              component="img"
              height="200"
              image={product.imageUrl}
              alt={product.title}
              sx={{ borderRadius: "10px 10px 0 0" }}
            />
            <CardContent
              sx={{
                textAlign: "left",
              }}
            >
              <Typography variant="h5" gutterBottom color="#363636">
                {product.title}
              </Typography>
              <Typography variant="body2" color="#696969" paragraph>
                {product.description}
              </Typography>
              <ul style={{ marginLeft: "1rem", padding: 0 }}>
                {product.topics.map((topic, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "0.8rem",
                      paddingBottom: "0.5rem",
                      color: "#363636",
                    }}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </CardContent>
            <Box textAlign="center" padding="1rem">
              <Button
                variant="contained"
                sx={{
                  background: "#F2BF27",
                  borderRadius: "100px",
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "#F2BF27",
                  },
                  "@media (max-width: 1368px)": {
                    padding: "0.75rem 1.5rem",
                    fontSize: "0.85rem",
                  },
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleProductClick(product.id);
                }}
              >
                Saiba Mais
                <FontAwesomeIcon
                  style={{ marginLeft: "1rem", color: "#000" }}
                  icon={faArrowRight}
                />
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Products;
