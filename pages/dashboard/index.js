import DataTable from "@/components/DashboardItems/Table";
import DashboardLayout from "@/components/Layout/DashbordLayout";
import { Box } from "@mui/material";
import { GridSearchIcon } from "@mui/x-data-grid";

export default function Dashboard() {
  return (
    <>
      <h1 align="center">Dashboard</h1>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <GridSearchIcon />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 2,
          padding: 2,
        }}
      >
        <DataTable width="400" />
        <DataTable height={300} />
      </Box>
    </>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
