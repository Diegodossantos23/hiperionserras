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
import ServiceImage from "../../assets/img/serra-hiperion.jpeg";
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
          <Typography color="#fff">Serviços de Afiação</Typography>
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
                Na Hiperion Serras, além de serras de alta qualidade, oferecemos
                um serviço de afiação moderno e tecnológico. 💡
              </Typography>
              <Typography
                fontFamily="National 2 Condensed, Arial, sans-serif"
                color="#72777d"
                fontSize={{ xs: 11, md: 18, lg: 18, xl: 18 }}
                gutterBottom
              >
                Nosso centro de afiação, equipado com máquinas CNC de última
                geração, garante que suas serras tenham o mesmo desempenho de
                quando eram novas.
              </Typography>
              <Typography
                fontFamily="National 2 Condensed, Arial, sans-serif"
                color="#72777d"
                fontSize={{ xs: 11, md: 18, lg: 18, xl: 18 }}
                gutterBottom
              >
                Com retirada e entrega no local, garantimos conveniência e
                qualidade em cada afiação de serras circulares HSS e de metal
                duro.
              </Typography>
              <Typography
                fontFamily="National 2 Condensed, Arial, sans-serif"
                color="#72777d"
                fontSize={{ xs: 11, md: 18, lg: 18, xl: 18 }}
                gutterBottom
              >
                Confie em nós para manter suas ferramentas sempre afiadas e
                prontas para o trabalho! 🚀
              </Typography>
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
