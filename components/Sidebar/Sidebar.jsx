import { MiscellaneousServicesOutlined } from "@mui/icons-material";
import { Box, Button, Drawer, IconButton, Menu, MenuItem } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      open
      sx={{
        width: "240px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "240px",
          boxSizing: "border-box",
        },
      }}
    >
      <DrawerHeader>
        <IconButton >
          <MiscellaneousServicesOutlined />
        </IconButton>
      </DrawerHeader>
      <Box
        sx={{
          height: "100%",
          width: "240px",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "10rem",

          gap: "1rem",
        }}
      >
        <MenuItem
          sx={{
            width: "80%",
            justifyContent: "center",
            padding: "1rem",
            borderRadius: "5px",
            backgroundColor: "primary.dark",
          }}
        >
          Menu Item
        </MenuItem>
        <MenuItem
          sx={{
            width: "80%",
            justifyContent: "center",
            padding: "1rem",
            borderRadius: "5px",
          }}
        >
          Menu Item
        </MenuItem>
        <MenuItem
          sx={{
            width: "80%",
            justifyContent: "center",
            padding: "1rem",
            borderRadius: "5px",
          }}
        >
          Menu Item
        </MenuItem>
        <MenuItem
          sx={{
            width: "80%",
            justifyContent: "center",
            padding: "1rem",
            borderRadius: "5px",
          }}
        >
          Menu Item
        </MenuItem>
        <MenuItem
          sx={{
            width: "80%",
            justifyContent: "center",
            padding: "1rem",
            borderRadius: "5px",
          }}
        >
          Menu Item
        </MenuItem>
      </Box>
    </Drawer>
  );
}
