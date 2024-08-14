import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomCell from './CustomCell';
import TimePickerValue from './TimePicker';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const CustomTable = ({ practicas, handleChangePracticas, errors }) => {
  
  const adapter = (nombre, valor) => {
    return {
        target: {
            name: nombre,
            value: valor,
            type: 'text'
        }
    };
  };

  function convertirHoras(horas) {
    // Crear una duración con las horas ingresadas
    const duracion = dayjs.duration(horas, 'hours');
    
    // Obtener las horas y minutos de la duración
    const hrs = Math.floor(duracion.asHours()); // Obtiene las horas completas
    const mins = duracion.minutes(); // Obtiene los minutos restantes
    
    return `${hrs}:${mins < 10 ? '0' : ''}${mins} hrs`; // Formato HH:mm
  };

  const calcularHorasPorDia = (dia) => {
    let minutosManana = 0;
    let minutosTarde = 0;

    if (practicas) {
      if (practicas.horario[`hora${dia}MananaEntrada`] && practicas.horario[`hora${dia}MananaSalida`]) {
          const horaInicioManana = dayjs(practicas.horario[`hora${dia}MananaEntrada`], 'HH:mm');
          const horaTerminoManana = dayjs(practicas.horario[`hora${dia}MananaSalida`], 'HH:mm');
          minutosManana = horaTerminoManana.diff(horaInicioManana, 'minute');
      }

      if (practicas.horario[`hora${dia}TardeEntrada`] && practicas.horario[`hora${dia}TardeSalida`]) {
          const horaInicioTarde = dayjs(practicas.horario[`hora${dia}TardeEntrada`], 'HH:mm');
          const horaTerminoTarde = dayjs(practicas.horario[`hora${dia}TardeSalida`], 'HH:mm');
          minutosTarde = horaTerminoTarde.diff(horaInicioTarde, 'minute');
      }
    }
    return convertirHoras((minutosManana + minutosTarde)/60);
  };

  const data = [
    [
      'Lunes', 
      <TimePickerValue errorHorario={errors.lunesMananaDesfasado ? errors.lunesMananaDesfasado : errors.lunesMananaIncompleto} hora={practicas.horario.horaLunesMananaEntrada === "" ? null : dayjs(practicas.horario.horaLunesMananaEntrada, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaLunesMananaEntrada', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.lunesMananaDesfasado ? errors.lunesMananaDesfasado : errors.lunesMananaIncompleto} hora={practicas.horario.horaLunesMananaSalida === "" ? null : dayjs(practicas.horario.horaLunesMananaSalida, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaLunesMananaSalida', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.lunesTardeDesfasado ? errors.lunesTardeDesfasado : errors.lunesTardeIncompleto} hora={practicas.horario.horaLunesTardeEntrada === "" ? null : dayjs(practicas.horario.horaLunesTardeEntrada, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaLunesTardeEntrada', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.lunesTardeDesfasado ? errors.lunesTardeDesfasado : errors.lunesTardeIncompleto} hora={practicas.horario.horaLunesTardeSalida === "" ? null : dayjs(practicas.horario.horaLunesTardeSalida, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaLunesTardeSalida', hora ? hora.format("HH:mm") : ""))}/>,
      <div>{calcularHorasPorDia("Lunes")} </div>
    ],
    [
      'Martes',
      <TimePickerValue errorHorario={errors.martesMananaDesfasado ? errors.martesMananaDesfasado : errors.martesMananaIncompleto} hora={practicas.horario.horaMartesMananaEntrada === "" ? null : dayjs(practicas.horario.horaMartesMananaEntrada, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMartesMananaEntrada', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.martesMananaDesfasado ? errors.martesMananaDesfasado : errors.martesMananaIncompleto} hora={practicas.horario.horaMartesMananaSalida === "" ? null : dayjs(practicas.horario.horaMartesMananaSalida, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMartesMananaSalida', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.martesTardeDesfasado ? errors.martesMananaDesfasado : errors.martestardeIncompleto} hora={practicas.horario.horaMartesTardeEntrada === "" ? null : dayjs(practicas.horario.horaMartesTardeEntrada, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMartesTardeEntrada', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.martestardeDesfasado ? errors.martestardeDesfasado : errors.martestardeIncompleto} hora={practicas.horario.horaMartesTardeSalida === "" ? null : dayjs(practicas.horario.horaMartesTardeSalida, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMartesTardeSalida', hora ? hora.format("HH:mm") : ""))}/>,
      <div>{calcularHorasPorDia("Martes")} </div>
    ],
    [
      'Miércoles',
      <TimePickerValue errorHorario={errors.miercolesMananaDesfasado ? errors.miercolesMananaDesfasado : errors.miercolesMananaIncompleto} hora={practicas.horario.horaMiercolesMananaEntrada === "" ? null : dayjs(practicas.horario.horaMiercolesMananaEntrada, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMiercolesMananaEntrada', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.miercolesMananaDesfasado ? errors.miercolesMananaDesfasado : errors.miercolesMananaIncompleto} hora={practicas.horario.horaMiercolesMananaSalida === "" ? null : dayjs(practicas.horario.horaMiercolesMananaSalida, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMiercolesMananaSalida', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.miercolestardeDesfasado ? errors.miercolestardeDesfasado : errors.miercolestardeIncompleto} hora={practicas.horario.horaMiercolesTardeEntrada === "" ? null : dayjs(practicas.horario.horaMiercolesTardeEntrada, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMiercolesTardeEntrada', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.miercolestardeDesfasado ? errors.miercolestardeDesfasado : errors.miercolestardeIncompleto} hora={practicas.horario.horaMiercolesTardeSalida === "" ? null : dayjs(practicas.horario.horaMiercolesTardeSalida, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaMiercolesTardeSalida', hora ? hora.format("HH:mm") : ""))}/>,
      <div>{calcularHorasPorDia("Miercoles")} </div>
    ],
    [
      'Jueves',
      <TimePickerValue errorHorario={errors.juevesMananaDesfasado ? errors.juevesMananaDesfasado : errors.juevesMananaIncompleto} hora={practicas.horario.horaJuevesMananaEntrada === "" ? null : dayjs(practicas.horario.horaJuevesMananaEntrada, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaJuevesMananaEntrada', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.juevesMananaDesfasado ? errors.juevesMananaDesfasado : errors.juevesMananaIncompleto} hora={practicas.horario.horaJuevesMananaSalida === "" ? null : dayjs(practicas.horario.horaJuevesMananaSalida, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaJuevesMananaSalida', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.juevestardeDesfasado ? errors.juevestardeDesfasado : errors.juevestardeIncompleto} hora={practicas.horario.horaJuevesTardeEntrada === "" ? null : dayjs(practicas.horario.horaJuevesTardeEntrada, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaJuevesTardeEntrada', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.juevestardeDesfasado ? errors.juevestardeDesfasado : errors.juevestardeIncompleto} hora={practicas.horario.horaJuevesTardeSalida === "" ? null : dayjs(practicas.horario.horaJuevesTardeSalida, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaJuevesTardeSalida', hora ? hora.format("HH:mm") : ""))}/>,
      <div>{calcularHorasPorDia("Jueves")} </div>
    ],
    [
      'Viernes',
      <TimePickerValue errorHorario={errors.viernesMananaDesfasado ? errors.viernesMananaDesfasado : errors.viernesMananaIncompleto} hora={practicas.horario.horaViernesMananaEntrada === "" ? null : dayjs(practicas.horario.horaViernesMananaEntrada, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaViernesMananaEntrada', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.viernesMananaDesfasado ? errors.viernesMananaDesfasado : errors.viernesMananaIncompleto} hora={practicas.horario.horaViernesMananaSalida === "" ? null : dayjs(practicas.horario.horaViernesMananaSalida, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaViernesMananaSalida', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.viernestardeDesfasado ? errors.viernestardeDesfasado : errors.viernestardeIncompleto} hora={practicas.horario.horaViernesTardeEntrada === "" ? null : dayjs(practicas.horario.horaViernesTardeEntrada, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaViernesTardeEntrada', hora ? hora.format("HH:mm") : ""))}/>,
      <TimePickerValue errorHorario={errors.viernestardeDesfasado ? errors.viernestardeDesfasado : errors.viernestardeIncompleto} hora={practicas.horario.horaViernesTardeSalida === "" ? null : dayjs(practicas.horario.horaViernesTardeSalida, "HH:mm")} setHorario={(hora) => handleChangePracticas(adapter('horario.horaViernesTardeSalida', hora ? hora.format("HH:mm") : ""))}/>,
      <div>{calcularHorasPorDia("Viernes")} </div>
    ],

  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell rowSpan={2} align="center">Jornada</TableCell>
            <TableCell colSpan={2} align="center">Mañana</TableCell>
            <TableCell colSpan={2} align="center">Tarde</TableCell>
            <TableCell rowSpan={2} align="center">Total Horas Diarias</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Entrada</TableCell>
            <TableCell align="center">Salida</TableCell>
            <TableCell align="center">Entrada</TableCell>
            <TableCell align="center">Salida</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <CustomCell>{row[0]}</CustomCell>
              <CustomCell>{row[1]}</CustomCell>
              <CustomCell>{row[2]}</CustomCell>
              <CustomCell>{row[3]}</CustomCell>
              <CustomCell>{row[4]}</CustomCell>
              <CustomCell>{row[5]}</CustomCell>
            </TableRow>
          ))}
          <TableRow>
            <CustomCell colSpan={5} align="right">
              <strong>Total Horas Semanales</strong>
            </CustomCell>
            <CustomCell style={{ color: practicas.horario.totalHoras <= 0 || practicas.horario.totalHoras.toString() === "NaN" ? "red" : "black" }} align="center">
              <strong>{practicas.horario.totalHoras.toString() === "NaN" || practicas.horario.totalHoras === 0 ? "0:00 hrs" : convertirHoras(practicas.horario.totalHoras)}</strong>
              <strong><br/>{errors.totalHoras && practicas.horario.totalHoras <= 0 ? "Por favor ingrese horario" : ""}</strong>
            </CustomCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
