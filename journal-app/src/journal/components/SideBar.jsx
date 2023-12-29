import { Draw } from "@mui/icons-material";
import { Box, Drawer } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer open sx={{ display: { xs: "block" } }}></Drawer>
      SideBar
    </Box>
  );
};
