// Components/PostulacionesModal.jsx
import React from "react";
import { useState } from "react";
import { Modal, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const postulaciones = [
  { fecha: "2024-06-27 20:19:23", estado: "Aceptada", comentarios: "homologacion" },
  { fecha: "2024-06-11 19:03:07", estado: "Rechazada", comentarios: "" },
  { fecha: "2024-05-08 19:52:01", estado: "Rechazada", comentarios: "okok" },
  { fecha: "2024-05-08 19:37:19", estado: "Rechazada", comentarios: "no" },
  { fecha: "2024-05-08 19:36:49", estado: "Rechazada", comentarios: "" },
  { fecha: "2024-05-08 19:30:00", estado: "Rechazada", comentarios: "aa" },
  { fecha: "2024-05-08 19:26:08", estado: "Rechazada", comentarios: "Test" },
  { fecha: "2024-01-08 14:43:17", estado: "Rechazada", comentarios: "" },
];


const PostulacionesModal = ({ style, open, handleClose, ocasion }) => {

    const [informacion, setInformacion] = useState({
        aceptadasSinAccion: 1,
        aceptadasAprobadas: 0,
        sinAccion: 0,
        aceptadasReprobadas: 0,
        rechazadas: 12,
        });
        
    return (
    <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, overflow: "auto", maxHeight: "90vh" }}>
        <Typography variant="h6" component="h2" gutterBottom>
            Postulaciones {ocasion} Práctica
        </Typography>
        <Typography variant="body1" gutterBottom>
            Aceptadas Sin acción: {informacion.aceptadasSinAccion}
        </Typography>
        <Typography variant="body1" gutterBottom>
            Aceptadas Aprobadas: {informacion.aceptadasAprobadas}
        </Typography>
        <Typography variant="body1" gutterBottom>
            Sin Acción: {informacion.sinAccion}
        </Typography>
        <Typography variant="body1" gutterBottom>
            Aceptadas Reprobadas: {informacion.aceptadasReprobadas}
        </Typography>
        <Typography variant="body1" gutterBottom>
            Rechazadas: {informacion.rechazadas}
        </Typography>
        <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell>Fecha Actualización</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Comentarios</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {postulaciones.map((row, index) => (
                <TableRow key={index}>
                    <TableCell>{row.fecha}</TableCell>
                    <TableCell style={{ color: row.estado === "Aceptada" ? "green" : "red" }}>{row.estado}</TableCell>
                    <TableCell>{row.comentarios}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        </Box>
    </Modal>
    );
    };

export default PostulacionesModal;