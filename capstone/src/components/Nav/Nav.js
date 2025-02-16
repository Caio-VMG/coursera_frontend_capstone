import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import "@fontsource/markazi-text/500.css";

const pages = ["Home", "About", "Menu", "Reservation", "Login"];

export const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <nav>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#EDEFEE", color: "#495E57" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box sx={{ cursor: "pointer" }}>
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </Box>

              <IconButton
                size="large"
                aria-label="compact-menu-navbar"
                aria-controls="menu-navbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ position: "absolute", right: 0 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Menu
              id="menu-navbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Box sx={{ color: "#495E57" }}>
                {pages.map((page) => (
                  <Link to={page == "Reservation" ? "/booking" : "/"}>
                    <MenuItem
                      data-testid={page}
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ cursor: "pointer" }}
                    >
                      <Typography sx={{ textAlign: "center" }}>
                        {page}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Box>
            </Menu>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 2,
                ml: 2,
                cursor: "pointer",
              }}
            >
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <>
                  <Link to={page == "Reservation" ? "/booking" : "/"}>
                    <Button
                      data-testid={page + "-button"}
                      key={page + "-dropdown"}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        paddingX: 1,
                        paddingY: 0,
                        color: "#495E57",
                        display: "block",
                        fontFamily: "Markazi Text, serif",
                        fontSize: "22px",
                        textTransform: "capitalize",
                        cursor: "pointer",
                      }}
                    >
                      {page}
                    </Button>
                  </Link>
                </>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
};
