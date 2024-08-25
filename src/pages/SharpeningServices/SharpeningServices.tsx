import {
  Box,
  Typography,
  Breadcrumbs,
  Link as MuiLink,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import ServiceImage from "../../assets/img/background-top.jpg";
import ContactForm from "src/components/ContactForm/ContactForm";
import ImageURL from "./images/afiacao.jpeg";

const SharpeningServicesPage = () => {
  const navigate = useNavigate();

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
          marginTop={{ xs: 25, lg: 10 }}
          fontSize={{ xs: 25, md: 30, lg: 50, xl: 50 }}
          gutterBottom
          style={{
            color: "#fff",
            marginBottom: "1rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Serviços de Afiação
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
            Serviços de Afiação
          </MuiLink>
        </Breadcrumbs>
      </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "auto",
          background: "#fff",
          width: "100%",
          marginBottom: { md: '5rem', lg: '5rem', xl: '5rem' },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "start",
            height: "60px",
            marginBottom: "2rem",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
            sx={{
              background: "#F2BF27",
              color: "#000",
              marginTop: "2rem",
              marginLeft: "2rem",

              "&:hover": { background: "#F2BF27" },
            }}
            onClick={() => navigate("/")}
          >
            Voltar
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "start",
            width: "75%",
          }}
        >
          <Box
            sx={{
              flex: 2,
              marginRight: { md: "2rem" },
              marginBottom: { xs: "2rem", md: 0 },
            }}
          >
            <Box sx={{ marginBottom: "2rem" }}>
              <Typography
                fontFamily="National 2 Condensed, Arial, sans-serif"
                fontSize={{ xs: 15, md: 25, lg: 25, xl: 25 }}
                gutterBottom
                sx={{ color: "#72777d", fontWeight: "bold" }}
              >
                Você já enviou suas serras para a afiação?
              </Typography>
              <Typography
                fontFamily="National 2 Condensed, Arial, sans-serif"
                color="#72777d"
                fontSize={{ xs: 11, md: 18, lg: 18, xl: 18 }}
                gutterBottom
              >
                Além da comercialização de serras, a
                Hiperion Serras possui um moderno e
                tecnológico centro de afiações, garantindo
                aos nossos clientes serviços de afiação de
                serras com a mais alta qualidade,
                performance e satisfação. Nosso centro
                está equipado com maquinas CNC de
                ultima geração, possibilitando obter a
                mesma qualidade de afiação das serras
                novas.
                Disponibilizamos a todos nossos clientes
                o sistema de retirada e entrega no local
                para os seguintes serviços de afiação:
              </Typography>

              <ul style={{
                  color: "#72777d"
              }}>
                <li>Afiação de Serras Circulares HSS</li>
                <li>Afiação de Serras Circulares de metal duro</li>
              </ul>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={ImageURL}
              alt="Serviço de Afiação"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Box>

      <ContactForm />
    </Box>
  );
};

export default SharpeningServicesPage;
