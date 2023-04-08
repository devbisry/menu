import FoodCard from "@/components/Card/FoodCard";
import DashboardLayout from "@/components/Layout/DashbordLayout";
import { Box, Button, TextField } from "@mui/material";
import { BsSearch } from "react-icons/bs";

export default function Menu() {
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

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Button variant="contained">Add New</Button>
          <Button variant="contained">Add New</Button>
          <Button variant="outlined">Add New</Button>
          <Button variant="contained">Add New</Button>
          <Button variant="contained">Add New</Button>
          <Button variant="outlined">Add New</Button>
          <Button variant="contained">Add New</Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          },
          padding: "1rem 5rem",
          gap: 2,
        }}
      >
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </Box>
    </>
  );
}

Menu.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
