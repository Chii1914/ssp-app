import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import ReplyIcon from "@mui/icons-material/Reply";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
export default function SignIn() {
  const [inputs, setInputs] = useState({
    RUN: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/userver/", inputs);

      if (res.data.status === true) {
        alert("Bienvenido ");
        <link rel="stylesheet" href="/cartaspost" />;
      } else if (res.data.message === "Usuario no encontrado") {
        alert("Usuario no encontrado");
      } else if (res.data.message === "Contraseña incorrecta") {
        alert("Contraseña incorrecta");
      }
    } catch (error) {
      console.error("Error al hacer la petición:", error.response.data);
      // Aquí puedes establecer algún estado o mostrar un mensaje al usuario
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "#002E38",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "500px",
            height: "350px",
            backgroundColor: "white",
            border: "1px solid gray",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.9)",
          }}
        >
          <Typography component="h1" variant="h5">
            Inicio de sesión
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="RUN"
              label="Ingresa tu Rut sin puntos ni guión"
              name="RUN"
              autoComplete="RUN"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <ReplyIcon sx={{ color: "primary" }} />
                <Link href="/">Volver</Link>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
