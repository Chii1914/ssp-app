import React from 'react';
import { useState } from 'react';
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
import CustomTable from './TableHorario/CustomTable';

dayjs.extend(localizedFormat);
dayjs.locale('es');

let mensajeFechaInicio = "";
let mensajeFechaTermino = "";

const ModalPostulacionPractica = ({ style, open, setOpen, practicas, regiones, comunas,  setPracticas, handleChangePracticas, handleButtonClickPostulacion}) => {
  
  const [errors, setErrors] = useState({});

  const handleButtonClick = () => {

    const newErrors = {};

    if (!practicas.semestre.UltSem) newErrors.UltSem = true;
    if (!practicas.createOrganismo.nombreOrganismo) newErrors.nombreOrganismo = true;
    if (!practicas.createSupervisor.nombre) newErrors.nombreSupervisor = true;
    if (!practicas.createSupervisor.cargo) newErrors.cargoSupervisor = true;
    if (!practicas.createOrganismo.divisionDepartamento) newErrors.divisionDepartamento = true;
    if (!practicas.createOrganismo.seccionUnidad) newErrors.seccionUnidad = true;
    if (!practicas.createSupervisor.correo) newErrors.correoSupervisor = true;
    if (!practicas.createOrganismo.telefono) newErrors.telefonoOrganismo = true;
    if (!practicas.createOrganismo.direccion) newErrors.direccionOrganismo = true;
    if (!practicas.createOrganismo.otraRegion) newErrors.region = true;
    if (!practicas.createOrganismo.otraComuna) newErrors.comuna = true;
    if (!practicas.practica.descripcion) newErrors.descripcion = true;
    if (!practicas.horario.totalHoras || parseFloat(practicas.horario.totalHoras) <= 0 || practicas.horario.totalHoras === "NaN") newErrors.totalHoras = true;

    if(!practicas.practica.fechaInicio){
      newErrors.fechaInicio = true;
      mensajeFechaInicio = "Campo Obligatorio";
    }
    else if (dayjs(practicas.practica.fechaInicio,'YYYY-MM-DD').isBefore(dayjs().startOf('day'))){
      newErrors.fechaInicio = true;
      mensajeFechaInicio = "No puede ser una fecha anterior al dia de hoy";
    }

    if (!practicas.practica.fechaTermino){ 
      newErrors.fechaTermino = true;
      mensajeFechaTermino = "Campo Obligatorio";
    }
    else if (dayjs(practicas.practica.fechaTermino,'YYYY-MM-DD').isBefore(dayjs().startOf('day'))){
      newErrors.fechaTermino = true;
      mensajeFechaTermino = "No puede ser una fecha anterior al día de hoy";
    }
    else if (dayjs(practicas.practica.fechaTermino,'YYYY-MM-DD').isSame(dayjs(practicas.practica.fechaInicio,'YYYY-MM-DD'),'day')){
      newErrors.fechaTermino = true;
      mensajeFechaTermino = "No puede ser la misma fecha que la fecha de inicio";
    }

    if((practicas.horario.horaLunesMananaEntrada && !(practicas.horario.horaLunesMananaSalida)) || (!(practicas.horario.horaLunesMananaEntrada) && practicas.horario.horaLunesMananaSalida)){
      newErrors.lunesMananaIncompleto = true;
    }
    else if(dayjs(practicas.horario.horaLunesMananaSalida, "HH:mm").isBefore(dayjs(practicas.horario.horaLunesMananaEntrada, "HH:mm")) || dayjs(practicas.horario.horaLunesMananaSalida, "HH:mm").isSame(dayjs(practicas.horario.horaLunesMananaEntrada, "HH:mm"))){
      newErrors.lunesMananaDesfasado = true;
    }

    if((practicas.horario.horaLunesTardeEntrada && !(practicas.horario.horaLunesTardeSalida)) || (!(practicas.horario.horaLunesTardeEntrada) && practicas.horario.horaLunesTardeSalida)){
      newErrors.lunesTardeIncompleto = true;
    }
    else if(dayjs(practicas.horario.horaLunesTardeSalida, "HH:mm").isBefore(dayjs(practicas.horario.horaLunesTardeEntrada, "HH:mm")) || dayjs(practicas.horario.horaLunesTardeSalida, "HH:mm").isSame(dayjs(practicas.horario.horaLunesTardeEntrada, "HH:mm"))){
      newErrors.lunesTardeDesfasado = true;
    }

    if((practicas.horario.horaMartesMananaEntrada && !(practicas.horario.horaMartesMananaSalida)) || (!(practicas.horario.horaMartesMananaEntrada) && practicas.horario.horaMartesMananaSalida)){
      newErrors.martesMananaIncompleto = true;
    }
    else if(dayjs(practicas.horario.horaMartesMananaSalida, "HH:mm").isBefore(dayjs(practicas.horario.horaMartesMananaEntrada, "HH:mm")) || dayjs(practicas.horario.horaMartesMananaSalida, "HH:mm").isSame(dayjs(practicas.horario.horaMartesMananaEntrada, "HH:mm"))){
      newErrors.martesMananaDesfasado = true;
    }

    if((practicas.horario.horaMartesTardeEntrada && !(practicas.horario.horaMartesTardeSalida)) || (!(practicas.horario.horaMartesTardeEntrada) && practicas.horario.horaMartesTardeSalida)){
      newErrors.martesTardeIncompleto = true;
    }
    else if(dayjs(practicas.horario.horaMartesTardeSalida, "HH:mm").isBefore(dayjs(practicas.horario.horaMartesTardeEntrada, "HH:mm")) || dayjs(practicas.horario.horaMartesTardeSalida, "HH:mm").isSame(dayjs(practicas.horario.horaMartesTardeEntrada, "HH:mm"))){
      newErrors.martesTardeDesfasado = true;
    }

    if((practicas.horario.horaMiercolesMananaEntrada && !(practicas.horario.horaMiercolesMananaSalida)) || (!(practicas.horario.horaMiercolesMananaEntrada) && practicas.horario.horaMiercolesMananaSalida)){
      newErrors.miercolesMananaIncompleto = true;
    }
    else if(dayjs(practicas.horario.horaMiercolesMananaSalida, "HH:mm").isBefore(dayjs(practicas.horario.horaMiercolesMananaEntrada, "HH:mm")) || dayjs(practicas.horario.horaMiercolesMananaSalida, "HH:mm").isSame(dayjs(practicas.horario.horaMiercolesMananaEntrada, "HH:mm"))){
      newErrors.miercolesMananaDesfasado = true;
    }

    if((practicas.horario.horaMiercolesTardeEntrada && !(practicas.horario.horaMiercolesTardeSalida)) || (!(practicas.horario.horaMiercolesTardeEntrada) && practicas.horario.horaMiercolesTardeSalida)){
      newErrors.miercolesTardeIncompleto = true;
    }
    else if(dayjs(practicas.horario.horaMiercolesTardeSalida, "HH:mm").isBefore(dayjs(practicas.horario.horaMiercolesTardeEntrada, "HH:mm")) || dayjs(practicas.horario.horaMiercolesTardeSalida, "HH:mm").isSame(dayjs(practicas.horario.horaMiercolesTardeEntrada, "HH:mm"))){
      newErrors.miercolesTardeDesfasado = true;
    }

    if((practicas.horario.horaJuevesMananaEntrada && !(practicas.horario.horaJuevesMananaSalida)) || (!(practicas.horario.horaJuevesMananaEntrada) && practicas.horario.horaJuevesMananaSalida)){
      newErrors.juevesMananaIncompleto = true;
    }
    else if(dayjs(practicas.horario.horaJuevesMananaSalida, "HH:mm").isBefore(dayjs(practicas.horario.horaJuevesMananaEntrada, "HH:mm")) || dayjs(practicas.horario.horaJuevesMananaSalida, "HH:mm").isSame(dayjs(practicas.horario.horaJuevesMananaEntrada, "HH:mm"))){
      newErrors.juevesMananaDesfasado = true;
    }

    if((practicas.horario.horaJuevesTardeEntrada && !(practicas.horario.horaJuevesTardeSalida)) || (!(practicas.horario.horaJuevesTardeEntrada) && practicas.horario.horaJuevesTardeSalida)){
      newErrors.juevesTardeIncompleto = true;
    }
    else if(dayjs(practicas.horario.horaJuevesTardeSalida, "HH:mm").isBefore(dayjs(practicas.horario.horaJuevesTardeEntrada, "HH:mm")) || dayjs(practicas.horario.horaJuevesTardeSalida, "HH:mm").isSame(dayjs(practicas.horario.horaJuevesTardeEntrada, "HH:mm"))){
      newErrors.juevesTardeDesfasado = true;
    }

    if((practicas.horario.horaViernesMananaEntrada && !(practicas.horario.horaViernesMananaSalida)) || (!(practicas.horario.horaViernesMananaEntrada) && practicas.horario.horaViernesMananaSalida)){
      newErrors.viernesMananaIncompleto = true;
    }
    else if(dayjs(practicas.horario.horaViernesMananaSalida, "HH:mm").isBefore(dayjs(practicas.horario.horaViernesMananaEntrada, "HH:mm")) || dayjs(practicas.horario.horaViernesMananaSalida, "HH:mm").isSame(dayjs(practicas.horario.horaViernesMananaEntrada, "HH:mm"))){
      newErrors.viernesMananaDesfasado = true;
    }

    if((practicas.horario.horaViernesTardeEntrada && !(practicas.horario.horaViernesTardeSalida)) || (!(practicas.horario.horaViernesTardeEntrada) && practicas.horario.horaViernesTardeSalida)){
      newErrors.viernesTardeIncompleto = true;
    }
    else if(dayjs(practicas.horario.horaViernesTardeSalida, "HH:mm").isBefore(dayjs(practicas.horario.horaViernesTardeEntrada, "HH:mm")) || dayjs(practicas.horario.horaViernesTardeSalida, "HH:mm").isSame(dayjs(practicas.horario.horaViernesTardeEntrada, "HH:mm"))){
      newErrors.viernesTardeDesfasado = true;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleButtonClickPostulacion();
    }
  };

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
    e.target.value = parseInt(e.target.value.replace(/[^0-9]/g, ''));
    handleChangePracticas(e);
  };
  
  const filteredComunas = comunas.filter(
    (comuna) => comuna.idRegion === practicas.createOrganismo.regionId
  );

  const menuProps = {
    PaperProps: {
      style: {
        maxHeight: 224, // Limita la altura del menú desplegable (6 elementos aprox.)
        width: 250,
      },
    },
  };

    return (
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ ...style, overflow: "auto", maxHeight: "90vh", maxWidth: "125vh" }}>
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
              error = {errors.UltSem}
              helperText={errors.UltSem ? "Este campo es obligatorio" : ""}
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
                    id = "practica.homologacion"
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
                id="createOrganismo.nombreOrganismo"
                label="Nombre del Organismo"
                name="createOrganismo.nombreOrganismo"
                autoComplete="nombre_organismo"
                value={practicas.createOrganismo.nombreOrganismo}
                onChange={handleChangePracticas}
                error = {errors.nombreOrganismo}
                helperText={errors.nombreOrganismo ? "Este campo es obligatorio" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="createSupervisor.nombre"
                label="Nombre del Supervisor"
                name="createSupervisor.nombre"
                autoComplete="nombre_supervisor"
                value={practicas.createSupervisor.nombre}
                onChange={handleChangePracticas}
                error = {errors.nombreSupervisor}
                helperText={errors.nombreSupervisor ? "Este campo es obligatorio" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="createSupervisor.cargo"
                label="Cargo del Supervisor"
                name="createSupervisor.cargo"
                autoComplete="cargo_supervisor"
                value={practicas.createSupervisor.cargo}
                onChange={handleChangePracticas}
                error = {errors.cargoSupervisor}
                helperText={errors.cargoSupervisor ? "Este campo es obligatorio" : ""}

              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="createSupervisor.correo"
                label="Correo del Supervisor"
                name="createSupervisor.correo"
                autoComplete="correo_supervisor"
                value={practicas.createSupervisor.correo}
                onChange={handleChangePracticas}
                error = {errors.correoSupervisor}
                helperText={errors.correoSupervisor ? "Este campo es obligatorio" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="createOrganismo.telefono"
                label="Teléfono"
                name="createOrganismo.telefono"
                autoComplete="telefono_organismo"
                value={practicas.createOrganismo.telefono === 0 || practicas.createOrganismo.telefono === "NaN" ? "" : practicas.createOrganismo.telefono}
                onChange={handleChangeNum}
                onKeyDown={handleKeyDown}
                inputProps={{ maxLength: 9 }}
                error = {errors.telefonoOrganismo}
                helperText={errors.telefonoOrganismo ? "Este campo es obligatorio" : ""}
              />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="createOrganismo.divisionDepartamento"
                    label="División / Departamento"
                    name="createOrganismo.divisionDepartamento"
                    autoComplete="division_departamento"
                    value={practicas.createOrganismo.divisionDepartamento}
                    onChange={handleChangePracticas}
                    error = {errors.divisionDepartamento}
                    helperText={errors.divisionDepartamento ? "Este campo es obligatorio" : ""}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="createOrganismo.seccionUnidad"
                    label="Sección / Unidad"
                    name="createOrganismo.seccionUnidad"
                    autoComplete="seccion_unidad"
                    value={practicas.createOrganismo.seccionUnidad}
                    onChange={handleChangePracticas}
                    error = {errors.seccionUnidad}
                    helperText={errors.seccionUnidad ? "Este campo es obligatorio" : ""}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    select
                    id="createOrganismo.region"
                    label="Región"
                    name="createOrganismo.regionId"
                    autoComplete="region"
                    value={practicas.createOrganismo.regionId === 0 ? "" : practicas.createOrganismo.regionId}
                    onChange={handleChangePracticas}
                    error = {errors.region}
                    helperText={errors.region ? "Este campo es obligatorio" : ""}
                    SelectProps={{
                      MenuProps: menuProps,
                    }}
                  >
                    {regiones.map((regiones) => (
                      <MenuItem key={regiones.id} value={regiones.id}> {`${regiones.simbolo}: ${regiones.nombre}`}</MenuItem> 
                    ))}
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    select
                    id="createOrganismo.comuna"
                    label="Comuna"
                    name="createOrganismo.comunaId"
                    autoComplete="comuna"
                    value={practicas.createOrganismo.comunaId === 0 ? "" : practicas.createOrganismo.comunaId}
                    onChange={handleChangePracticas}
                    error = {errors.comuna}
                    helperText={errors.comuna ? "Este campo es obligatorio" : ""}
                    SelectProps={{
                      MenuProps: menuProps,
                    }}
                  >
                    {filteredComunas.map((comuna) => (
                      <MenuItem key={comuna.id} value={comuna.id}> {comuna.nombre} </MenuItem>
                      ))}

                  </TextField>
                </Grid>
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="createOrganismo.direccion"
                label="Dirección del Organismo"
                name="createOrganismo.direccion"
                autoComplete="direccion_organismo"
                value={practicas.createOrganismo.direccion}
                onChange={handleChangePracticas}
                multiline
                rows = {2}
                error = {errors.direccionOrganismo}
                helperText={errors.direccionOrganismo ? "Este campo es obligatorio" : ""}
              />
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
                      format='DD-MM-YYYY'
                      fullWidth
                      value={practicas.practica.fechaInicio === "" ? null : dayjs(practicas.practica.fechaInicio, 'YYYY-MM-DD')}
                      onChange={(date) => { setPracticas({ ...practicas, practica: {...practicas.practica, fechaInicio: date ? date.format("YYYY-MM-DD") : ""}}) }}
                      slotProps={{
                        textField: {
                          error: errors.fechaInicio,
                          helperText: errors.fechaInicio ? mensajeFechaInicio : ""
                        },
                      }}
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
                      format='DD-MM-YYYY'
                      fullWidth
                      value={practicas.practica.fechaTermino === "" ? null : dayjs(practicas.practica.fechaTermino, 'YYYY-MM-DD') }
                      onChange={(date) => { setPracticas({ ...practicas, practica: {...practicas.practica, fechaTermino: date ? date.format("YYYY-MM-DD") : ""}})}}
                      slotProps={{
                        textField: {
                          error: errors.fechaTermino,
                          helperText: errors.fechaTermino ? mensajeFechaTermino : ""
                        },
                      }}
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
                Ingrese el horario de práctica profesional en formato de 12 horas (am/pm).<br />
                Por favor no dejar jornada de entrada sin salida o viseversa. También asegurese de que las horas estén bien colocadas, 
                de no ser así se marcarán las casillas en rojo.
              </Typography>
            </Box>
            <Box sx= {{ mt: 2 }}>
              <CustomTable
                id = "horario"
                practicas = {practicas}
                handleChangePracticas = {handleChangePracticas}
                errors = {errors}
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
                id="practica.descripcion"
                label="Descripción de Actividades"
                name="practica.descripcion"
                value={practicas.practica.descripcion}
                onChange={handleChangePracticas}
                multiline
                rows={4}
                inputProps={{ maxLength: 900 }}
                error = {errors.descripcion}
                helperText={errors.descripcion ? "Este campo es obligatorio" : ""}
              />
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
              <Button
                id = "enviar_postulacion"
                onClick={handleButtonClick}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Enviar postulación para {practicas.practica.ocasion} Práctica
              </Button>
          </Box>
        </Box>
    </Modal>
    );
  };
  
  export default ModalPostulacionPractica;