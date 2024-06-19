import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => (
  <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 10, pb: 6 }}>
    <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
      Postulación a Prácticas Profesionales
    </Typography>
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "15vh" }}>
      <img
        src="https://practicas.administracionpublica-uv.cl/imagenes/logo_sis_practicas.png"
        alt="Logo Practicas Profesionales"
        style={{ width: "350px", height: "100px", transform: "scale(0.8)" }}
      />
    </Box>
  </Container>
);

export default Header;
