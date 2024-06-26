import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import CardComponent from "./Components/CardComponent";
import FormModal from "./Components/FormModal";
import Header from "./Components/Header";
import { fetchData, fetchCtGen, fetchCtPer, fetchPractica } from "./utils/fetchData";
import { generarCartaGenerica, generarCartaPersonalizada, generarPrimeraPractica, updateInformation } from "./utils/api";

const defaultTheme = createTheme();

const Options = () => {
  const [ct_cg, setCg] = useState(null);
  const [ct_cp, setCp] = useState(null);
  const [counters, setCounters] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [open, setOpen] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const [modalPr, setModalPrOpen] = useState(false);

  const [inputs, setInputs] = useState({
    primerNombre: "",
    segundoNombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    run: "",
    correoInstitucional: "",
    df: "",
    sexo: "",
    sede: "",
    anioIngreso: "",
    correoPersonal: "",
    telefono: "",
    ultimoSemAprobado: "",
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "800px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const email = jwtDecode(Cookies.get("token")).email;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleButtonClickGenerica = async () => {
    setIsButtonDisabled(true);
    setModalOpen(false);
    await generarCartaGenerica(inputs.ultimoSemAprobado);
    setIsButtonDisabled(false);
    window.location.reload();
  };

  const handleButtonClickPrimera = async () => {
    setIsButtonDisabled(true);
    setModalPrOpen(false);
    await generarPrimeraPractica();
    setIsButtonDisabled(false);
    window.location.reload();
  };

  const handleButtonClick = async (actionName) => {
    switch (actionName) {
      case "cartaGenerica":
        setModalOpen(true);
        break;
      case "cartaPersonalizada":
        console.log("peronalizada");
        break;
      case "postulacionPrimera":
        setModalPrOpen(true);
        break;
      case "postulacionSegunda":
        console.log("seg");
        break;
      default:
        console.log("first");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateInformation(inputs);
  };

  useEffect(() => {
    fetchData(email, setInputs, setIsButtonDisabled, setOpen);
    fetchCtGen(setCg);
    fetchCtPer(setCp);
    fetchPractica(setCounters);
  }, [email]);

  const tiers = [
    {
      title: "Carta Genérica",
      subheader: `Solicitado ${ct_cg} veces`,
      description: ["Se generará automáticamente su Carta genérica. Considere que ésta reemplazará a la más reciente que haya solicitado, creando nuevamente la solicitud."],
      buttonText: "Generar",
      buttonVariant: "contained",
      actionName: "cartaGenerica",
      disabled: false,
    },
    {
      title: "Carta Personalizada",
      subheader: `Solicitado ${ct_cp} veces`,
      description: ["Deberá rellenar el formulario para poder genererar la solicitud de Carta Personalizada. Considere que ésta reemplazará a la más reciente que haya solicitado, creando nuevamente la solicitud."],
      buttonText: "Generar",
      buttonVariant: "contained",
      actionName: "cartaPersonalizada",
      disabled: false,
    },
    {
      title: "Postulación Primera Práctica",
      subheader: `Solicitado ${counters ? counters["contadores"]["sin_accion"] : 0} veces`,
      description: ["Formulario de postulación para su primera práctica profesional."],
      buttonText: "Generar",
      buttonVariant: "contained",
      actionName: "postulacionPrimera",
      disabled: counters && counters["contadores"]["sin_accion"] >= 3,
    },
    {
      title: "Postulación Segunda Práctica",
      subheader: "Solicitado # veces",
      description: ["Formulario de postulación para su segunda práctica profesional."],
      buttonText: "Generar",
      buttonVariant: "contained",
      actionName: "postulacionSegunda",
      disabled: false,
    },
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
      <CssBaseline />
      <Header />
      <Button onClick={() => setOpen(true)}>Modificar data perfil</Button>
      <Container maxWidth={false} component="main">
        <Grid container spacing={2} alignItems="flex">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={6} md={4} lg={3} xl={3}>
              <CardComponent
                tier={tier}
                isButtonDisabled={isButtonDisabled}
                handleButtonClick={handleButtonClick}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 6, mb: 5 }}>
          <Typography component="h2" align="center" color="text.primary">
            Podrás elegir entre estas cuatro opciones para llevar a cabo la postulación de práctica profesional.
            Puedes solicitar una carta de recomendación para llevarla a tu futuro empleador o rellenar el formulario para que el/la coordinador(a) de prácticas te ayude en este proceso.
          </Typography>
        </Box>
      </Container>
      <FormModal
        open={open}
        handleClose={() => setOpen(false)}
        inputs={inputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        style={style}
      />
      <Modal open={modalPr} onClose={() => setModalPrOpen(false)}>
        <Box sx={{ ...style, overflow: "auto", maxHeight: "90vh" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Formulario para postulación a práctica profesional
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Este formulario se puede enviar una sola vez. En el caso de cometer un error en los datos o querer revisarlo, se debe dirigir a la oficina del coordinador de prácticas.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Select
              labelId="ultimoSemAprobado"
              id="ultimoSemAprobado"
              value={inputs.ultimoSemAprobado}
              label="Último Semestre Aprobado"
              name="ultimoSemAprobado"
              onChange={handleChange}
            >
              <MenuItem value="Primer Semestre">Primer Semestre</MenuItem>
              <MenuItem value="Segundo Semestre">Segundo Semestre</MenuItem>
              <MenuItem value="Tercer Semestre">Tercer Semestre</MenuItem>
              <MenuItem value="Cuarto Semestre">Cuarto Semestre</MenuItem>
              <MenuItem value="Quinto Semestre">Quinto Semestre</MenuItem>
              <MenuItem value="Sexto Semestre">Sexto Semestre</MenuItem>
              <MenuItem value="Séptimo Semestre">Séptimo Semestre</MenuItem>
              <MenuItem value="Octavo Semestre">Octavo Semestre</MenuItem>
              <MenuItem value="Noveno Semestre">Noveno Semestre</MenuItem>
              <MenuItem value="Décimo Semestre">Décimo Semestre</MenuItem>
            </Select>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button
              onClick={handleButtonClickPrimera}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Generar Primera Práctica
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal open={ModalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={{ ...style, overflow: "auto", maxHeight: "90vh" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Seleccione Último Semestre Aprobado
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Seleccione el último semestre que usted aprobó antes de generar la carta
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Select
              labelId="ultimoSemAprobado"
              id="ultimoSemAprobado"
              value={inputs.ultimoSemAprobado}
              label="Último Semestre Aprobado"
              name="ultimoSemAprobado"
              onChange={handleChange}
            >
              <MenuItem value="Primer Semestre">Primer Semestre</MenuItem>
              <MenuItem value="Segundo Semestre">Segundo Semestre</MenuItem>
              <MenuItem value="Tercer Semestre">Tercer Semestre</MenuItem>
              <MenuItem value="Cuarto Semestre">Cuarto Semestre</MenuItem>
              <MenuItem value="Quinto Semestre">Quinto Semestre</MenuItem>
              <MenuItem value="Sexto Semestre">Sexto Semestre</MenuItem>
              <MenuItem value="Séptimo Semestre">Séptimo Semestre</MenuItem>
              <MenuItem value="Octavo Semestre">Octavo Semestre</MenuItem>
              <MenuItem value="Noveno Semestre">Noveno Semestre</MenuItem>
              <MenuItem value="Décimo Semestre">Décimo Semestre</MenuItem>
            </Select>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button
              onClick={handleButtonClickGenerica}
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
    </ThemeProvider>
  );
};

export default Options;
