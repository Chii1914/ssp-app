import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Select, MenuItem, InputLabel, RadioGroup, FormControlLabel, Radio, FormLabel } from "@mui/material";

const FormModal = ({ open, handleClose, inputs, handleChange, handleSubmit, style }) => (
  <Modal open={open} onClose={handleClose}>
    <Box sx={{ ...style, overflow: "auto", maxHeight: "90vh" }}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Modificación data personal
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="primerNombre"
          label="Ingrese su primer nombre"
          name="primerNombre"
          autoComplete="primer_nombre"
          autoFocus
          value={inputs.primerNombre}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Ingrese su segundo nombre"
          type="text"
          name="segundoNombre"
          id="segundoNombre"
          value={inputs.segundoNombre}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="apellidoPaterno"
          label="Ingrese su primer apellido"
          type="apellidoPaterno"
          id="apellidoPaterno"
          value={inputs.apellidoPaterno}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="apellidoMaterno"
          label="Ingrese su segundo apellido"
          type="text"
          id="apellidoMaterno"
          value={inputs.apellidoMaterno}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="run"
          label="Ingrese su rut sin puntos ni guión"
          type="number"
          id="run"
          value={inputs.run}
          onChange={handleChange}
          inputProps={{ pattern: "[0-9]*" }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="correoInstitucional"
          label="Ingrese su correo institucional"
          type="text"
          id="correoInstitucional"
          value={inputs.correoInstitucional}
          onChange={handleChange}
        />
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormLabel id="sexo">Género</FormLabel>
              <RadioGroup
                defaultValue="femenino"
                name="sexo"
                onChange={handleChange}
                value={inputs.sexo}
              >
                <FormControlLabel
                  value="femenino"
                  control={<Radio />}
                  label="Mujer"
                />
                <FormControlLabel
                  value="masculino"
                  control={<Radio />}
                  label="Hombre"
                />
                <FormControlLabel
                  value="Otro"
                  control={<Radio />}
                  label="No Especifica"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="df">Dígito Verificador</InputLabel>
              <Select
                labelId="df"
                id="df"
                label="df"
                name="df"
                value={inputs.df}
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
            <Grid item xs={6}>
              <InputLabel id="sede">Sede</InputLabel>
              <Select
                labelId="sede"
                id="sede"
                label="sede"
                name="sede"
                value={inputs.sede}
                onChange={handleChange}
              >
                <MenuItem value={"Valparaíso"}>Valparaíso</MenuItem>
                <MenuItem value={"Santiago"}>Santiago</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="anioIngreso">Año de Ingreso</InputLabel>
              <Select
                labelId="anioIngreso"
                id="anioIngreso"
                label="anioIngreso"
                name="anioIngreso"
                value={inputs.anioIngreso}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Array.from({ length: 17 }, (_, i) => (
                  <MenuItem key={i} value={2008 + i}>
                    {2008 + i}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Box>
        <TextField
          margin="normal"
          fullWidth
          name="correoPersonal"
          label="Correo Personal"
          type="correoPersonal"
          id="correoPersonal"
          value={inputs.correoPersonal}
          onChange={handleChange}
          defaultValue={null}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="telefono"
          label="Teléfono"
          type="tel"
          id="telefono"
          value={inputs.telefono}
          onChange={(e) => {
            if (e.target.value === "" || /^[0-9]*$/.test(e.target.value)) {
              handleChange(e);
            }
          }}
        />
        <InputLabel id="ultimoSemAprobado">Último Semestre Aprobado</InputLabel>
        <Select
          labelId="ultimoSemAprobado"
          id="ultimoSemAprobado"
          value={inputs.ultimoSemAprobado}
          label="Último Semestre Aprobado"
          name="ultimoSemAprobado"
          onChange={handleChange}
        >
          <MenuItem value="Primer Semestre">Primer Semestre</MenuItem>
          <MenuItem value="Segundo Semestre">Segundo Semestre</MenuItem>
          <MenuItem value="Tercer Semestre">Tercer Semestre</MenuItem>
          <MenuItem value="Cuarto Semestre">Cuarto Semestre</MenuItem>
          <MenuItem value="Quinto Semestre">Quinto Semestre</MenuItem>
          <MenuItem value="Sexto Semestre">Sexto Semestre</MenuItem>
          <MenuItem value="Séptimo Semestre">Séptimo Semestre</MenuItem>
          <MenuItem value="Octavo Semestre">Octavo Semestre</MenuItem>
          <MenuItem value="Noveno Semestre">Noveno Semestre</MenuItem>
          <MenuItem value="Décimo Semestre">Décimo Semestre</MenuItem>
        </Select>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Modificar Data Personal
        </Button>
      </Box>
    </Box>
  </Modal>
);

export default FormModal;
