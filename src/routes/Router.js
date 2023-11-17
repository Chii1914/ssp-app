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
//Prácticas
const Register = Loadable(lazy(() => import("../pages/Practicas/Register/Register")));
const Cartaspost = Loadable(lazy(() => import("../pages/Practicas/Gen/CartasyPost")));
const Inicio = Loadable(lazy(() => import("../pages/Practicas/Home/Inicio")));
const InicioSesion = Loadable(lazy(() => import("../pages/Practicas/Login/Login")));
//Coordinador
const Inicocoord = Loadable(lazy(() => import("../pages/Coordinador/Login/Login")));
/* ****Routes***** */

//Páginas trabajadas:
//Cartas y postulaciones (Cartaspost)
//Inico
//Inicio Sesión 1/2 (InicioSesion)
//Registro 

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "", exact: true, element: <Inicio /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
      { path: "cartaspost", exact: true, element: <Cartaspost />},
    ],
  },
  {
    path: "/",  //Second layout-> Full Layout pero sin footer
    element: <SecondLayout />,
    children:[
      {path: "registro", exact: true, element: <Register />},
      { path: "iniciar_sesion", exact: true, element: <InicioSesion /> },
      { path: "*", element: <Navigate to="/404" /> },
    ]
  },
  {
    path: "/coord",  //Second layout-> Full Layout pero sin footer
    element: null,
    children:[
      {path: "", exact: true, element: <Inicocoord />},
      { path: "*", element: <Navigate to="/404" /> },
      { path: "iniciar_sesion", exact: true, element: <InicioSesion /> },
      
    ]
  }
];

export default Router;
