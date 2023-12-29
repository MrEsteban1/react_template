import { Google } from "@mui/icons-material";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Link as StyleLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form action="">
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="correo"
              type="email"
              placeholder="ingrese@correo.com"
              sx={{ marginTop: "10px" }}
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
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" fullWidth>
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
