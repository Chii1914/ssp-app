import * as React from "react";
import Cookies from "js-cookie";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ArticleSharpIcon from "@mui/icons-material/ArticleSharp";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";
import DisabledByDefaultSharpIcon from "@mui/icons-material/DisabledByDefaultSharp";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from "@mui/x-data-grid-generator";
import axios from "axios";

const roles = ["Market", "Finance", "Development"];
const randomRole = () => {
  return randomArrayItem(roles);
};

const API_BASE_URL_SR = 'http://localhost:3000/api/practica/sn-rev';
const API_BASE_URL_R = 'http://localhost:3000/api/practica/rev-rech';

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: "", age: "", isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };
}

export default function Tablapostulaciones( region ) {

  const [loading, setLoading] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const obtenerPostulacionesSinRevision = async () => {
    setLoading(true);
    await axios.get(`${API_BASE_URL_SR}/${region.region}`, 
    {headers: {Authorization: `Bearer ${Cookies.get("token")}`}})
      .then(data => { setRows(data.data.map(item => ({ 
        id: item.id,
        run: item.alumno.run,
        nombre: `${item.alumno.primerNombre} ${item.alumno.segundoNombre}`.trim(),
        apellidop: item.alumno.apellidoPaterno,
        apellidom: item.alumno.apellidoMaterno,
        fsolicitud: new Date(item.fechaCreado).toLocaleString(),
        factualizacion: new Date(item.fechaCambioEstado).toLocaleString(),
        practica: item.ocasion,
        estado: item.estado
      })))})
      .catch(error => {
        console.error('Failed to fetch letters:', error);
      })
      .finally(() => setLoading(false));
  }

  const obtenerPostulacionesRechazadas = async () => {
    setLoading(true);
    await axios.get(`${API_BASE_URL_R}/${region.region}`, 
    {headers: {Authorization: `Bearer ${Cookies.get("token")}`}})
      .then(data => { setRows(data.data.map(item => ({
        id: item.id,
        run: item.alumno.run,
        nombre: `${item.alumno.primerNombre} ${item.alumno.segundoNombre}`.trim(),
        apellidop: item.alumno.apellidoPaterno,
        apellidom: item.alumno.apellidoMaterno,
        fsolicitud: new Date(item.fechaCreado).toLocaleString(),
        factualizacion: new Date(item.fechaCambioEstado).toLocaleString(),
        practica: item.ocasion,
        estado: item.estado
      })))})
      .catch(error => {
        console.error('Failed to fetch letters:', error);
      })
      .finally(() => setLoading(false));
  }

  React.useEffect(() => {
    obtenerPostulacionesSinRevision();
  }, []);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    const updatedRows = rows.map(row =>
      row.id === id ? { ...row, estado: "Rechazado" } : row
    );
    setRows(updatedRows);
  };
  

  const handleAcceptClick = (id) => () => {
    const updatedInitialRows = rows.map(row =>
      row.id === id ? { ...row, estado: "Aceptada" } : row
    );
    setRows(updatedInitialRows);
  };

  const handleSinAccionClick = () => {
    obtenerPostulacionesSinRevision();
    const filteredRows = rows.filter(row => row.estado === "Sin acción");
    setRows(filteredRows);
  };

  const handleRechazadasClick = () => {
    obtenerPostulacionesRechazadas();
    const filteredRows = rows.filter(row => row.estado === "Rechazada");
    setRows(filteredRows);
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: "run", headerName: "RUN", width: 180 },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 100,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "apellidop",
      headerName: "A. Paterno",
      width: 100,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "apellidom",
      headerName: "A. Materno",
      width: 100,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "fsolicitud",
      headerName: "Fecha Solicitud",
      width: 140,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "factualizacion",
      headerName: "Fecha Actualización",
      width: 140,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "practica",
      headerName: "Práctica",
      width: 80,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "estado",
      headerName: "Estado",
      width: 100,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Acción",
      width: 130,
      align: "left",
      headerAlign: "left",
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<ArticleSharpIcon />}
            label="Edit"
            className="textPrimary"
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<CheckBoxSharpIcon sx={{ color: "green" }} />}
            label="Delete"
            onClick={handleAcceptClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DisabledByDefaultSharpIcon sx={{ color: "red" }} />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <Box sx={{ display: "flex", padding: 2 }}>
        <Button variant="contained" color="success" sx={{ mr: 2 }} onClick={handleSinAccionClick}>
          Sin acción
        </Button>
        <Button
          onClick={handleRechazadasClick}
          variant="contained"
          sx={{
            mr: 2,
            backgroundColor: "#86110e", // Replace with your custom color
            "&:hover": {
              backgroundColor: "#3f0605", // Replace with a darker shade for hover effect
            
            },
          }}
        >
          Rechazadas
        </Button>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}
