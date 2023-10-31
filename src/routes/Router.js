import React, { lazy } from "react";
import Loadable from "../layouts/Loadable";
import { Navigate } from "react-router-dom";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/Error/404")));

/* ****Pages***** */
const SingIn = Loadable(lazy(() => import("../pages/Practicas/Home/SignIn")));
const Deudas = Loadable(lazy(() => import("../pages/Deudas/Deudas")));
const Eventos = Loadable(lazy(() => import("../pages/Eventos/Eventos")));
const Categorias = Loadable(
  lazy(() => import("../pages/Categorias/Categorias"))
);
const Recintos = Loadable(lazy(() => import("../pages/Recintos/Recintos")));
const Register = Loadable(lazy(() => import("../pages/Register/Register")));
const Login = Loadable(lazy(() => import("../pages/Login/Login")));
const Cartaspost = Loadable(lazy(() => import("../pages/Practicas/Gen/CartasyPost")));

/* ****Routes***** */

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "", exact: true, element: <SingIn /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
      { path: "deudas", exact: true, element: <Deudas /> },
      { path: "eventos", exact: true, element: <Eventos /> },
      { path: "categorias", exact: true, element: <Categorias /> },
      { path: "recintos", exact: true, element: <Recintos /> },
      { path: "login", exact: true, element: <Login /> },
      { path: "registro", exact: true, element: <Register /> },
      { path: "cartaspost", exact: true, element: <Cartaspost />}
    ],
  },
];

export default Router;
