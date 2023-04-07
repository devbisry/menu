import { Box, Button, MenuItem } from "@mui/material";

export default function Sidebar() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <MenuItem sx={{ color: "primary.contrastText" }}>Menu Item</MenuItem>
      </Box>
    </>
  );
}
