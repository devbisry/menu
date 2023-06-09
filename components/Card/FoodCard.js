import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


export default function FoodCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="https://material-ui.com/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardHeader title="Shrimp and Chorizo Paella" 
        subheader="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like." />
        <CardContent >
            <Typography variant="h6">
                Price: 100 Birr
            </Typography>
        </CardContent >
    </Card>
  );
}
