import React, { useState } from "react";
              import {
                Avatar,
                Box,
                Button,
                Dialog,
                DialogContent,
                Grid,
                InputLabel,
                MenuItem,
                Select,
                TextField,
                Typography,
                Paper,
              } from "@mui/material";
              import { createTheme, ThemeProvider } from "@mui/material/styles";
              import CssBaseline from "@mui/material/CssBaseline";
              import axios from "axios";

              import BackgroundLocal from './Images/valpoback.jpg';
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
const url = 'https://pbs.twimg.com/profile_images/681180785504862208/RNR8RGGM_400x400.jpg';

export default function SignInSide() {
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
    const closeSuccessModal = () => {
      setIsSuccessModalOpen(false);
    };

    const [isFailureModalOpen, setIsFailureModalOpen] = useState(false)

    const closeFailureModal = () => {
      setIsFailureModalOpen(false);
    };

    const [inputs, setInputs] = useState({
        RUN: "",
        direccion_completa: "",
        telefono_emergencia: "",
        nombre_completo: "",
        rol: "",
        categoria: "",
        telefono: "",
        password: "",     
        
    })
    
    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    } 

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            const res = await axios.post("/user/", inputs)
            if(res.status === 200){
              setIsSuccessModalOpen(true);
             
            }
        }catch(err){
          setIsFailureModalOpen(true);
          }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${BackgroundLocal})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Dialog open={isSuccessModalOpen} onClose={closeSuccessModal}>
              <DialogContent>
                <Typography variant="h6">¡Usuario registrado!</Typography>
                <Typography variant="body1">Has registrado correctamente a {inputs.nombre_completo}.</Typography>
              </DialogContent>
            </Dialog>
            <Dialog open={isFailureModalOpen} onClose={closeFailureModal}>
              <DialogContent>
                <Typography variant="h6">Usuario no registrado</Typography>
                <Typography variant="body1">El usuario {inputs.nombre_completo} ya está registrado, o ocurrió un error.</Typography>
              </DialogContent>
            </Dialog>
           
            <Typography component="h1" variant="h5">
              Datos del Alumno
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="RUN"
                label="Ingrese su primer nombre"
                name="RUN"
                autoComplete="username"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="direccion_completa"
                label="Ingrese su segundo nombre"
                type="text"
                id="direccion_completa"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="telefono_emergencia"
                label="Ingrese su primer apellido"
                type="text"
                id="telefono_emergencia"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="nombre_completo"
                label="Ingrese su segundo apellido"
                type="text"
                id="nombre_completo"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="nombre_completo"
                label="Ingrese su rut sin puntos ni guión"
                type="text"
                id="nombre_completo"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="nombre_completo"
                label="Ingrese su correo institucional"
                type="text"
                id="nombre_completo"
                onChange={handleChange}
              />
    

              <Box>
                  <Grid container spacing={3}> {/* Wrapper Grid container */}
                      <Grid item xs={6}> {/* First Grid item */}
                          <InputLabel id="df">Dígito Verificador</InputLabel>
                          <Select
                              labelId="rol"
                              id="rol"
                              label="rol"
                              name="rol"
                              value={inputs.rol}
                              onChange={handleChange}
                          >
                              <MenuItem value={"0"}>0</MenuItem>
                              <MenuItem value={"1"}>1</MenuItem>
                              <MenuItem value={"2"}>2</MenuItem>
                              <MenuItem value={"3"}>3</MenuItem>
                              <MenuItem value={"4"}>4</MenuItem>
                              <MenuItem value={"5"}>5</MenuItem>
                              <MenuItem value={"6"}>6</MenuItem>
                              <MenuItem value={"7"}>7</MenuItem>
                              <MenuItem value={"8"}>8</MenuItem>
                              <MenuItem value={"9"}>9</MenuItem>
                              <MenuItem value={"k"}>k</MenuItem>
                          </Select>
                      </Grid>

                      <Grid item xs={6}> {/* Second Grid item */}
                          <InputLabel id="genero">Sexo</InputLabel>
                          <Select
                              labelId="categoria"
                              id="categoria"
                              label="categoria"
                              name="categoria"
                              value={inputs.categoria}
                              onChange={handleChange}
                          >
                              <MenuItem value={"M"}>Mujer</MenuItem>
                              <MenuItem value={"H"}>Hombre</MenuItem>
                          </Select>
                      </Grid>

                      <Grid item xs={6}> {/* Second Grid item */}
                          <InputLabel id="Sede">Sede</InputLabel>
                          <Select
                              labelId="categoria"
                              id="categoria"
                              label="categoria"
                              name="categoria"
                              value={inputs.categoria}
                              onChange={handleChange}
                          >
                              <MenuItem value={"V"}>Valparaíso</MenuItem>
                              <MenuItem value={"S"}>Santiago</MenuItem>
                          </Select>
                      </Grid>
                      <Grid item xs={6}> {/* Second Grid item */}
                          <InputLabel id="agno">Año de Ingreso</InputLabel>
                          <Select
                              labelId="categoria"
                              id="categoria"
                              label="categoria"
                              name="categoria"
                              value={inputs.categoria}
                              onChange={handleChange}
                          >
                              <MenuItem value={"8"}>2008</MenuItem>
                              <MenuItem value={"H"}>2023</MenuItem>
                          </Select>
                      </Grid>
                  </Grid>
              </Box>
              <TextField
                margin="normal"
                required
                fullWidth
                name="telefono"
                label="Correo personal"
                type="text"
                id="telefono"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña asignada al usuario"
                type="password"
                id="password"
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Registrar persona
              </Button>           
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}