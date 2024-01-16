import { AuthLayout } from "../layout/AuthLayout";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Link as StyleLink,
} from "@mui/material";
import { useForm } from "../hooks/useForm";
import { Link } from "react-router-dom";
import { useState } from "react";

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    displayName,
    email,
    password,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
    onInputChange,
  } = useForm(
    {
      email: "",
      password: "4",
      displayName: "",
    },
    formValidations
  );

  return (
    <AuthLayout title="Register">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFormSubmitted(true);
        }}
      >
        <Grid container>
          <Typography variant="h4">{isFormValid.toString()}</Typography>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h6">Nombre</Typography>
            <TextField
              type="text"
              name="displayName"
              placeholder="Ingrse su nombre..."
              fullWidth
              onChange={onInputChange}
              error={displayNameValid !== null && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h6">Correo</Typography>
            <TextField
              type="email"
              name="email"
              placeholder="ingrese@correo.com"
              onChange={onInputChange}
              fullWidth
              error={emailValid !== null && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h6">Contraseña</Typography>
            <TextField
              type="password"
              name="password"
              onChange={onInputChange}
              placeholder="contraseña"
              fullWidth
              error={password !== null && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={4}>
            <Button type="submit" variant="contained" fullWidth>
              Create account
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <Typography>If you have an account: </Typography>
          <StyleLink
            sx={{ ml: 1 }}
            component={Link}
            color="inherit"
            to="/auth/login"
          >
            Login with your account
          </StyleLink>
        </Grid>
      </form>
    </AuthLayout>
  );
};

const formValidations = {
  email: [(value) => value.includes("@"), "Email must have an @"],
  password: [(value) => value.length > 6, "Passowrd must have 6 letters."],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};
