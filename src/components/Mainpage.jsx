import * as React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Container from "@mui/material/Container";

const theme = createTheme();

export default function Mainpage() {
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(function(response) {
        setCards(response.data.drinks);
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <Container className="pageTitle" sx={{ pt: "3%" }}>
          <h2>Wine Grid </h2>
        </Container>

        <Container maxWidth="false">
          {/* End hero unit */}
          <Box className="mediaCardHolder">
            {cards.map(card => (
              <div key={card} className="mediaCard">
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <CardMedia
                    className="cardMedia"
                    component="img"
                    image={card.strDrinkThumb}
                    alt="random"
                  />
                  <CardContent className="cardContent" sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={{ fontWeight: "bold" }}
                    >
                      {card.strDrink}
                    </Typography>
                    <Typography>{card.strTags}</Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Box>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
