import FoodCard from "@/components/Card/FoodCard";
import DataTable from "@/components/DashboardItems/Table";
import DashboardLayout from "@/components/Layout/DashbordLayout";
import { Box, Input, TextField, Button, Card } from "@mui/material";
import { BsSearch } from "react-icons/bs";

export default function Dashboard() {
  return (
    <>
      <h1 align="center">Dashboard</h1>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 5rem",
          gap: 2,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <BsSearch
                onClick={() => alert("hi")}
                sx={{
                  color: "primary.main",
                  cursor: "pointer",
                  "&:hover": {
                    color: "primary.dark",
                  },
                }}
              />
            ),
          }}
        />

        <Button variant="contained">Add New</Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 5rem",
          gap: 2,
        }}
      >
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: 2,
        }}
      >
        <DataTable />
      </Box>
    </>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
