import React from 'react';
import { Modal, Box, Typography, TextField, MenuItem, Button, Grid, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const ModalPersonalizadas = ({ style, open, setOpen,  handleButtonClickPersonalizada, personalizada, handleChangePersonalizada }) => {
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ ...style, overflow: "auto", maxHeight: "90vh" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Generar Carta Personalizada
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Seleccione el último semestre que usted aprobó antes de generar la carta:
            </Typography>
            <Box sx={{ mt: 2 }}>
              <TextField
                select
                labelId="ultimoSemAprobado"
                id="ultimoSemAprobado"
                value={personalizada.ultimoSemAprobado}
                label="Último Semestre Aprobado"
                name="ultimoSemAprobado"
                onChange={handleChangePersonalizada}
                fullWidth
              >
                {['Primer', 'Segundo', 'Tercer', 'Cuarto', 'Quinto', 'Sexto', 'Séptimo', 'Octavo', 'Noveno', 'Décimo'].map((semestre, index) => (
                  <MenuItem key={index} value={`${semestre} Semestre`}>{`${semestre} Semestre`}</MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Datos del Organismo
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="nombre_organismo"
                label="Nombre del Organismo"
                name="nombreOrganismo"
                autoComplete="nombre_organismo"
                value={personalizada.nombreOrganismo}
                onChange={handleChangePersonalizada}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="nombre_supervisor"
                label="Nombre del Supervisor"
                name="nombreSupervisor"
                autoComplete="nombre_supervisor"
                value={personalizada.nombreSupervisor}
                onChange={handleChangePersonalizada}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="cargo_supervisor"
                label="Cargo del Supervisor"
                name="cargoSupervisor"
                autoComplete="cargo_supervisor"
                value={personalizada.cargoSupervisor}
                onChange={handleChangePersonalizada}
              />
              <Box>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <FormLabel id="sexo">Género</FormLabel>
                    <RadioGroup
                      defaultValue="femenino"
                      name="sexoSupervisor"
                      onChange={handleChangePersonalizada}
                      value={personalizada.sexoSupervisor}
                    >
                      <FormControlLabel value="femenino" control={<Radio />} label="Mujer" />
                      <FormControlLabel value="masculino" control={<Radio />} label="Hombre" />
                      <FormControlLabel value="Otro" control={<Radio />} label="No Especifica" />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Box>
              <TextField
                margin="normal"
                required
                fullWidth
                id="division_departamento"
                label="Ingrese División / Departamento"
                name="divisionDepartamento"
                autoComplete="division_departamento"
                value={personalizada.divisionDepartamento}
                onChange={handleChangePersonalizada}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="seccion_unidad"
                label="Sección / Unidad"
                name="seccionUnidad"
                autoComplete="seccion_unidad"
                value={personalizada.seccionUnidad}
                onChange={handleChangePersonalizada}
              />
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button
              onClick={handleButtonClickPersonalizada}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Generar Carta Personalizada
            </Button>
          </Box>
        </Box>
      </Modal>
    );
    }

export default ModalPersonalizadas;