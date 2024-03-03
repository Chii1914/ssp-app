import React, { useEffect } from "react";

//TODO
//Manejo de token y cookie para autenticación

function Login() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
    }
  }, []);

  return <></>;
}

export default Login;

/*

import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');
    console.log(token); // Do something with the token here
  }, []);

  return <div>My Component</div>;
}

export default MyComponent;

*/
