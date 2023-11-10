import React, { lazy } from "react";
import Loadable from "../layouts/Loadable";
import { Navigate } from "react-router-dom";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

const SecondLayout = Loadable(
  lazy(() => import("../layouts/full-layout/SecondLayout"))
);

/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/Error/404")));

/* ****Pages***** */

const Deudas = Loadable(lazy(() => import("../pages/Deudas/Deudas")));
const Eventos = Loadable(lazy(() => import("../pages/Eventos/Eventos")));
const Categorias = Loadable(lazy(() => import("../pages/Categorias/Categorias")));
const Recintos = Loadable(lazy(() => import("../pages/Recintos/Recintos")));
const Login = Loadable(lazy(() => import("../pages/Login/Login")));

const Register = Loadable(lazy(() => import("../pages/Practicas/Register/Register")));
const Cartaspost = Loadable(lazy(() => import("../pages/Practicas/Gen/CartasyPost")));
const Inicio = Loadable(lazy(() => import("../pages/Practicas/Home/Inicio")));
const InicioSesion = Loadable(lazy(() => import("../pages/Practicas/Login/Login")));
/* ****Routes***** */

//Páginas trabajadas:
//Cartas y postulaciones (Cartaspost)
//Inico
//Inicio Sesión 1/2 (InicioSesion)

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "", exact: true, element: <Inicio /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
      { path: "iniciar_sesion", exact: true, element: <InicioSesion /> },
      { path: "cartaspost", exact: true, element: <Cartaspost />},
    ],
  },
  {
    path: "/",
    element: <SecondLayout />,
    children:[
      {path: "registro", exact: true, element: <Register />},
    ]
  }
];

export default Router;
