import axios from "axios";
import Cookies from "js-cookie";

export const fetchData = async (email, setInputs, setIsButtonDisabled, setOpen) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/alumno/rev`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    const data = response.data;
    setInputs({
      primerNombre: data.primerNombre || "",
      segundoNombre: data.segundoNombre || "",
      apellidoPaterno: data.apellidoPaterno || "",
      apellidoMaterno: data.apellidoMaterno || "",
      run: parseInt(data.run) || "",
      correoInstitucional: data.correoInstitucional || "",
      df: data.df || "",
      sexo: data.sexo || "",
      sede: data.sede || "",
      anioIngreso: data.anioIngreso || "",
      correoPersonal: data.correoPersonal || "",
      telefono: data.telefono || "",
      ultimoSemAprobado: data.ultimoSemAprobado || "",
    });
    if (
      data.run === null ||
      data.df === null ||
      data.primerNombre === null ||
      data.segundoNombre === null ||
      data.apellidoPaterno === null ||
      data.apellidoMaterno === null ||
      data.correoInstitucional === null ||
      data.telefono === null ||
      data.sede === null ||
      data.anioIngreso === null ||
      data.sexo === null ||
      data.telefono === null ||
      data.ultimoSemAprobado === null
    ) {
      setIsButtonDisabled(true);
      setOpen(true);
    } else {
      setIsButtonDisabled(false);
      setOpen(false);
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
    setIsButtonDisabled(true);
    setOpen(true);
  }
};

export const fetchCtGen = async (setCg) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/alumno/ct-gen/`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    setCg(response.data === 0 ? "0" : response.data);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const fetchCtPer = async (setCp) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/alumno/ct-per/`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    setCp(response.data === 0 ? "0" : response.data);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const fetchPractica = async (setCounters) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/practica/`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    setCounters(response.data);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
