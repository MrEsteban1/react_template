import { CssBaseline, ThemeProvider } from "@mui/material";
import { purpleTheme } from "./index";

//configuraciones de theme para el estilo/provider de Material UI
// eslint-disable-next-line react/prop-types
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
