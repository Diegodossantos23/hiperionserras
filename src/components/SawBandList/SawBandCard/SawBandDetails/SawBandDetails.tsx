import React from "react";
import {
  Box,
  Typography,
  CardContent,
  CardMedia,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Rating,
  TableHead,
  Link as MuiLink,
  Divider,
  TableRow,
  Breadcrumbs,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import ServiceImage from "../../../../assets/img/serra-hiperion.jpeg";
import { products } from "../../data/data";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProgressBarComponent from "src/components/ProgressBar/ProgressBar";

const SawBandDetails = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((product) => product.id === Number(productId));
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  if (!product) {
    return (
      <Typography variant="h5" align="center">
        Produto não encontrado
      </Typography>
    );
  }

  return (
    <Box>
      <Box
        sx={{
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
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: "#fff" }}>
          <MuiLink
            component={RouterLink}
            to="/"
            fontSize={{ xs: 11.5, md: 20, lg: 20, xl: 22 }}
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
            fontSize={{ xs: 11.5, md: 20, lg: 20, xl: 22 }}
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
            to={`/serras-circulares/${productId}`}
            fontSize={{ xs: 11.5, md: 20, lg: 20, xl: 22 }}
            sx={{
              color: "#fff",
              textDecoration: "none",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            {product.title}
          </MuiLink>
        </Breadcrumbs>
      </Box>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row", lg: "row", xl: "row" }}
        justifyContent={"space-between"}
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: { xs: "auto%", md: "20%" },
            padding: { xs: "1rem", md: "2rem" },
            boxShadow: {
              md: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
              lg: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
              xl: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
            },
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
              onClick={() => navigate("/serra-fita")}
            >
              Voltar
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            width: "100%",
            boxSizing: { xs: "border-box" },
            overflow: { xs: "hidden" },
          }}
        >
          <Box
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            sx={{
              width: { xs: "100%", md: "65%", lg: "65%", xl: "65%" },
            }}
          >
            <CardMedia
              component="img"
              image={product.imageUrl}
              alt={product.title}
              sx={{
                width: { xs: "80%", md: "100%" },
                height: "auto",
                margin: "2rem",
              }}
            />
          </Box>

          <CardContent
            sx={{
              padding: "2rem",
              height: "100%",
              width: { xs: "85%", md: "50%", lg: "50%", xl: "50%" },
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
              marginTop: { xs: "2rem", md: "0" },
            }}
          >
            <Typography variant="h4" color={"rgba(0, 0, 0, .9)"} gutterBottom>
              {product.linha}
            </Typography>

            <Rating name="read-only" value={5} readOnly />

            {product.bimental && product.bimental.length > 0 && (
              <>
                <Divider sx={{ marginBottom: "1.5rem" }} component="div" />

                <Typography variant="subtitle1" fontWeight="bold">
                  Lâmina de serra de fita bimetálica:
                </Typography>

                <ul
                  style={{
                    color: "#747474",
                  }}
                >
                  {product.bimental.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              </>
            )}

            {product.caracteristics && product.caracteristics.length > 0 && (
              <>
                <Divider sx={{ marginBottom: "1.5rem" }} component="div" />

                <Typography variant="subtitle1" fontWeight="bold">
                  Características:
                </Typography>

                <ul
                  style={{
                    color: "#747474",
                  }}
                >
                  {product.caracteristics.map((type, index) => (
                    <li key={index}>{type}</li>
                  ))}
                </ul>
              </>
            )}
            {product.progressBars && product.progressBars.length > 0 && (
              <ProgressBarComponent progress={product.progressBars} />
            )}
          </CardContent>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "70%", lg: "50%", xl: "50%" },
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Descrição" value="1" />
              <Tab label="Material" value="2" />
              <Tab label="Aplicação" value="3" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <Typography variant="h6" gutterBottom>
              Descrição
            </Typography>
            <Typography
              fontSize={{
                xs: 13,
                md: 18,
                lg: 18,
                xl: 18,
              }}
              sx={{
                color: "#747474",
              }}
              paragraph
            >
              Grande variedade de usos, eficiente e durável - nosso duoflex® M42
              é um verdadeiro polivalente adequado para a produção de corte de
              todos os tipos de metal. Você pode usar essas lâminas de serra de
              fita bimetálica de alto desempenho na produção, fabricação e
              oficinas de usinagem. Elas apresentam robustez, resistência à
              abrasão e longa vida útil da lâmina.
            </Typography>
            {product.id === 1 && product.tableData && (
              <TableContainer
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "5rem",
                }}
                component={Paper}
              >
                <Table size="small">
                  <TableHead sx={{ background: "#F2BF27", color: "#fff" }}>
                    <TableRow>
                      <TableCell align="center">mm</TableCell>
                      <TableCell align="center">3</TableCell>
                      <TableCell align="center">4</TableCell>
                      <TableCell align="center">6</TableCell>
                      <TableCell align="center">8</TableCell>
                      <TableCell align="center">10</TableCell>
                      <TableCell align="center">14</TableCell>
                      <TableCell align="center">
                        Dentes por Polegadas (DpP)
                      </TableCell>
                      <TableCell align="center">in</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {product.tableData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell align="center">{row.mm}</TableCell>
                        <TableCell align="center">{row.dp3}</TableCell>
                        <TableCell align="center">{row.dp4}</TableCell>
                        <TableCell align="center">{row.dp6}</TableCell>
                        <TableCell align="center">{row.dp8}</TableCell>
                        <TableCell align="center">{row.dp10}</TableCell>
                        <TableCell align="center">{row.dp14}</TableCell>
                        <TableCell align="center">{row.dpp}</TableCell>
                        <TableCell align="center">{row.inches}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}

            {product.id === 2 && product.tableData && (
              <TableContainer
                component={Paper}
                sx={{ maxWidth: "100%", marginTop: "3rem" }}
              >
                <Table size="small">
                  <TableHead sx={{ backgroundColor: "#F2BF27" }}>
                    <TableRow>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff", padding: "4px" }}
                      >
                        in
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff", padding: "4px" }}
                      >
                        0.75/1.25
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff", padding: "4px" }}
                      >
                        1/1.3
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff", padding: "4px" }}
                      >
                        1.4/2
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff", padding: "4px" }}
                      >
                        2/3
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff", padding: "4px" }}
                      >
                        3/4
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff", padding: "4px" }}
                      >
                        4/6
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff", padding: "4px" }}
                      >
                        5/8
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff", padding: "4px" }}
                      >
                        mm
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {product.tableData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell
                          align="center"
                          sx={{ padding: "4px", fontSize: "0.875rem" }}
                        >
                          {row.inches}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ padding: "4px", fontSize: "0.875rem" }}
                        >
                          {row.dp0_75_1_25}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ padding: "4px", fontSize: "0.875rem" }}
                        >
                          {row.dp1_1_3}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ padding: "4px", fontSize: "0.875rem" }}
                        >
                          {row.dp1_4_2}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ padding: "4px", fontSize: "0.875rem" }}
                        >
                          {row.dp2_3}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ padding: "4px", fontSize: "0.875rem" }}
                        >
                          {row.dp3_4}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ padding: "4px", fontSize: "0.875rem" }}
                        >
                          {row.dp4_6}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ padding: "4px", fontSize: "0.875rem" }}
                        >
                          {row.dp5_8}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ padding: "4px", fontSize: "0.875rem" }}
                        >
                          {row.mm}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </TabPanel>

          <TabPanel value="2">
            {product.material && product.material.length > 0 ? (
              <>
                <Typography variant="h6" gutterBottom>
                  Material
                </Typography>
                <ul
                  style={{
                    color: "#747474",
                  }}
                >
                  {product.material.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              </>
            ) : (
              <Typography variant="body2" color="textSecondary">
                Nenhum material disponível.
              </Typography>
            )}
          </TabPanel>

          <TabPanel value="3">
            {product.application && product.application.length > 0 ? (
              <>
                <Typography variant="h6" gutterBottom>
                  Aplicação
                </Typography>
                <ul
                  style={{
                    color: "#747474",
                  }}
                >
                  {product.application.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              </>
            ) : (
              <Typography variant="body2" color="textSecondary">
                Nenhum material disponível.
              </Typography>
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default SawBandDetails;
