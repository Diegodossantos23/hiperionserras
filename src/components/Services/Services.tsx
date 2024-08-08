import { Box, Typography, Card, CardContent } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faMapMarkerAlt,
  faShoppingCart,
  faTools,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../../assets/img/pastel-gray-oil-paint-textured.jpg";
import { Stack } from "@mui/system";

const Services = () => {
  const servicesData = [
    {
      title: "PRODUTOS DE QUALIDADE",
      description:
        "Oferecemos produtos de alta qualidade para atender às suas necessidades. Nossos fornecedores são selecionados para garantir a melhor qualidade.",
      highlights: [
        "Extrema qualidade",
        "Variedade de opções",
        "Preços competitivos",
      ],
      details: [
        "Lâminas de serra circular e fita",
        "Máquinas de corte industrial",
        "Acessórios e peças de reposição",
      ],
      icon: faShoppingCart,
    },
    {
      title: "EQUIPE ESPECIALIZADA",
      description:
        "Nossa equipe é formada por especialistas qualificados em corte industrial. Oferecemos suporte técnico e resolvemos problemas rapidamente.",
      highlights: [
        "Equipe especialista",
        "Suporte técnico personalizado",
        "Soluções rápidas",
      ],
      details: [
        "Engenheiros de corte especializados",
        "Técnicos de manutenção certificados",
        "Assistência técnica remota e presencial",
      ],
      icon: faUsers,
    },
    {
      title: "CENTRO DE SOLDA",
      description:
        "Temos um dos centros de soldagem mais avançados do Brasil, usando tecnologia de ponta para garantir soldas precisas e duráveis.",
      highlights: ["Tecnologia avançada", "Soldas precisas", "Durabilidade"],
      details: [
        "Soldagem a laser de alta precisão",
        "Testes de qualidade rigorosos",
        "Manutenção preventiva e corretiva",
      ],
      icon: faTools,
    },
    {
      title: "TREINAMENTOS INTERNOS",
      description:
        "Oferecemos treinamentos para capacitar sua equipe a operar nossos equipamentos com segurança e eficiência, além de consultoria personalizada.",
      highlights: [
        "Treinamentos especializados",
        "Consultoria personalizada",
        "Melhoria de desempenho",
      ],
      details: [
        "Cursos de capacitação em corte industrial",
        "Workshops práticos de segurança",
        "Análise de desempenho e otimização",
      ],
      icon: faChalkboardTeacher,
    },
    {
      title: "LOCALIZAÇÃO ESTRATÉGICA",
      description:
        "Nossa localização facilita a entrega rápida em todo o país, situados no principal eixo rodoviário do Brasil.",
      highlights: [
        "Localização estratégica",
        "Agilidade no transporte",
        "Entrega para todo o país",
      ],
      details: [
        "Armazém central de distribuição",
        "Parcerias logísticas confiáveis",
        "Rastreamento de pedidos em tempo real",
      ],
      icon: faMapMarkerAlt,
    },
  ];

  return (
    <Box
      id="services"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      minHeight="100vh"
      margin="0 auto"
      paddingBottom={{ xs: 10 }}
      sx={{
        backgroundColor: "#f7f7f7",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        margin: "0 auto",
        width: "100%",
        objectFit: "cover",
      }}
    >
      <Stack
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "60%",
            md: "90vw",
            lg: "90%",
            xl: "60vw",
          },
        }}
      >
        <Typography
          variant="h2"
          color="#424a55"
          align="center"
          fontFamily="National 2 Condensed, Arial, sans-serif"
          fontSize={{ xs: 20, sm: 35, md: 35, xl: 40 }}
          fontWeight={800}
          padding={{ xs: 9, sm: 15, md: 15, xl: 20 }}
        >
          DIFERENCIAIS
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          flexWrap="wrap"
          gap="2rem"
          padding="0 1rem"
        >
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="service-card"
              sx={{
                maxWidth: {
                  xs: "300px",
                  sm: "80%",
                  md: "350px",
                },
                width: "100%",
                height: "400px", // Definindo altura fixa
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                borderRadius: "10px",
                "@media (max-width: 400px)": {
                  width: "90%",
                  height: "auto", // Permitir ajuste automático em telas pequenas
                },
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // Centraliza o conteúdo
                  alignItems: "center",
                  height: "100%", // Garante que o conteúdo ocupe toda a altura do card
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "1rem",
                      background: "#F2BF27",
                      padding: "2rem",
                      borderRadius: "100px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={service.icon}
                      style={{ color: "#3e3f40" }}
                      size="2x"
                    />
                  </Box>
                  <Typography
                    color="#777777"
                    variant="h3"
                    fontSize={{ xs: 15, md: 18, xl: 25 }}
                    fontWeight={600}
                    fontFamily="National 2 Condensed, Arial, sans-serif"
                    sx={{
                      marginBottom: "1rem",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={{ xs: 10, md: 15, lg: 20, xl: 18 }}
                    fontWeight={400}
                    fontFamily="National 2 Condensed, Arial, sans-serif"
                    sx={{ color: "#3e3f40", marginBottom: "1rem" }}
                  >
                    {service.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      flex: 1,
                      marginTop: "1rem",
                    }}
                  ></Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default Services;
