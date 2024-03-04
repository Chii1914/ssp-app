import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';


//Todo function to validate token


const tiers = [
  {
    title: 'Carta Genérica',
    subheader: 'Solicitado # veces',
    
    description: [
      'Se generará automáticamente su Carta genérica. Considere que ésta reemplazará a la más reciente que haya solicitado, creando nuevamente la solicitud.',
    ],
    buttonText: 'Generar',
    buttonVariant: 'contained',
  },
  {
    title: 'Carta Personalizada',
    subheader: 'Solicitado # veces',
    
    description: [
      'Deberá rellenar el formulario para poder genererar la solicitud de Carta Personalizada. Considere que ésta reemplazará a la más reciente que haya solicitado, creando nuevamente la solicitud.',
    ],
    buttonText: 'Generar',
    buttonVariant: 'contained',
  },
  {
    title: 'Postulación Primera Práctica',
    subheader: 'Solicitado # veces',
    price: 'Ver postulaciones',
    description: [
      'Formulario de postulación para su primera práctica profesional.',
    ],
    buttonText: 'Generar',
    buttonVariant: 'contained',
  },
  {
    title: 'Postulación Segunda Práctica',
    subheader: 'Solicitado # veces',
    price:  'Ver postulaciones',
    description: [
      'Formulario de postulación para su segunda práctica profesional.',
    ],
    buttonText: 'Generar',
    buttonVariant: 'contained',
  },
];



const defaultTheme = createTheme();

export default function Options() {
  return (
    <ThemeProvider theme={defaultTheme}>
        
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 10, pb: 6 }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Postulación a Prácticas Profesionales
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '15vh',
        }}>
        <img
                src="https://practicas.administracionpublica-uv.cl/imagenes/logo_sis_practicas.png"
                alt="Logo Practicas Profesionales"
                style={{ 
                  width: '350px', 
                  height: '100px',
                  transform: 'scale(0.8)', // Adjust the scale as needed
                }} // Adjust the size as needed
              />
            </Box>
      </Container>
      {/* End hero unit */}
      <Container maxWidth={false} component="main">
        <Grid container spacing={2} alignItems="flex">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={6} md={4} lg={3} xl={3}>

              <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  //action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent sx={{ flexGrow: 1}}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h5" color="text.primary">
                      {tier.price}
                    </Typography>
                    
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions sx={{mb: 2}}>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
              
            </Grid>
          ))}

          
        </Grid>
        <Box sx={{ mt: 6, mb: 5}}>
       < Typography
          component="h2"
          
          align="center"
          color="text.primary"
        >
         Podrás elegir entre estas cuatro opciones para llevar a cabo la postulación de práctica profesional. Puedes solicitar una carta de recomendación para llevarla a tu futuro empleador o rellenar el formulario para que el/la coordinador(a) de prácticas te ayude en este proceso.
        </Typography>
        </Box>
      </Container>
      
    </ThemeProvider>
  );
}