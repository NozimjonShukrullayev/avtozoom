import { Box, Stack, Typography } from "@mui/material";

const HerroCars = () => {
  return (
    <Box sx={{ display: "flex", padding: "10px", gap: "30px" }}>
      <Stack>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "start",
              color: "white",
              gap:"5px"
            }}
            fontFamily={"Roboto"}
          >
            <p
              style={{
                display: "flex",
                fontSize: "26px",
                lineHeight: "24px",
                gap:"10px"
              }}
            >
              <span>AED</span>
              <span> 2000</span>
            </p>
            <span
              style={{
                display: "flex",
                fontSize: "22px",
                lineHeight: "24px",
                color:"#ffffff85"
              }}
            >
              <span> / $ </span>
              <span>2000</span>
            </span>
          </Typography>
        </Box>
        <p style={{ color: "#ffffff7e", margin: "8px 0", fontWeight: "700" }}>
          per day
        </p>
        <Typography
          sx={{
            color: "white",
            textDecoration: "line-through",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          <span>AED</span> <span style={{ color: "#ffffff7e" }}>/ $</span>
        </Typography>
      </Stack>
      <Stack sx={{ width: "330px" }} spacing={3}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography
            sx={{
              color: "#ffffff7e",
              fontFamily: "Roboto",
              fontSize: "13px",
            }}
          >
            Deposit
          </Typography>
          <Typography>
            <span
              style={{
                color: "white",
                fontFamily: "Roboto",
                fontWeight: "700",
              }}
            >
              AED 1200
            </span>
            <p
              style={{
                color: "#ffffff7e",
                fontSize: "12px",
                fontFamily: "Roboto",
                fontWeight: "700",
              }}
            >
              AED 1200 for credit cards payment
            </p>
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography
            sx={{
              color: "#ffffff7e",
              fontFamily: "Roboto",
              fontSize: "13px",
            }}
          >
            Premium protection
          </Typography>
          <Typography sx={{ transform: "translateX(-58px);" }}>
            <span
              style={{
                color: "white",
                fontFamily: "Roboto",
                fontWeight: "700",
              }}
            >
              AED 300
            </span>
            <p
              style={{
                color: "#ffffff7e",
                fontSize: "12px",
                fontFamily: "Roboto",
                fontWeight: "700",
              }}
            >
              AED 300 price for 1 day
            </p>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HerroCars;
