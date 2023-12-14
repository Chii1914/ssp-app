import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Sidebar from "../../../../components/Navbar/Navbar";
import Tablagenericas from "./Tables/Tablagenericas";
import Tablaperso from "./Tables/Tablaperso";
function Cartas() {
  const [activeTableg, setActiveTableg] = useState(null);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    if (activeTableg) {
      setShowTransition(true);
    }
  }, [activeTableg]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Card sx={{ minWidth: 275, maxWidth: 500 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <Typography variant="h4" sx={{ padding: 2 }}>
                    Cartas Genéricas
                  </Typography>
                  <Typography variant="body2" sx={{ padding: 2 }}>
                    En esta sección se verán todas las cartas de presentación genéricas que se han solicitado los alumnos.
                  </Typography>
                  <Button
                    size="small1"
                    color="primary"
                    variant="containded"
                    onClick={() => setActiveTableg("genericas")}
                  >
                    Visualizar Cartas Genéricas
                  </Button>
                </CardContent>
              </Box>
            </Card>

            <Card sx={{ minWidth: 275, maxWidth: 500 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <Typography variant="h4" sx={{ padding: 2 }}>
                    Cartas Personalizadas
                  </Typography>
                  <Typography variant="body2" sx={{ padding: 2 }}>
                  En esta sección se verán todas las cartas de presentación personalizadas que se han solicitado los alumnos.

                  </Typography>
                  <Button
                    size="small1"
                    color="primary"
                    variant="containded"
                    onClick={() => setActiveTableg("personalizadas")}
                  >
                    Visualizar Cartas Personalizadas
                  </Button>
                </CardContent>
              </Box>
            </Card>
          </Box>
          <Box sx={{ padding: 1 }}>
        <Box
          sx={{
            opacity: showTransition ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          {activeTableg === "genericas" && <Tablagenericas />}
          {activeTableg === "personalizadas" && <Tablaperso />}
        </Box>
      </Box>
        </Box>
      </Box>
    </>
  );
}

export default Cartas;
