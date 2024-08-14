import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import '@fortawesome/fontawesome-free/css/all.min.css';

const cargando = (e) => {
  Swal.fire({
    title: `Generando ${e}`,
    text: "Espere por favor",
    html: '<i class="fas fa-spinner fa-spin" style="font-size: 24px;"></i>',
    allowOutsideClick: false,
    showConfirmButton: false,
  });
};

const falla = (e) => {
  Swal.fire({
    title: "Error",
    text: `No se pudo generar la ${e}`,
    icon: "error",
    confirmButtonText: "Ok",
  }).then(() => {
    window.location.reload();
  });
};

const exito = (response, e) => {
  Swal.fire({
    title: `${e} Generada`,
    text: response.data,
    icon: "success",
    confirmButtonText: "Ok",
  }).then(() => {
    window.location.reload();
  });
};


export const generarCartaGenerica = async (ultimoSemAprobado) => {
  cargando("Carta Genérica");
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
    exito(response, "Carta Genérica");
  } catch (error) {
    console.error("Error updating information:", error);
    falla("Carta Genérica");
  }
};

export const generarCartaPersonalizada = async (personalizada) => {
  cargando("Carta Personalizada");
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
    exito(response, "Carta Personalizada");
  } catch (error) {
    console.error("Error updating information:", error);
    falla("Carta Personalizada");
  }
};

export const generarPostulacion = async (postulacion) => {
  cargando("Postulación");
  try {
    const response = await axios.post(
      `http://localhost:3000/api/practica`,
      postulacion,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    exito(response, "Postulación");
  } catch (error) {
    console.log("Error Generating application:", error);
    falla("Postulación");
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
