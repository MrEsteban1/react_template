import { AuthLayout } from "../layout/AuthLayout";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Link as StyleLink,
} from "@mui/material";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h6">Nombre</Typography>
            <TextField
              type="text"
              placeholder="Ingrse su nombre..."
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h6">Correo</Typography>
            <TextField
              type="email"
              placeholder="ingrese@correo.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h6">Contraseña</Typography>
            <TextField type="password" placeholder="contraseña" fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" fullWidth>
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
