import { Box, Button, MenuItem } from "@mui/material";

export default function Sidebar() {
  return (
      <Box
        sx={{
          height: "100%",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "10rem",
          
          gap: "1rem",
        }}
      >
        <MenuItem sx={{ width:"80%", justifyContent: "center", padding:"1rem", borderRadius:"5px"}}>Menu Item</MenuItem>
        <MenuItem sx={{ width:"80%", justifyContent: "center", padding:"1rem", borderRadius:"5px"}}>Menu Item</MenuItem>
        <MenuItem sx={{ width:"80%", justifyContent: "center", padding:"1rem", borderRadius:"5px"}}>Menu Item</MenuItem>
        <MenuItem sx={{ width:"80%", justifyContent: "center", padding:"1rem", borderRadius:"5px"}}>Menu Item</MenuItem>
        <MenuItem sx={{ width:"80%", justifyContent: "center", padding:"1rem", borderRadius:"5px"}}>Menu Item</MenuItem>
      </Box>
  );
}
