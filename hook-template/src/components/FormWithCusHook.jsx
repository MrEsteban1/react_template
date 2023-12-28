import { useEffect } from "react";
import Mensaje from "./Mensaje";
import useForm from "../hooks/useForm";

const FormWithCusHook = () => {
  const { username, password, email, onInputChange, resetValues } = useForm({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("cambiando");
  }, [username, password, email]);

  return (
    <>
      <hr />
      <h2>Formulario con Simple Hook:</h2>
      <input
        type="text"
        className="form-control"
        placeholder={username}
        value={username}
        name="username"
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-4"
        placeholder={email}
        value={email}
        name="email"
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-4"
        placeholder={password}
        value={password}
        name="password"
        onChange={onInputChange}
      />
      <button onClick={resetValues} className="btn btn-danger">
        Borrar
      </button>
      <p>mensaje: {username}</p>
      {username === "estejo1" && <Mensaje />}
    </>
  );
};

export default FormWithCusHook;
