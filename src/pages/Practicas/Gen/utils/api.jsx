import axios from "axios";
import Cookies from "js-cookie";

export const generarCartaGenerica = async (ultimoSemAprobado) => {
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
    alert(response.data);
  } catch (error) {
    console.error("Error updating information:", error);
  }
};

export const generarCartaPersonalizada = async (personalizada) => {
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
    alert(response.data);
  } catch (error) {
    console.error("Error updating information:", error);
  }
};

export const generarPrimeraPractica = async () => {
  try {
    alert("generao");
  } catch (error) {
    console.log(error);
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
