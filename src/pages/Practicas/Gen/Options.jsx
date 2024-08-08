import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import CardComponent from "./Components/CardComponent";
import FormModal from "./Components/FormModal";
import Header from "./Components/Header";
import { fetchData, fetchCtGen, fetchCtPer, fetchPractica } from "./utils/fetchData";
import { generarCartaGenerica, generarCartaPersonalizada, generarPostulacion, updateInformation } from "./utils/api";
import ModalPostulacionPractica from "./Components/Modals/PostulacionPracticaModal";
import ModalGenericas from "./Components/Modals/ModalGenericas";
import ModalPersonalizadas from "./Components/Modals/ModalPersonalizadas";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import PostulacionesModal from "./Components/Modals/VerPostulaciones/PostulacionesModal";
import { MenuItem, Icon} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';


const defaultTheme = createTheme();
const API_BASE_URL= 'http://localhost:3000/api/practica';


const Options = () => {
  const [ct_cg, setCg] = useState(null);
  const [ct_cp, setCp] = useState(null);
  const [counters, setCounters] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = useState(false);
  const [ModalGenOpen, setModalGenOpen] = useState(false);
  const [modalPostulacion, setModalPostulacionOpen] = useState(false);
  const [verPostulaciones, setVerPostulaciones] = useState(false);

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

  const [practicas, setPracticas] = useState({
    horario: {
      totalHoras: "",
      horaLunesMananaEntrada: "",
      horaLunesMananaSalida: "",
      horaLunesTardeEntrada: "",
      horaLunesTardeSalida: "",

      horaMartesMananaEntrada: "",
      horaMartesMananaSalida: "",
      horaMartesTardeEntrada: "",
      horaMartesTardeSalida: "",

      horaMiercolesMananaEntrada: "",
      horaMiercolesMananaSalida: "",
      horaMiercolesTardeEntrada: "",
      horaMiercolesTardeSalida: "",

      horaJuevesMananaEntrada: "",
      horaJuevesMananaSalida: "",
      horaJuevesTardeEntrada: "",
      horaJuevesTardeSalida: "",

      horaViernesMananaEntrada: "",
      horaViernesMananaSalida: "",
      horaViernesTardeEntrada: "",
      horaViernesTardeSalida: "",

      horaSabadoMananaEntrada: "",
      horaSabadoMananaSalida: "",
      horaSabadoTardeEntrada: "",
      horaSabadoTardeSalida: "",

      horaDomingoMananaEntrada: "",
      horaDomingoMananaSalida: "",
      horaDomingoTardeEntrada: "",
      horaDomingoTardeSalida: ""
    },
    createOrganismo: {
        nombreOrganismo: "",
        direccion: "",
        regionId: 0,
        otraRegion:"",
        comunaId: 0,
        otraComuna:"",
        telefono: 0,
        divisionDepartamento: "",
        seccionUnidad: "",
    },
    createSupervisor:{
        nombre: "",
        cargo: "",
        correo: "",
    },
    practica: {
        ocasion: "",
        homologacion: false,
        descripcion: "",
        fechaInicio: "",
        fechaTermino: "",
    },
    semestre: {
        UltSem: "",
    },
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

  const [ocasion, setOcasion] = useState("Primera");

  const [info_primera, setInformacionPrimera] = useState({
    status: true,
    total: 0,
    contadores: {
      sin_evaluar: 0,
      evaluadas: 0,
      sin_accion: 0,
      aprobadas: 0,
      rechazadas: 0
    },
    practicas: []
  });

  const [info_segunda, setInformacionSegunda] = useState({
    status: true,
    total: 0,
    contadores: {
      sin_evaluar: 0,
      evaluadas: 0,
      sin_accion: 0,
      aprobadas: 0,
      rechazadas: 0
    },
    practicas: []
  });

  const obtenerInformacionPracticas = async (ocasion_practica) => {
    const token = Cookies.get("token");
    const response = await axios.get(`${API_BASE_URL}/${ocasion_practica}`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(response => {
      const { status, contadores, practicas } = response.data;
      if (ocasion_practica === "primera") {
        setInformacionPrimera(prevState => ({
          ...prevState,
          status: status,
          total: contadores ? contadores.sin_evaluar + contadores.sin_accion + contadores.evaluadas : 0,
          contadores: contadores,
          practicas: practicas
        }));
      }
      else{
        setInformacionSegunda(prevState => ({
          ...prevState,
          status: status,
          total: contadores ? contadores.sin_evaluar + contadores.sin_accion + contadores.evaluadas : 0,
          contadores: contadores,
          practicas: practicas
        }));
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  const navigate = useNavigate();
  const email = jwtDecode(Cookies.get("token")).email;

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleChangeGenerica = (event) => {
    const { name, value } = event.target;    console.log(personalizada);
    setCartaGenerica({ ...carta_generica, [name]: value });
  };

  const handleChangePersonalizada = (event) => {
    const { name, value } = event.target;
    setPersonalizada({ ...personalizada, [name]: value });
  };
 
  const handleChangePracticas = (e) => {
    const { name, value, type, checked } = e.target;
    const keys = name.split('.');

    setPracticas((currentPracticas) => {
      let updatedState = { ...currentPracticas };

      if (keys[0] === 'horario') {
          updatedState.horario = {
              ...updatedState.horario,
              [keys[1]]: type === 'checkbox' ? checked : value
          };

          let horasTotalesSemanales = 0;
          ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'].forEach((dia) => {
              let minutosManana = 0;
              let minutosTarde = 0;

              if (updatedState.horario[`hora${dia}MananaEntrada`] && updatedState.horario[`hora${dia}MananaSalida`]) {
                  const horaInicioManana = dayjs(updatedState.horario[`hora${dia}MananaEntrada`], 'HH:mm');
                  const horaTerminoManana = dayjs(updatedState.horario[`hora${dia}MananaSalida`], 'HH:mm');
                  minutosManana = horaTerminoManana.diff(horaInicioManana, 'minute');
              }

              if (updatedState.horario[`hora${dia}TardeEntrada`] && updatedState.horario[`hora${dia}TardeSalida`]) {
                  const horaInicioTarde = dayjs(updatedState.horario[`hora${dia}TardeEntrada`], 'HH:mm');
                  const horaTerminoTarde = dayjs(updatedState.horario[`hora${dia}TardeSalida`], 'HH:mm');
                  minutosTarde = horaTerminoTarde.diff(horaInicioTarde, 'minute');
              }

              horasTotalesSemanales += (minutosManana + minutosTarde) / 60;
          });

          updatedState.horario.totalHoras = horasTotalesSemanales.toString();
      } else {
          if (keys.length === 1) {
              // Si el campo es directamente una propiedad de practicas
              updatedState[keys[0]] = value;
          } else if (keys.length === 2) {
              // Si el campo está anidado un nivel (por ejemplo, horario.totalHoras)
              updatedState[keys[0]] = {
                  ...updatedState[keys[0]],
                  [keys[1]]: type === 'checkbox' ? checked : value
              };
          }
      }
      return updatedState;
    });
  };

  const handleButtonClickGenerica = async () => {
    setIsButtonDisabled(true);
    setModalGenOpen(false);
    await generarCartaGenerica(carta_generica.ultimoSemAprobado);
    setIsButtonDisabled(false);
  };

  const handleButtonClickPersonalizada = async () => {
    setIsButtonDisabled(true);
    setModalPersOpen(false);
    await generarCartaPersonalizada(personalizada);
    setIsButtonDisabled(false);
  };

  const handleButtonClickPostulacion = async () => {
    setIsButtonDisabled(true);
    setModalPostulacionOpen(false);
    await generarPostulacion(practicas);
    setIsButtonDisabled(false);
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
        setPracticas({ ...practicas, practica: { ...practicas.practica, ocasion: "Primera" } });
        setModalPostulacionOpen(true);
        break;
      case "postulacionSegunda":
        setPracticas({ ...practicas, practica: { ...practicas.practica, ocasion: "Segunda" } });
        setModalPostulacionOpen(true);
        break;
      case "verPostulacionesPrimera":
        setOcasion("Primera");
        setVerPostulaciones(true);
        break;
      case "verPostulacionesSegunda":
        setOcasion("Segunda");
        setVerPostulaciones(true);
        break;
      default:
        console.log("first");
    }
  };

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateInformation(inputs);
  };

  useEffect(() => {
    fetchData(email, setInputs, setIsButtonDisabled, setOpen);
    fetchCtGen(setCg);
    fetchCtPer(setCp);
    //fetchPractica(setCounters);
    obtenerInformacionPracticas("primera");
    obtenerInformacionPracticas("segunda");
  }, [email]);

  const tiers = [
    {
      title: "Carta Genérica",
      subheader: `Solicitado ${ct_cg} veces`,
      description: ["Se generará automáticamente su Carta genérica. Considere que ésta reemplazará a la más reciente que haya solicitado, creando nuevamente la solicitud."] ,
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
      subheader: `Solicitado ${info_primera.total} veces`,
      description: ["Formulario de postulación para su primera práctica profesional."],
      buttonText: "Generar",
      buttonVariant: "contained",
      actionName: "postulacionPrimera",
      disabled: !(info_primera.status),
    },
    {
      title: "Postulación Segunda Práctica",
      subheader: `Solicitado ${info_segunda.total} veces`,
      description: ["Formulario de postulación para su segunda práctica profesional."],
      buttonText: "Generar",
      buttonVariant: "contained",
      actionName: "postulacionSegunda",
      disabled: !(info_segunda.status),
    },
  ];

  return (    
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
      <CssBaseline />
      <Header />

      <IconButton
        aria-label="menu"
        sx={{ position: 'absolute', top: 16, left: 16 }} 
        id="long-button"
        color="inherit"
        aria-controls={openMenu ? 'long-menu' : undefined}
        aria-expanded={openMenu ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <IconButton 
          color="primary"
          aria-label="upload picture"
          component="span"
          >
            <Icon>account_circle</Icon>
        </IconButton>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '22ch',
          },
        }}
      >
        <MenuItem onClick = {() => {setOpen (true)}}>Modificar Información</MenuItem>
        <MenuItem onClick = {handleLogout}>Cerrar Sesión</MenuItem>
      </Menu>

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
      <PostulacionesModal
        style = {style}
        open={verPostulaciones}
        handleClose={() => setVerPostulaciones(false)}
        ocasion = {ocasion}
        informacion = {ocasion === "Primera" ? info_primera : info_segunda}
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
      <ModalPostulacionPractica
        style={style}
        open={modalPostulacion}
        practicas={practicas}
        setPracticas={setPracticas}
        handleChangePracticas={handleChangePracticas}
        handleClose={() => setModalPostulacionOpen(false)}
        handleButtonClickPostulacion={handleButtonClickPostulacion}
        
      />
    </ThemeProvider>
  );
};

export default Options;
