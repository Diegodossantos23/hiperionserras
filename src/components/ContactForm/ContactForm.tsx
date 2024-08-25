import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Select,
  MenuItem,
  Snackbar,
  CircularProgress,
} from "@mui/material";

import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import contactImage from "./form-img.jpeg"; 

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  company: Yup.string().required("Empresa é obrigatória"),
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  product: Yup.string().required("Produto é obrigatório"),
  phone: Yup.string().required("Telefone é obrigatório"),
  message: Yup.string().required("Mensagem é obrigatória"),
});

interface FormValues {
  name: string;
  company: string;
  email: string;
  product: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] = React.useState<
    "success" | "error"
  >("success");
  const [loading, setLoading] = React.useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    setLoading(true);
    try {
      // Substitua a URL de localhost pela URL da API no Vercel
      const response = await axios.post(
        "https://send-emails-api.onrender.com/send-email",
        values
      );
      console.log("response", response);

      setSnackbarSeverity("success");
      setSnackbarMessage("Formulário enviado com sucesso!");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setSnackbarSeverity("error");
      setSnackbarMessage("Erro ao enviar email");
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      sx={{
        padding: { xs: "1em", sm: "2em", md: "3em" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth="xl"
    >
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={25} justifyContent="center">
          <Grid item xs={12} sm={12} md={6}>
            <form onSubmit={handleSubmit(onSubmit)} style={{}}>
              <Typography
                variant="h4"
                color="#424a55"
                fontSize={{ sm: 35, md: 30, xs: 23 }}
                fontWeight={600}
                fontFamily="National 2 Condensed, Arial, sans-serif"
                align="center"
                paddingTop={5}
                paddingBottom={2}
                sx={{ textShadow: "2px 2px 4px #fff" }}
              >
                FAÇA UM ORÇAMENTO
              </Typography>

              <Typography
                variant="h6"
                color="#777777"
                fontSize={{ sm: 20, md: 16, xs: 15 }}
                fontWeight={600}
                fontFamily="National 2 Condensed, Arial, sans-serif"
                align="center"
                paddingBottom={5}
                sx={{ textShadow: "2px 2px 4px #fff" }}
              >
                ENTRE EM CONTATO CONOSCO PARA FAZER SEU ORÇAMENTO!
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nome"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />
                  )}
                />
                <Controller
                  name="company"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Empresa"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.company}
                      helperText={errors.company?.message}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      type="email"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />
                <Controller
                  name="product"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Produto"
                      variant="outlined"
                      fullWidth
                      displayEmpty
                      error={!!errors.product}
                      renderValue={(value) => value || "Selecione um produto"}
                    >
                      <MenuItem value="" disabled>
                        Selecione um produto
                      </MenuItem>
                      <MenuItem value="Serra Circular">Serra Circular</MenuItem>
                      <MenuItem value="Serra de Fita">Serra de Fita</MenuItem>
                      <MenuItem value="Afiação">Afiação</MenuItem>
                    </Select>
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Telefone"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                  )}
                />
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Mensagem"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      multiline
                      rows={4}
                      error={!!errors.message}
                      helperText={errors.message?.message}
                    />
                  )}
                />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    backgroundColor: "#F2BF27",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#F2BF27" },
                  }}
                  disabled={isSubmitting || loading}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Enviar"
                  )}
                </Button>
              </Box>
            </form>
          </Grid>
          {/*

          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={contactImage}
                alt="Contact"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "0.5rem",
                }}
              />
            </Box>
          </Grid>*/
          }
        </Grid>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default ContactForm;
