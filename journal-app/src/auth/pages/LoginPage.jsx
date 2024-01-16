import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Link as StyleLink,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../hooks";
import { useMemo } from "react";

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const { email, password, onInputChange } = useForm({
    email: "estebangonzalez@gmail.com",
    password: "1234567",
  });

  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });

    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    console.log("STATUS:", status, isAuthenticating);
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form action="">
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="correo"
              name="email"
              type="email"
              placeholder="ingrese@correo.com"
              sx={{ marginTop: "10px" }}
              onChange={(e) => onInputChange(e)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="password"
              type="password"
              placeholder="password"
              sx={{ marginTop: "10px" }}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              disabled={isAuthenticating}
              onClick={onSubmit}
              fullWidth
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              disabled={isAuthenticating}
              onClick={onGoogleSignIn}
              fullWidth
            >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <Typography>Dont have an account, please: </Typography>
          <StyleLink
            sx={{ ml: 1 }}
            component={Link}
            color="inherit"
            to="/auth/register"
          >
            Create an account
          </StyleLink>
        </Grid>
      </form>
    </AuthLayout>
  );
};
