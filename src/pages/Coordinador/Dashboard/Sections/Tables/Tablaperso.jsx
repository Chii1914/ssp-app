import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { fetchLetters } from '../../../../../Services/LetterService';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Tablaperso({ region }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reviewedStatus, setReviewedStatus] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchLetters('per', reviewedStatus, region)
      .then(data => {
        setRows(data.map(item => ({
          id: item.id,
          run: item.estudiante.run,
          nombre: `${item.estudiante.primerNombre} ${item.estudiante.segundoNombre}`.trim(),
          apellidop: item.estudiante.apellidoPaterno,
          apellidom: item.estudiante.apellidoMaterno,
          fsolicitud: new Date(item.fechaCreado).toLocaleString(),
          factualizacion: new Date(item.fechaActualizacion).toLocaleString(),
          revisado: item.revisado ? 'Revisado' : 'No revisado',
        })));
      })
      .catch(error => {
        console.error('Failed to fetch personalized letters:', error);
      })
      .finally(() => setLoading(false));
  }, [reviewedStatus, region]);

  const columns = [
    { field: 'run', headerName: 'RUN', width: 150 },
    { field: 'nombre', headerName: 'Nombre', width: 150 },
    { field: 'apellidop', headerName: 'A. Paterno', width: 150 },
    { field: 'apellidom', headerName: 'A. Materno', width: 150 },
    { field: 'fsolicitud', headerName: 'Fecha Solicitud', width: 180 },
    { field: 'factualizacion', headerName: 'Fecha Modificación', width: 180 },
    { field: 'revisado', headerName: 'Revisado', width: 120 },
    // Add more columns as needed
  ];

  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
        '& .MuiDataGrid-cell:focus': {
          outline: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          padding: 2
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => setReviewedStatus(false)}
        >
          No Revisadas
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setReviewedStatus(true)}
        >
          Revisadas
        </Button>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        loading={loading}
      />
    </Box>
  );
}
