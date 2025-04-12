import {
  Box,
  Card,
  CardMedia,
  Grid,
  Link,
  Skeleton,
  Typography,
} from "@mui/material";
import GetCars from "../../../api/cars/get-cars.api";
import { imgUrl } from "../..";

const SimilarOffers = () => {
  const { data: carsData, isLoading } = GetCars();

  return (
    <div style={{ padding: "5px" }}>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            rowGap: "20px",
          }}
        >
          {Array.from({ length: 6 }).map((_, ind) => {
            return (
              <Skeleton key={ind} variant="rounded" width={410} height={300} />
            );
          })}
        </Box>
      ) : (
        <Grid container spacing={3} my={2} gap={2}>
          {carsData?.data?.map((car, ind) => {
            return (
              <Grid
                key={ind}
                sx={{
                  border: "1px solid #ffffff2f",
                  p: "10px",
                  paddingBottom: "50px",
                  borderRadius: "5px",
                }}
                xs={2.8}
              >
                <Link sx={{cursor:"pointer",textDecoration:"none"}} href={`/carsinfo/${car.car_images[0].car_id}`}>
                  <Card
                    sx={{
                      width: "100%",
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="224"
                      image={`${imgUrl}${car.car_images[0].image.src}`}
                      alt="Paella dish"
                    />
                    <Typography
                      sx={{ color: "white" }}
                      fontFamily={"Roboto"}
                      variant="h6"
                      my={2}
                    >
                      {car.brand.title} {car.model.name}
                    </Typography>
                    <hr />
                    <Typography
                      variant="h6"
                      my={2}
                      color={"white"}
                      fontFamily={"Roboto"}
                    >
                      AED {car.price_in_aed} /
                      <span style={{ color: "#9e9a9a" }}>
                        {car.price_in_usd}
                      </span>{" "}
                    </Typography>
                    <span style={{ color: "#9e9a9a" }}>per day</span>
                  </Card>
                </Link>
              </Grid>
            );  
          })}
        </Grid>
      )}
    </div>
  );
};

export default SimilarOffers;
