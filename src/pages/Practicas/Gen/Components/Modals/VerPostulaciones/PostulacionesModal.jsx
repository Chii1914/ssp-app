// Components/PostulacionesModal.jsx
import React from "react";
import { Modal, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const PostulacionesModal = ({ style, open, handleClose, ocasion, informacion }) => {

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ ...style, overflow: "auto", maxHeight: "90vh" }}>
            <Typography variant="h6" component="h2" gutterBottom>
                Postulaciones {ocasion} Práctica
            </Typography>
            <Typography variant="body1" gutterBottom>
                Prácticas Sin Evaluar: {informacion.contadores.sin_evaluar}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Prácticas Evaluadas: {informacion.contadores.evaluadas}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Sin Acción: {informacion.contadores.sin_accion}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Aprobadas: {informacion.contadores.aprobadas}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Rechazadas: {informacion.contadores.rechazadas}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Total de Postulaciones {ocasion} Practica: {informacion.total}
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Fecha Actualización</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Descripcion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {informacion.practicas.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell>{row.fechaCambioEstado}</TableCell>
                        <TableCell style={{ color: row.estado === "Aceptada" ? "green" : "red" }}>{row.estado}</TableCell>
                        <TableCell>{row.descripcion}</TableCell>
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