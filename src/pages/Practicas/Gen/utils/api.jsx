import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import '@fortawesome/fontawesome-free/css/all.min.css';

const cargando = () => {
  Swal.fire({
    title: "Generando Carta",
    text: "Espere por favor",
    html: '<i class="fas fa-spinner fa-spin" style="font-size: 24px;"></i>',
    allowOutsideClick: false,
    showConfirmButton: false,
  });
};

const falla = () => {
  Swal.fire({
    title: "Error",
    text: "No se pudo generar la carta",
    icon: "error",
    confirmButtonText: "Ok",
  });
};

const exito = (response) => {
  Swal.fire({
    title: "Carta generada",
    text: response.data,
    icon: "success",
    confirmButtonText: "Ok",
  });
};


export const generarCartaGenerica = async (ultimoSemAprobado) => {
  cargando();
  try {
    const response = await axios.post(
      `http://localhost:3000/api/cartas-gen/crear`,
      { semestre: ultimoSemAprobado },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    exito(response);
  } catch (error) {
    console.error("Error updating information:", error);
    falla();
  }
};

export const generarCartaPersonalizada = async (personalizada) => {
  cargando();
  try {
    const response = await axios.post(
      `http://localhost:3000/api/cartas-per/crear`,
      personalizada,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    exito(response);
  } catch (error) {
    console.error("Error updating information:", error);
    falla();
  }
};

export const generarPrimeraPractica = async () => {
  //cargando();
  try {
    alert("generao");
  } catch (error) {
    console.log(error);
    falla();
  }
};

export const updateInformation = async (inputs) => {
  try {
    inputs.run = parseInt(inputs.run);
    await axios.patch(
      "http://localhost:3000/api/alumno",
      inputs,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    window.location.reload();
  } catch (error) {
    console.error("Error updating information:", error);
  }
};
