import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Sidebar from "../../../../components/Navbar/Navbar";
function Postulaciones() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1> Postulaciones </h1>
          <Typography paragraph>Aquí irán luego las postulaciones </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Postulaciones;
