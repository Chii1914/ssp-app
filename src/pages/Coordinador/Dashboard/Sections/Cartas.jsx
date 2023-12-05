import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Sidebar from "../../../../components/Navbar/Navbar";
function Cartas() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1> Cartas Genéricas y Personalizadas </h1>
          <Typography paragraph>Aquí luego irán las cartas</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Cartas;
