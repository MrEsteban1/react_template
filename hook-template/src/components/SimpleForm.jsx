import { useEffect, useState } from "react";
import Mensaje from "./Mensaje";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "estejo",
    email: "estejo@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = (event) => {
    const { target } = event;

    setFormState({ ...formState, [target.name]: target.value });
  };

  useEffect(() => {}, []);
  useEffect(() => {}, [username]);
  useEffect(() => {}, [email]);

  return (
    <>
      <hr />
      <h2>Formulario Simple:</h2>
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
      <p>{username}</p>
      {username === "estejo1" && <Mensaje />}
    </>
  );
};

export default SimpleForm;
