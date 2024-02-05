import { Box, Toolbar } from "@mui/material";
import { Navbar } from "../components";
import { SideBar } from "../components/SideBar";

const sizeSideBar = 310;
// eslint-disable-next-line react/prop-types
export const JournalLayout = ({ children }) => {
  return (
    <Box
      className="animate__animated animate__fadeIn animate__faster"
      sx={{ display: "flex" }}
    >
      <Navbar drawerWidth={sizeSideBar} />
      <SideBar drawerWidth={sizeSideBar} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
