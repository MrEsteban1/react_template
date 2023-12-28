// import React from 'react'

import { useEffect } from "react";

const Mensaje = () => {
  useEffect(() => {
    return () => {
      console.log("Desmontado el mensaje");
    };
  }, []);
  return <div className="alert alert-danger">Usuario ya existentes</div>;
};

export default Mensaje;
