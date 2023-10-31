import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, useTheme, useMediaQuery } from "@mui/material";

const defaultTheme = createTheme();

export default function SignIn() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const fontSize = isMobile ? '1em' : isTablet ? '1.2em' : '1.5em';

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '40vh',
          p: isMobile ? 2 : 4,
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Button
            sx={{
              width: isMobile ? '150px' : '250px',
              height: isMobile ? '50px' : '100px',
              border: '3px solid #000000',
              borderRadius: '45px',
              transition: 'all 0.3s',
              cursor: 'pointer',
              background: 'white',
              fontSize,
              fontWeight: 550,
              '&:hover': {
                background: '#06717e',
                color: 'white',
                fontSize: isMobile ? '1.2em' : '1.7em',
              },
            }}
          >
            Iniciar Sesión
          </Button>
        </Box>
        <Box>
          <Button
            sx={{
              width: isMobile ? '150px' : '250px',
              height: isMobile ? '50px' : '100px',
              border: '3px solid #000000',
              borderRadius: '45px',
              transition: 'all 0.3s',
              cursor: 'pointer',
              background: 'white',
              fontSize,
              fontWeight: 550,
              '&:hover': {
                background: '#06717e',
                color: 'white',
                fontSize: isMobile ? '1.2em' : '1.7em',
              },
            }}
          >
            Registrarse
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
