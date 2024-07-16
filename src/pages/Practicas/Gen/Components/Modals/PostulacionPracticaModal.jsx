import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; //npm install @mui/x-date-pickers
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import CustomTable from './TableHorario/Tabla';
import TimePickerValue from '../TimePicker/TimePicker';

dayjs.extend(localizedFormat);
dayjs.locale('es');

const ModalPostulacionPractica = ({ style, open, handleClose, handleChangePr, handleButtonClickPostulacion, postulacion, setPostulacion , horario, handleChangeHorario, /*calcularSuma*/}) => {

  const data = [
    [
      "Lunes",
      <TimePickerValue hora={horario.lunes.manana.horaInicio} setHorario={(nuevaHora) => handleChangeHorario('lunes', 'manana', 'horaInicio', nuevaHora)} />,
      <TimePickerValue hora={horario.lunes.manana.horaTermino} setHorario={(nuevaHora) => handleChangeHorario('lunes', 'manana', 'horaTermino', nuevaHora)} />,
      <TimePickerValue hora={horario.lunes.tarde.horaInicio} setHorario={(nuevaHora) => handleChangeHorario('lunes', 'tarde', 'horaInicio', nuevaHora)} />,
      <TimePickerValue hora={horario.lunes.tarde.horaTermino} setHorario={(nuevaHora) => handleChangeHorario('lunes', 'tarde', 'horaTermino', nuevaHora)} />,
      <div>{horario.lunes.horas_totales}</div>
    ],
    [
      "Martes",
      <TimePickerValue hora={horario.martes.manana.horaInicio} setHorario={(nuevaHora) => handleChangeHorario('martes', 'manana', 'horaInicio', nuevaHora)} />,
      <TimePickerValue hora={horario.martes.manana.horaTermino} setHorario={(nuevaHora) => handleChangeHorario('martes', 'manana', 'horaTermino', nuevaHora)} />,
      <TimePickerValue hora={horario.martes.tarde.horaInicio} setHorario={(nuevaHora) => handleChangeHorario('martes', 'tarde', 'horaInicio', nuevaHora)} />,
      <TimePickerValue hora={horario.martes.tarde.horaTermino} setHorario={(nuevaHora) => handleChangeHorario('martes', 'tarde', 'horaTermino', nuevaHora)} />,
      <div>{horario.martes.horas_totales}</div>
    ],
    [
      "Miércoles",
      <TimePickerValue hora={horario.miercoles.manana.horaInicio} setHorario={(nuevaHora) => handleChangeHorario('miercoles', 'manana', 'horaInicio', nuevaHora)} />,
      <TimePickerValue hora={horario.miercoles.manana.horaTermino} setHorario={(nuevaHora) => handleChangeHorario('miercoles', 'manana', 'horaTermino', nuevaHora)} />,
      <TimePickerValue hora={horario.miercoles.tarde.horaInicio} setHorario={(nuevaHora) => handleChangeHorario('miercoles', 'tarde', 'horaInicio', nuevaHora)} />,
      <TimePickerValue hora={horario.miercoles.tarde.horaTermino} setHorario={(nuevaHora) => handleChangeHorario('miercoles', 'tarde', 'horaTermino', nuevaHora)} />,
      <div>{horario.miercoles.horas_totales}</div>
    ],
    [
      "Jueves",
      <TimePickerValue hora={horario.jueves.manana.horaInicio} setHorario={(nuevaHora) => handleChangeHorario('jueves', 'manana', 'horaInicio', nuevaHora)} />,
      <TimePickerValue hora={horario.jueves.manana.horaTermino} setHorario={(nuevaHora) => handleChangeHorario('jueves', 'manana', 'horaTermino', nuevaHora)} />,
      <TimePickerValue hora={horario.jueves.tarde.horaInicio} setHorario={(nuevaHora) => handleChangeHorario('jueves', 'tarde', 'horaInicio', nuevaHora)} />,
      <TimePickerValue hora={horario.jueves.tarde.horaTermino} setHorario={(nuevaHora) => handleChangeHorario('jueves', 'tarde', 'horaTermino', nuevaHora)} />,
      <div>{horario.jueves.horas_totales}</div>
    ],
    [
      "Viernes",
      <TimePickerValue hora={horario.viernes.manana.horaInicio} setHorario={(nuevaHora) => handleChangeHorario('viernes', 'manana', 'horaInicio', nuevaHora)} />,
      <TimePickerValue hora={horario.viernes.manana.horaTermino} setHorario={(nuevaHora) => handleChangeHorario('viernes', 'manana', 'horaTermino', nuevaHora)} />,
      <TimePickerValue hora={horario.viernes.tarde.horaInicio} setHorario={(nuevaHora) => handleChangeHorario('viernes', 'tarde', 'horaInicio', nuevaHora)} />,
      <TimePickerValue hora={horario.viernes.tarde.horaTermino} setHorario={(nuevaHora) => handleChangeHorario('viernes', 'tarde', 'horaTermino', nuevaHora)} />,
      <div>{horario.viernes.horas_totales}</div>
    ],
  ];
  
  
    return (
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, overflow: "auto", maxHeight: "90vh" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Formulario para postulación a {postulacion.practica} Práctica Profesional
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Este formulario se puede enviar una sola vez. En el caso de cometer un error en los datos o querer revisarlo, se debe dirigir a la oficina del coordinador de prácticas.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <TextField
              select
              id="ultimoSemAprobado"
              value={postulacion.ultimoSemAprobado}
              label="Último Semestre Aprobado"
              name="ultimoSemAprobado"
              onChange={handleChangePr}
              fullWidth
            >
              {['Primer', 'Segundo', 'Tercer', 'Cuarto', 'Quinto', 'Sexto', 'Séptimo', 'Octavo', 'Noveno', 'Décimo'].map((semestre, index) => (
                <MenuItem key={index} value={`${semestre} Semestre`}>{`${semestre} Semestre`}</MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Homologación
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Seleccione si se encuentra en este momento solicitando una Homologación de su práctica profesional.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="homologacion"
                    checked={postulacion.homologacion}
                    onChange={handleChangePr}
                    color="primary"
                  />
                }
                label="Homologación"
              />
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
                value={postulacion.nombreOrganismo}
                onChange={handleChangePr}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="nombre_supervisor"
                label="Nombre del Supervisor"
                name="nombreSupervisor"
                autoComplete="nombre_supervisor"
                value={postulacion.nombreSupervisor}
                onChange={handleChangePr}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="cargo_supervisor"
                label="Cargo del Supervisor"
                name="cargoSupervisor"
                autoComplete="cargo_supervisor"
                value={postulacion.cargoSupervisor}
                onChange={handleChangePr}
              />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="correo_supervisor"
                    label="Correo del Supervisor"
                    name="correoSupervisor"
                    autoComplete="correo_supervisor"
                    value={postulacion.correoSupervisor}
                    onChange={handleChangePr}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="telefono_supervisor"
                    label="Teléfono del Supervisor"
                    name="telefonoSupervisor"
                    autoComplete="telefono_supervisor"
                    value={postulacion.telefonoSupervisor}
                    onChange={handleChangePr}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="division_departamento"
                    label="División / Departamento"
                    name="divisionDepartamento"
                    autoComplete="division_departamento"
                    value={postulacion.divisionDepartamento}
                    onChange={handleChangePr}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="seccion_unidad"
                    label="Sección / Unidad"
                    name="seccionUnidad"
                    autoComplete="seccion_unidad"
                    value={postulacion.seccionUnidad}
                    onChange={handleChangePr}
                  />
                </Grid>
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="direccion_organismo"
                label="Dirección del Organismo"
                name="direccionOrganismo"
                autoComplete="direccion_organismo"
                value={postulacion.direccionOrganismo}
                onChange={handleChangePr}
              />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="region"
                    label="Región"
                    name="region"
                    autoComplete="region"
                    value={postulacion.region}
                    onChange={handleChangePr}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="comuna"
                    label="Comuna"
                    name="comuna"
                    autoComplete="comuna"
                    value={postulacion.comuna}
                    onChange={handleChangePr}
                  >
                  </TextField>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Jornada de Práctica Profesional
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker 
                            label="Fecha de Inicio"
                            format='DD/MM/YYYY'
                            fullWidth
                            value={postulacion.fechaInicio}
                            onChange={(date) => { setPostulacion({ ...postulacion, fechaInicio: date }) }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker 
                            label="Fecha de Término"
                            format='DD/MM/YYYY'
                            fullWidth
                            value={postulacion.fechaTermino}
                            onChange={(date) => { setPostulacion({ ...postulacion, fechaTermino: date }) }}
                            />
                        </DemoContainer>
                      </LocalizationProvider>
                </Grid>
            </Grid>
            
              
            <Box sx={{ mt: 2 }}>
              <Typography id="modal-modal-description">
                  Advertencia: El ingreso del horario debe tener un formato de 24 horas. Por ejemplo, a las doce del día se ingresa como 12:00, mientras que las doce de la noche se ingresa como 00:00.
              </Typography>
              
              <Box sx= {{ mt: 2 }}>
                  <CustomTable 
                    data = {data} 
                    horas_semanales = {horario.horas_semanales}/>
              </Box>

            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Descripción de Actividades
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Breve descripción sobre labores en práctica (900 caracteres máximo).
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="actividades"
                label="Descripción de Actividades"
                name="actividades"
                value={postulacion.descripcion}
                onChange={handleChangePr}
                multiline
                rows={4}
                inputProps={{ maxLength: 900 }}
              />
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
              <Button
                  onClick={handleButtonClickPostulacion}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
              >
                  Enviar postulación a {postulacion.practica} Práctica
              </Button>
          </Box>
        </Box>
    </Modal>
    );
  };
  
  export default ModalPostulacionPractica;