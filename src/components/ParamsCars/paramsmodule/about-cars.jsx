import { Grid, Stack, Typography } from "@mui/material";
import Contact from "./contact";
import HerroCars from "./herro-cars";
import "./params.css";
import FormCars from "./form-cars";

const AboutCars = () => {
  return (
    <Stack sx={{ marginLeft: "100px" }}>
      <HerroCars />
      <hr />
      <Grid container spacing={3} my={2}>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/years-car.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>2021</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "25px", height: "33px" }}
              src="/img/about-cars/seconds-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>10.2</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/speed.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>260</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/maxpeople-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>5</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/color-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>black</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/motor-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>2.0 Turbo</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/automatik-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>Automatic</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/whel-drive-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>front-wheel drive</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/petrol-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>petrol</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/budget-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>Budget Cars</Typography>
          </Stack>
        </Grid>
      </Grid>
      <hr />
      <Contact />
      <FormCars />
      <Stack my={5} spacing={1}> 
        <Typography variant="body2" sx={{color:"#a4a4a4"}}>The price doesnt include additional 5% VAT.</Typography>
        <Typography variant="body2" sx={{color:"#a4a4a4"}}>
          There is a 3% transaction fee when paying by credit/debit card.
        </Typography>
        <Typography variant="body2" sx={{color:"#a4a4a4"}}>
          There is a 7% transaction fee when paying with American Express.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AboutCars;
