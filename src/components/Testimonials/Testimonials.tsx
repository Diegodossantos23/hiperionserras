import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Avatar from "../../assets/img/avatar.jpg";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion"; 

// Dados fictícios de depoimentos
const testimonials = [
  {
    name: "Jair",
    role: "Compras",
    avatar: Avatar,
    quote:
      '"Eu só tenho elogios para o atendimento que recebi e para o serviço prestado pela sua empresa. A utilização da lâmina de serra fita e o alto rendimento proporcionaram um trabalho preciso e rápido. Sem dúvidas, recomendo a todos os meus amigos e colegas de trabalho."',
  },
  {
    name: "Leandro",
    role: "Qualidade",
    avatar: Avatar,
    quote:
      '"A equipe técnica da Hiperion Serras sempre nos trata de forma pessoal e oferece um serviço excelente e atencioso. Para mim, esse é o benefício mais importante."',
  },
  {
    name: "Rita",
    role: "Compras",
    avatar: Avatar,
    quote:
      '"Estamos trabalhando cada vez mais com a Hiperion, graças aos seus preços competitivos e disponibilidade. Nunca encontramos um problema que eles não puderam resolver rapidamente. Além disso, nossas remessas sempre chegam na hora, o que é extremamente importante em nossa linha de negócio."',
  },
  // Adicione mais depoimentos conforme necessário
];

const TestimonialsCarousel = () => {
  return (
    <Box
      height="100vh" // Ocupa toda a altura da tela
      width="100vw" // Ocupa toda a largura da tela
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ overflowX: "hidden" }} // Adicionando overflow-x: hidden para evitar a barra de rolagem horizontal
    >
      <Box padding={10} width="100%">
        <Typography
          variant="h2"
          color="#c1c1c1c"
          fontWeight={700}
          fontSize={{ xs: 24, sm: 30, md: 40, lg: 50 }} // Ajustando o tamanho da fonte para diferentes tamanhos de tela
          fontFamily="Montserrat, sans-serif"
          textAlign="center"
          marginBottom={{ xs: 4, sm: 6 }} // Ajustando a margem inferior para diferentes tamanhos de tela
          sx={{ textShadow: "2px 2px 4px #c1c1c1" }}
        >
          O que dizem os nossos clientes
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginBottom={5}
        >
          <Typography sx={{ color: "red" }} variant="h4" component="span">
            ★★★★
          </Typography>
          <StarIcon sx={{ color: "red" }} fontSize="large" />
        </Box>

        <Carousel
          showArrows={true}
          showThumbs={false}
          showIndicators={true}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={4000}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <Box
                ml={2}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100%"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Typography
                    fontSize={{ xs: 14, sm: 16, md: 18 }} // Ajustando o tamanho da fonte para diferentes tamanhos de tela
                    fontFamily="Montserrat, sans-serif"
                    textAlign="center"
                    width="100%"
                    color="#696969"
                  >
                    {testimonial.quote}
                  </Typography>
                </motion.div>
                <Typography
                  variant="subtitle1"
                  fontWeight={400}
                  marginBottom={10}
                  align="center"
                >
                  {testimonial.name} - {testimonial.role}
                </Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default TestimonialsCarousel;
