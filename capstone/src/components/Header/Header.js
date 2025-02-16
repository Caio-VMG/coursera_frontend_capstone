import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../images/Hero.jpg";
import { Box } from "@mui/material";

export const Header = () => {
  return (
    <header className="header">
      <Box
        sx={{
          color: "#edefee",
          padding: "10px 13%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          flexDirection: { xs: "column", lg: "row" },
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        <Box className="header__content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <Box className="header__description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sit amet commodo ipsum. Nulla eget massa risus. Suspendisse semper
              ipsum non sagittis lobortis. Aliquam diam risus, ullamcorper sed
              eros quis, eleifend tempor justo. Fusce lorem turpis, sollicitudin
              quis mauris sed, aliquet dictum eros. Suspendisse sed mauris arcu.
              Morbi a gravida nisi.
            </p>
          </Box>
          <Link to="/booking">
            <button aria-label="Reserve a table">Reserve a table</button>
          </Link>
        </Box>
        <Box className="header__image">
          <img src={bannerImg} alt="Restaurant food at Little Lemon" />
        </Box>
      </Box>
    </header>
  );
};
