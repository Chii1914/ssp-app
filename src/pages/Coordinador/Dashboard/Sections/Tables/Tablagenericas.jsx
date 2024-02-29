import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReplayIcon from '@mui/icons-material/Replay';
import DescriptionIcon from '@mui/icons-material/Description';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { fetchLetters } from '../../../../../Services/LetterService';
import axios from 'axios';

const MySwal = withReactContent(Swal);
const API_BASE_URL = 'http://localhost:3000/api/cartas-gen';

export default function Tablagenericas({ region }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reviewedStatus, setReviewedStatus] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchLetters('gen', reviewedStatus, region)
      .then(data => {
        setRows(data.map(item => ({
          id: item.id,
          run: item.estudiante.run,
          nombre: `${item.estudiante.primerNombre} ${item.estudiante.segundoNombre}`.trim(),
          apellidop: item.estudiante.apellidoPaterno,
          apellidom: item.estudiante.apellidoMaterno,
          fsolicitud: new Date(item.fechaCreado).toLocaleString(),
          factualizacion: new Date(item.fechaActualizacion).toLocaleString(),
          revisado: item.revisado,
        })));
      })
      .catch(error => {
        console.error('Failed to fetch letters:', error);
      })
      .finally(() => setLoading(false));
  }, [reviewedStatus, region]);

  const handleReview = async (id) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/${id}`, { revisado: true }, {
  headers: { 'Content-Type': 'application/json' }
      });
      // The rest of the code assumes that the server responds with the affected row count
      const updatedLetter = response.data;
      if (updatedLetter.affected === 1) {
        setRows(currentRows => currentRows.map(row => row.id === id ? { ...row, revisado: true } : row));
        setReviewedStatus(true);
        Swal.fire('Success!', 'The letter has been marked as reviewed.', 'success');
      } else {
        Swal.fire('Notice!', 'No changes were made.', 'info');
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      Swal.fire('Failed!', 'There was an issue updating the letter.', 'error');
    }
  };

  const handleRevertReview = async (id) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/${id}`, { revisado: false }, {
        headers: { 'Content-Type': 'application/json' }
      });
      const updatedLetter = response.data;
      if (updatedLetter.affected === 1) {
        setRows(currentRows => currentRows.map(row => row.id === id ? { ...row, revisado: false } : row));
        setReviewedStatus(false);
        Swal.fire('Success!', 'The letter has been reverted to not reviewed.', 'success');
      } else {
        Swal.fire('Notice!', 'No changes were made.', 'info');
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      Swal.fire('Failed!', 'There was an issue reverting the letter.', 'error');
    }
  };
   const columns = [
    { field: 'run', headerName: 'RUN', width: 150 },
    { field: 'nombre', headerName: 'Nombre', width: 150 },
    { field: 'apellidop', headerName: 'A. Paterno', width: 150 },
    { field: 'apellidom', headerName: 'A. Materno', width: 150 },
    { field: 'fsolicitud', headerName: 'Fecha Solicitud', width: 180 },
    { field: 'factualizacion', headerName: 'Fecha Modificación', width: 180 },
    { field: 'revisado', headerName: 'Revisado', width: 120 },
    {
      field: 'accion',
      headerName: 'Acción',
      width: 150,
      renderCell: (params) => (
        <>
          {params.row.revisado ? (
            <>
              <IconButton color="primary">
                <FileDownloadIcon />
              </IconButton>
              <IconButton onClick={() => handleRevertReview(params.row.run)} color="primary">
                <ReplayIcon />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton onClick={() => handleReview(params.row.run)} color="primary">
                <CheckCircleIcon />
              </IconButton>
              <IconButton color="primary">
                <DescriptionIcon />
              </IconButton>
              <IconButton color="primary">
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </>
      ),
    },
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
        rows={rows.filter(row => reviewedStatus ? row.revisado : !row.revisado)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        loading={loading}
      />
    </Box>
  );
}