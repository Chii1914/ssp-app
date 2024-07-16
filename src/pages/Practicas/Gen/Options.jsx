import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import CardComponent from "./Components/CardComponent";
import FormModal from "./Components/FormModal";
import Header from "./Components/Header";
import { fetchData, fetchCtGen, fetchCtPer, fetchPractica } from "./utils/fetchData";
import { generarCartaGenerica, generarCartaPersonalizada, generarPrimeraPractica, updateInformation } from "./utils/api";
import ModalPostulacionPractica from "./Components/Modals/PostulacionPracticaModal";
import ModalGenericas from "./Components/Modals/ModalGenericas";
import ModalPersonalizadas from "./Components/Modals/ModalPersonalizadas";
import dayjs from "dayjs";

//const initialTime = dayjs().set('hour', 8).set('minute', 0); // Ejemplo de hora inicial: 08:00 AM

const defaultTheme = createTheme();

const Options = () => {
  const [ct_cg, setCg] = useState(null);
  const [ct_cp, setCp] = useState(null);
  const [counters, setCounters] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [open, setOpen] = useState(false);
  const [ModalGenOpen, setModalGenOpen] = useState(false);
  const [modalPostulacion, setModalPostulacionOpen] = useState(false);

  const [ModalPersOpen, setModalPersOpen] = useState(false);

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

  const[postulacion, setPostulacion] = useState({
    practica: "",
    ultimoSemAprobado: "",
    homologacion: false,
    nombreOrganismo: "",
    nombreSupervisor: "",
    cargoSupervisor: "",
    correoSupervisor: "",
    telefonoSupervisor: "",
    divisionDepartamento: "",
    direccionOrganismo: "",
    seccionUnidad: "",
    region: "",
    comuna: "",
    fechaInicio: null,
    fechaTermino: null,
    descripcion: "",
  });

  const [horario, setHorario] = useState({
    lunes: {
      manana: {
        horaInicio: null,
        horaTermino: null,
      },
      tarde: {
        horaInicio: null,
        horaTermino: null,
      },
      horas_totales: 0,
    },
    martes: {
      manana: {
        horaInicio: null,
        horaTermino: null,
      },
      tarde: {
        horaInicio: null,
        horaTermino: null,
      },
      horas_totales: 0,
    },
    miercoles: {
      manana: {
        horaInicio: null,
        horaTermino: null,
      },
      tarde: {
        horaInicio: null,
        horaTermino: null,
      },
      horas_totales: 0,
    },
    jueves: {
      manana: {
        horaInicio: null,
        horaTermino: null,
      },
      tarde: {
        horaInicio: null,
        horaTermino: null,
      },
      horas_totales: 0,
    },
    viernes: {
      manana: {
        horaInicio: null,
        horaTermino: null,
      },
      tarde: {
        horaInicio: null,
        horaTermino: null,
      },
      horas_totales: 0,
    },
    horas_semanales: 0,
  });
  
  

  const [carta_generica, setCartaGenerica] = useState({
    ultimoSemAprobado: "",
  });
  
  const [personalizada, setPersonalizada] = useState({
    ultimoSemAprobado: "",
    nombreOrganismo: "",
    nombreSupervisor: "",
    cargoSupervisor: "",
    sexoSupervisor: "",
    divisionDepartamento: "",
    seccionUnidad: "",
  });
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "850px",
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

  const handleChangeGenerica = (event) => {
    const { name, value } = event.target;
    setCartaGenerica({ ...carta_generica, [name]: value });
  };

  const handleChangePersonalizada = (event) => {
    const { name, value } = event.target;
    setPersonalizada({ ...personalizada, [name]: value });
  };

  const handleChangePr = (event) => {
    const { name, value, type, checked } = event.target;
    setPostulacion(prevState => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleChangeHorario = (dia, periodo, tipo, nuevaHora) => {
    // Actualizar el horario con la nueva hora ingresada
    setHorario((prevHorario) => {
      // Calcula las nuevas horas
      const nuevoHorario = {
        ...prevHorario,
        [dia]: {
          ...prevHorario[dia],
          [periodo]: {
            ...prevHorario[dia][periodo],
            [tipo]: nuevaHora,
          },
        },
      };
  
      // Calcula las horas totales del día
      let horasTotalesDia = 0;
  
      // Suma las horas de la mañana si están definidas
      if (nuevoHorario[dia].manana.horaInicio && nuevoHorario[dia].manana.horaTermino) {
        const horaInicioManana = dayjs(nuevoHorario[dia].manana.horaInicio, 'HH:mm');
        const horaTerminoManana = dayjs(nuevoHorario[dia].manana.horaTermino, 'HH:mm');
        const horasManana = horaTerminoManana.diff(horaInicioManana, 'hours', true);
        horasTotalesDia += horasManana;
      }
  
      // Suma las horas de la tarde si están definidas
      if (nuevoHorario[dia].tarde.horaInicio && nuevoHorario[dia].tarde.horaTermino) {
        const horaInicioTarde = dayjs(nuevoHorario[dia].tarde.horaInicio, 'HH:mm');
        const horaTerminoTarde = dayjs(nuevoHorario[dia].tarde.horaTermino, 'HH:mm');
        const horasTarde = horaTerminoTarde.diff(horaInicioTarde, 'hours', true);
        horasTotalesDia += horasTarde;
      }
  
      // Actualiza las horas totales del día en el estado
      const updatedHorario = {
        ...nuevoHorario,
        [dia]: {
          ...nuevoHorario[dia],
          horas_totales: horasTotalesDia,
        },
      };
  
      // Calcula las horas semanales totales
      let horasTotalesSemanales = 0;
      Object.keys(updatedHorario).forEach((key) => {
        if (key !== 'horas_semanales') {
          horasTotalesSemanales += updatedHorario[key].horas_totales;
        }
      });
  
      // Actualiza las horas semanales en el estado
      return {
        ...updatedHorario,
        horas_semanales: horasTotalesSemanales,
      };
    });
  };
  
  const handleButtonClickGenerica = async () => {
    setIsButtonDisabled(true);
    setModalGenOpen(false);
    await generarCartaGenerica(carta_generica.ultimoSemAprobado);
    setIsButtonDisabled(false);
    window.location.reload();
  };

  const handleButtonClickPersonalizada = async () => {
    setIsButtonDisabled(true);
    setModalPersOpen(false);
    await generarCartaPersonalizada(personalizada);
    setIsButtonDisabled(false);
    window.location.reload();
  };

  const handleButtonClickPostulacion = async () => {
    setIsButtonDisabled(true);
    setModalPostulacionOpen(false);
    await generarPrimeraPractica(postulacion,horario);
    setIsButtonDisabled(false);
    //window.location.reload();
  };

  const handleButtonClick = async (actionName) => {
    switch (actionName) {
      case "cartaGenerica":
        setModalGenOpen(true);
        break;
      case "cartaPersonalizada":
        setModalPersOpen(true);
        break;
      case "postulacionPrimera":
        setPostulacion({practica: "Primera"});
        setModalPostulacionOpen(true);
        break;
      case "postulacionSegunda":
        setPostulacion({practica: "Segunda"});
        setModalPostulacionOpen(true);
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
      <ModalPostulacionPractica
        open={modalPostulacion}
        handleClose={() => setModalPostulacionOpen(false)}
        handleChangePr={handleChangePr}
        handleButtonClickPostulacion={handleButtonClickPostulacion}
        postulacion={postulacion}
        style={style}
        setPostulacion={setPostulacion}
        horario = {horario}
        setHorario = {setHorario}
        handleChangeHorario = {handleChangeHorario}
      />
      <ModalGenericas
        style={style}
        open={ModalGenOpen}
        setOpen={setModalGenOpen}
        carta_generica={carta_generica}
        handleChangeGenerica={handleChangeGenerica}
        handleButtonClickGenerica={handleButtonClickGenerica}
      />
      <ModalPersonalizadas
        style={style}
        open={ModalPersOpen}
        setOpen={setModalPersOpen}
        personalizada={personalizada}
        handleChangePersonalizada={handleChangePersonalizada}
        handleButtonClickPersonalizada={handleButtonClickPersonalizada}
      />
    </ThemeProvider>
  );
};

export default Options;
