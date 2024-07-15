import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomCell from './CustomCell';

const CustomTable = ({ data , horas_semanales }) => {

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
              <CustomCell>{row[0]}</CustomCell> {/* Jornada */}
              <CustomCell>{row[1]}</CustomCell> {/* Mañana Entrada */}
              <CustomCell>{row[2]}</CustomCell> {/* Mañana Salida */}
              <CustomCell>{row[3]}</CustomCell> {/* Tarde Entrada */}
              <CustomCell>{row[4]}</CustomCell> {/* Tarde Salida */}
              <CustomCell>{row[5]}</CustomCell> {/* Total Horas Diarias */}
            </TableRow>
          ))}
          <TableRow>
            <CustomCell colSpan={5} align="right"><strong>Total Horas Semanales</strong></CustomCell>
            <CustomCell align="center"><strong>{horas_semanales}</strong></CustomCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;