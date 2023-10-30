import React from "react";
import PageContainer from "../../components/container/PageContainer";
import { Box, Typography, Paper, Grid, useTheme, useMediaQuery } from "@mui/material";
import ButtonsSign from "./Components/ButtonsLog";

function SignIn() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <PageContainer title="Prácticas - Postulación a practicas profesionales | Administración Pública" description="Sistema de prácticas profesionales">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundImage: 'url(https://cdn.discordapp.com/attachments/1145537724644864134/1166227278720671775/image.png?ex=6549b8ca&is=653743ca&hm=fe863285f7e6c37ea2b2c8d499f3f9b9d7b92f615ef8f34692dd7c81586a0dec&)',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          minHeight: "983px",
          padding: isMobile ? 2 : 10,
          flexDirection: "column",
        }}
      >
        <Paper elevation={24} sx={{ width: '100%', padding: 5 }}>
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant={isMobile ? "h5" : "h3"}
                component="h1"
                sx={{
                  color: "black",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textAlign: "center",
                }}
              >
                Postulación a Prácticas Profesionales
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://practicas.administracionpublica-uv.cl/imagenes/logo_sis_practicas.png"
                alt="Logo Practicas Profesionales"
                style={{ width: '100px', height: '100px' }} // Adjust the size as needed
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ textAlign: "center" }}>
                Bienvenido al sistema de prácticas de Administración Pública de la Universidad de Valparaíso. Para continuar, necesitas ingresar con tu cuenta. De no contar con una, puedes registrarte en nuestro sistema.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ButtonsSign />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </PageContainer>
  );
}

export default SignIn;
