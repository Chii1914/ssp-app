import React from 'react';
import { useState } from 'react';
import { Modal, Box, Typography, TextField, MenuItem, Button } from '@mui/material';

const ModalGenericas = ({ style, open, setOpen, carta_generica,handleChangeGenerica, handleButtonClickGenerica }) => {
  const [error, setError] = useState(false);
  
  const handleButtonClick = () => {
    carta_generica.ultimoSemAprobado === '' ? setError(true) : (handleButtonClickGenerica() && setError(false));
  };
  
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ ...style, overflow: "auto", maxHeight: "90vh" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Seleccione Último Semestre Aprobado
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Seleccione el último semestre que usted aprobó antes de generar la carta
          </Typography>
          <Box sx={{ mt: 2 }}>
            <TextField
              select
              id="ultimoSemAprobado"
              value={carta_generica.ultimoSemAprobado}
              label="Último Semestre Aprobado"
              name="ultimoSemAprobado"
              onChange={handleChangeGenerica}
              fullWidth
              error={error}
              helperText={error ? "Este campo es obligatorio" : ""}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: error ? 'red' : 'default',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: error ? 'red' : 'default',
                  },
                },
              }}
            >
              {['Primer', 'Segundo', 'Tercer', 'Cuarto', 'Quinto', 'Sexto', 'Séptimo', 'Octavo', 'Noveno', 'Décimo'].map((semestre, index) => (
              <MenuItem key={index} value={`${semestre} Semestre`}>{`${semestre} Semestre`}</MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button
              onClick={handleButtonClick}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Generar Carta Genérica
            </Button>
          </Box>
        </Box>
      </Modal>
  );
}

export default ModalGenericas;