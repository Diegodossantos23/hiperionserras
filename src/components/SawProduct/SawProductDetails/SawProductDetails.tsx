import { useEffect } from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import {
  CardMedia,
  CardContent,
  Typography,
  Button,
  Breadcrumbs,
  Link as MuiLink,
  Box,
  Rating,
  Divider,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ServiceImage from "../../../assets/img/serra-hiperion.jpeg";
import { products } from "../SawProductData/SawProductData";

const SawProductDetails = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((product) => product.id === Number(productId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <Typography variant="h5" align="center">
        Produto não encontrado
      </Typography>
    );
  }

  return (
    <Box>
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
          fontWeight={"bold"}
          fontFamily="National 2 Condensed, Arial, sans-serif"
          sx={{
            marginTop: { xs: 13 },
            fontSize: { xs: 25, md: 40 },
            padding: { xs: 3 },
            fontFamily: "National 2 Condensed, Arial, sans-serif",
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Serras Circulares Cermet e Metal Duro
        </Typography>

        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ color: "#fff", padding: { xs: "1rem" } }}
        >
          <MuiLink
            component={RouterLink}
            to="/"
            fontSize={{ xs: 13, md: 20, lg: 20, xl: 22 }}
            sx={{
              color: "#fff",
              textDecoration: "none",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Hiperion Serras
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/produtos"
            fontSize={{ xs: 13, md: 20, lg: 20, xl: 22 }}
            sx={{
              color: "#fff",
              textDecoration: "none",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Produtos
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/serras-circulares"
            fontSize={{ xs: 13, md: 20, lg: 20, xl: 22 }}
            sx={{
              color: "#fff",
              textDecoration: "none",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Serras Circulares
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to={`/serras-circulares/${productId}`}
            fontSize={{ xs: 13, md: 20, lg: 20, xl: 22 }}
            style={{
              color: "#fff",
              textDecoration: "none",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            {product.title}
          </MuiLink>
        </Breadcrumbs>
      </div>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row", lg: "row", xl: "row" }}
        justifyContent={"space-between"}
        sx={{
          mt: 2,
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: { xs: "auto%", md: "20%" },
            padding: { xs: "1rem", md: "2rem" },
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "start",
              width: "auto",
              height: "60px",
              marginBottom: "2rem",
            }}
          >
            <Button
              variant="contained"
              startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
              sx={{
                mt: 2,
                background: "#F2BF27",
                color: "#000",
                "&:hover": { background: "#F2BF27" },
              }}
              onClick={() => navigate("/serras-circulares")}
            >
              Voltar
            </Button>
          </Box>

          <Box
            display={"flex"}
            flexDirection={{ xs: "row", md: "column" }}
            justifyContent={{ xs: "center", md: "center" }}
            alignItems={{ xs: "center", md: "center" }}
            textAlign={{ xs: "center", md: "center" }}
          >
            {product.othersImage && product.othersImage.length > 0 && (
              <>
                {product.othersImage.map((type, index) => (
                  <img
                    key={index}
                    src={type}
                    alt={product.title}
                    style={{
                      padding: "1rem",
                      height: "auto",
                      width: "100px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
                    }}
                  />
                ))}
              </>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Box
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            sx={{
              width: { xs: "100%", md: "65%", xl: "65%" },
            }}
          >
            <CardMedia
              component="img"
              image={product.imageUrl}
              alt={product.title}
              sx={{
                width: { xs: "100%", md: "100%" },
                height: "auto",
                // margin: { md: "5rem" },
              }}
            />
          </Box>

          <CardContent
            sx={{
              width: { xs: "auto", md: "40%" },
              padding: { xs: "1rem", md: "2rem" },
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
            }}
          >
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography color={"rgba(0, 0, 0, .9)"} variant="h6" gutterBottom>
              {product.linha}
            </Typography>

            <Rating name="read-only" value={5} readOnly />

            {product.caracteristics && product.caracteristics.length > 0 && (
              <>
                <Divider sx={{ marginBottom: "1.5rem" }} component="div" />

                <Typography fontSize={15} fontWeight="bold">
                  Características:
                </Typography>

                <ul>
                  {product.caracteristics.map((type, index) => (
                    <li
                      style={{
                        fontSize: "0.9rem",
                      }}
                      key={index}
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {product.application && product.application.length > 0 && (
              <>
                <Divider sx={{ marginBottom: "1.5rem" }} component="div" />

                <Typography fontSize={15} fontWeight="bold">
                  Aplicações:
                </Typography>

                <ul>
                  {product.application.map((app, index) => (
                    <li
                      style={{
                        fontSize: "0.9rem",
                      }}
                      key={index}
                    >
                      {app}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {product.relevant_types && product.relevant_types.length > 0 && (
              <>
                <Divider sx={{ marginBottom: "1.5rem" }} component="div" />

                <Typography fontSize={15} fontWeight="bold">
                  Tipos de Revestimentos:
                </Typography>
                <ul>
                  {product.relevant_types.map((type, index) => (
                    <li
                      style={{
                        fontSize: "0.9rem",
                      }}
                      key={index}
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {product.eficience && product.eficience.length > 0 && (
              <>
                <Divider sx={{ marginBottom: "1.5rem" }} component="div" />

                <Typography variant="subtitle1" fontWeight="bold">
                  Eficiência apresentada pela CERMET:
                </Typography>
                <ul>
                  <li>{product.eficience}</li>
                </ul>
              </>
            )}
            {product.rows && product.rows.length > 0 && (
              <>
                <Divider sx={{ marginBottom: "1.5rem" }} component="div" />

                <TableContainer
                  component={Paper}
                  sx={{ maxWidth: { xs: "100%", md: 600 } }}
                >
                  <Table>
                    <TableBody>
                      {product.rows.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              textAlign: "center",
                              fontFamily: "Arial, sans-serif",
                            }}
                          >
                            {row.left}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              textAlign: "center",
                              fontFamily: "Arial, sans-serif",
                            }}
                          >
                            {row.right}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}

            <Box
              sx={{
                height: { xs: "auto", md: "auto" },
                display: "flex",
                justifyContent: "flex-start",
                padding: "2rem",
                background: "#424a55",
                marginTop: "1rem",
              }}
            >
              <Typography
                fontSize={13}
                gutterBottom
                width={"100%"}
                style={{
                  color: "#fff",
                  marginBottom: "1rem",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                A Hiperion desenvolveu a liga de aço rápido M51, denominada
                AGARDEN, exclusivamente no Brasil, para a produção de serras em
                HSS. Esta liga possui um alto teor de Cobalto, Molibdênio e
                cromo, combinado com um baixo teor de Tungstênio, conferindo
                excelentes propriedades para o corte com serras, incluindo maior
                tenacidade e resistência ao desgaste. Testes realizados em
                empresas brasileiras demonstraram ganhos médios de rendimento
                mínimo de 40%, com casos excepcionais alcançando mais de 8 vezes
                o rendimento anterior, dependendo do material utilizado.
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default SawProductDetails;
