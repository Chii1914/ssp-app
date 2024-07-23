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
import TimePickerValue from './TableHorario/TimePicker';

dayjs.extend(localizedFormat);
dayjs.locale('es');

const ModalPostulacionPractica = ({ style, open, handleClose, practicas, setPracticas, handleChangePracticas, handleButtonClickPostulacion, calcularHorasPorDia, horasSemana}) => {

  const handleKeyDown = (e) => {
    if (
      e.key === 'Backspace' ||
      e.key === 'Tab' ||
      e.key === 'Enter' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      e.key === 'Delete'
    ) {
      return;
    }
  
    // Permite solo números.
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };
  
  const handleChangeNum = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    handleChangePracticas(e);
  };

  const adapter = (nombre, valor) => {
    return {
        target: {
            name: nombre,
            value: valor,
            type: 'text'
        }
    };
  };

  const data = [
    [
      'Lunes', 
      <TimePickerValue hora={practicas.horario.horaLunesMananaEntrada === "" ? null : dayjs(practicas.horario.horaLunesMananaEntrada, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaLunesMananaEntrada', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaLunesMananaSalida === "" ? null : dayjs(practicas.horario.horaLunesMananaSalida, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaLunesMananaSalida', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaLunesTardeEntrada === "" ? null : dayjs(practicas.horario.horaLunesTardeEntrada, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaLunesTardeEntrada', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaLunesTardeSalida === "" ? null : dayjs(practicas.horario.horaLunesTardeSalida, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaLunesTardeSalida', hora ? hora.format("HH:mm A") : ""))}/>,
      <div>{calcularHorasPorDia("Lunes")} </div>
    ],
    [
      'Martes',
      <TimePickerValue hora={practicas.horario.horaMartesMananaEntrada === "" ? null : dayjs(practicas.horario.horaMartesMananaEntrada, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMartesMananaEntrada', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaMartesMananaSalida === "" ? null : dayjs(practicas.horario.horaMartesMananaSalida, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMartesMananaSalida', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaMartesTardeEntrada === "" ? null : dayjs(practicas.horario.horaMartesTardeEntrada, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMartesTardeEntrada', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaMartesTardeSalida === "" ? null : dayjs(practicas.horario.horaMartesTardeSalida, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMartesTardeSalida', hora ? hora.format("HH:mm A") : ""))}/>,
      <div>{calcularHorasPorDia("Martes")} </div>
    ],
    [
      'Miércoles',
      <TimePickerValue hora={practicas.horario.horaMiercolesMananaEntrada === "" ? null : dayjs(practicas.horario.horaMiercolesMananaEntrada, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMiercolesMananaEntrada', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaMiercolesMananaSalida === "" ? null : dayjs(practicas.horario.horaMiercolesMananaSalida, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMiercolesMananaSalida', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaMiercolesTardeEntrada === "" ? null : dayjs(practicas.horario.horaMiercolesTardeEntrada, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMiercolesTardeEntrada', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaMiercolesTardeSalida === "" ? null : dayjs(practicas.horario.horaMiercolesTardeSalida, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMiercolesTardeSalida', hora ? hora.format("HH:mm A") : ""))}/>,
      <div>{calcularHorasPorDia("Miercoles")} </div>
    ],
    [
      'Jueves',
      <TimePickerValue hora={practicas.horario.horaJuevesMananaEntrada === "" ? null : dayjs(practicas.horario.horaJuevesMananaEntrada, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaJuevesMananaEntrada', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaJuevesMananaSalida === "" ? null : dayjs(practicas.horario.horaJuevesMananaSalida, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaJuevesMananaSalida', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaJuevesTardeEntrada === "" ? null : dayjs(practicas.horario.horaJuevesTardeEntrada, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaJuevesTardeEntrada', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaJuevesTardeSalida === "" ? null : dayjs(practicas.horario.horaJuevesTardeSalida, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaJuevesTardeSalida', hora ? hora.format("HH:mm A") : ""))}/>,
      <div>{calcularHorasPorDia("Jueves")} </div>
    ],
    [
      'Viernes',
      <TimePickerValue hora={practicas.horario.horaViernesMananaEntrada === "" ? null : dayjs(practicas.horario.horaViernesMananaEntrada, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaViernesMananaEntrada', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaViernesMananaSalida === "" ? null : dayjs(practicas.horario.horaViernesMananaSalida, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaViernesMananaSalida', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaViernesTardeEntrada === "" ? null : dayjs(practicas.horario.horaViernesTardeEntrada, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaViernesTardeEntrada', hora ? hora.format("HH:mm A") : ""))}/>,
      <TimePickerValue hora={practicas.horario.horaViernesTardeSalida === "" ? null : dayjs(practicas.horario.horaViernesTardeSalida, "HH:mm A")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaViernesTardeSalida', hora ? hora.format("HH:mm A") : ""))}/>,
      <div>{calcularHorasPorDia("Viernes")} </div>
    ],

  ];
  
    return (
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, overflow: "auto", maxHeight: "90vh" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Formulario para postulación a {practicas.practica.ocasion} Práctica Profesional
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Este formulario se puede enviar una sola vez. En el caso de cometer un error en los datos o querer revisarlo, se debe dirigir a la oficina del coordinador de prácticas.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <TextField
              select
              id="semestre.UltSem"
              value={practicas.semestre.UltSem}
              label="Último Semestre Aprobado"
              name="semestre.UltSem"
              onChange={handleChangePracticas}
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
                    id = "practica_homologacion"
                    name="practica.homologacion"
                    checked={practicas.practica.homologacion}
                    onChange={handleChangePracticas}
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
                name="createOrganismo.nombreOrganismo"
                autoComplete="nombre_organismo"
                value={practicas.createOrganismo.nombreOrganismo}
                onChange={handleChangePracticas}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="nombre_supervisor"
                label="Nombre del Supervisor"
                name="createSupervisor.nombre"
                autoComplete="nombre_supervisor"
                value={practicas.createSupervisor.nombre}
                onChange={handleChangePracticas}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="cargo_supervisor"
                label="Cargo del Supervisor"
                name="createSupervisor.cargo"
                autoComplete="cargo_supervisor"
                value={practicas.createSupervisor.cargo}
                onChange={handleChangePracticas}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="correo_supervisor"
                label="Correo del Supervisor"
                name="createSupervisor.correo"
                autoComplete="correo_supervisor"
                value={practicas.createSupervisor.correo}
                onChange={handleChangePracticas}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="telefono_organismo"
                label="Teléfono"
                name="createOrganismo.telefono"
                autoComplete="telefono_organismo"
                value={practicas.createOrganismo.telefono === 0 || practicas.createOrganismo.telefono === "NaN" ? "" : practicas.createOrganismo.telefono}
                onChange={handleChangeNum}
                onKeyDown={handleKeyDown}
                inputProps={{ maxLength: 9 }}
              />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="division_departamento"
                    label="División / Departamento"
                    name="createOrganismo.divisionDepartamento"
                    autoComplete="division_departamento"
                    value={practicas.createOrganismo.divisionDepartamento}
                    onChange={handleChangePracticas}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="seccion_unidad"
                    label="Sección / Unidad"
                    name="createOrganismo.seccionUnidad"
                    autoComplete="seccion_unidad"
                    value={practicas.createOrganismo.seccionUnidad}
                    onChange={handleChangePracticas}
                  />
                </Grid>
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="direccion_organismo"
                label="Dirección del Organismo"
                name="createOrganismo.direccion"
                autoComplete="direccion_organismo"
                value={practicas.createOrganismo.direccion}
                onChange={handleChangePracticas}
              />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="region"
                    label="Región"
                    name="createOrganismo.otraRegion"
                    autoComplete="region"
                    value={practicas.createOrganismo.otraRegion}
                    onChange={handleChangePracticas}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="comuna"
                    label="Comuna"
                    name="createOrganismo.otraComuna"
                    autoComplete="comuna"
                    value={practicas.createOrganismo.otraComuna}
                    onChange={handleChangePracticas}
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
                            id = "fecha_inicio"
                            label="Fecha de Inicio"
                            format='DD/MM/YYYY'
                            fullWidth
                            value={practicas.practica.fechaInicio === "" ? null : dayjs(practicas.practica.fechaInicio, 'DD-MM-YYYY')}
                            onChange={(date) => { setPracticas({ ...practicas, practica: {...practicas.practica, fechaInicio: date ? date.format("DD-MM-YYYY") : ""}}) }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                            id = "fecha_termino"
                            label="Fecha de Término"
                            format='DD/MM/YYYY'
                            fullWidth
                            value={practicas.practica.fechaTermino === "" ? null : dayjs(practicas.practica.fechaTermino, 'DD-MM-YYYY') }
                            onChange={(date) => { setPracticas({ ...practicas, practica: {...practicas.practica, fechaTermino: date ? date.format("DD-MM-YYYY") : ""}})}}
                            />
                        </DemoContainer>
                      </LocalizationProvider>
                </Grid>
            </Grid>  
            <Box sx={{ mt: 2 }}>
              <Typography id="modal-modal-title" sx={{ mt: 2 }} variant='h6' component='h2'>
                Horario de Práctica Profesional
              </Typography>
              <Typography id="modal-modal-description">
                Ingrese el horario de práctica profesional en formato de 12 horas (am/pm).
              </Typography>
            </Box>
            <Box sx= {{ mt: 2 }}>
              <CustomTable
                id = "horario"
                data = {data}
                horas_semanales = {horasSemana}
                />
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
                name="practica.descripcion"
                value={practicas.practica.descripcion}
                onChange={handleChangePracticas}
                multiline
                rows={4}
                inputProps={{ maxLength: 900 }}
              />
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
              <Button
                id = "enviar_postulacion"
                onClick={handleButtonClickPostulacion}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Enviar postulación a {practicas.practica.ocasion} Práctica
              </Button>
          </Box>
        </Box>
    </Modal>
    );
  };
  
  export default ModalPostulacionPractica;