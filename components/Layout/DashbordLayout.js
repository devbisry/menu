// import Footer from './footer'
import { Box } from "@mui/material";
import { Sidebar } from "..";

export default function DashboardLayout({ children }) {
  return (
    <>
      <h1>Header</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Sidebar />
        </Box>
        <Box sx={{ flexGrow: 5 }}>
          <main>{children}</main>
        </Box>
      </Box>
      <h1>Footer</h1>
    </>
  );
}
