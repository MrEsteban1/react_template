import { Grid, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      //Primary main is set in the AppTheme component
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        xs={6}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5">{title}</Typography>

        {children}
      </Grid>
    </Grid>
  );
};
