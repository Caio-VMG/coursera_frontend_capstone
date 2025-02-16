import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import bottom from "../../images/AboutBottom.jpg";
import top from "../../images/AboutTop.jpg";

export const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#495e57",
        minHeight: "400px",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          paddingY: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "16%",
          marginRight: "19.5%",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: 2, color: "#f4ce14" }}
          >
            About Our Restaurant
          </Typography>
          <Typography variant="body1" sx={{ color: "#edefee" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            venenatis ex diam, eu volutpat urna scelerisque bibendum. Nullam
            nibh lacus, semper in est et, aliquam malesuada ipsum. Nunc
            tincidunt posuere ante, nec tempus nisi imperdiet quis. Aliquam eu
            mi nec arcu accumsan condimentum in id velit. Nam rutrum quam dolor,
            quis mattis sem pharetra at. Sed dapibus enim nec est luctus
            placerat. Vivamus placerat sit amet enim eget ultricies. Cras
            tincidunt ut erat non congue. Suspendisse tristique, tellus ac
            blandit ultrices, lectus ligula venenatis sem, id rhoncus dolor
            felis at elit. Praesent eleifend leo non risus pellentesque pretium
            ac a arcu. Pellentesque eleifend sapien a nisi iaculis tempor. In
            non felis auctor, tincidunt orci egestas, molestie nunc. Integer
            bibendum, ipsum quis scelerisque vestibulum, erat eros ullamcorper
            nunc, in semper nunc neque vel dolor. Donec laoreet sollicitudin
            fermentum.
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "200px",
            height: "300px",
            paddingLeft: 1,
          }}
        >
          <img
            src={top}
            alt="Restaurant"
            style={{
              width: "100%",
              borderRadius: "10px",
              position: "absolute",
              top: 0,
              left: "30%",
              zIndex: 0,
            }}
          />
          <img
            src={bottom}
            alt="Dish"
            style={{
              width: "100%",
              borderRadius: "10px",
              position: "absolute",
              top: "70%",
              zIndex: 1,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
