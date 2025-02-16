import React from "react";
import small_logo from "../../images/Logo.svg";
import {
  Container,
  Grid2,
  Typography,
  List,
  ListItem,
  Link,
  Box,
} from "@mui/material";

export const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Grid2 container spacing={8}>
          <Grid2 item xs={12} md={3}>
            <Box className="company-info">
              <img src={small_logo} alt="Logo" />
              <Typography variant="body2" color="textSecondary">
                We are a family-owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </Typography>
            </Box>
          </Grid2>

          <Grid2 item xs={12} md={3}>
            <Typography variant="h6">Important Links</Typography>
            <List>
              {["Home", "About", "Menu", "Reservation", "Login"].map(
                (link, index) => (
                  <ListItem key={index}>
                    <Link href="/" color="inherit" underline="hover">
                      {link}
                    </Link>
                  </ListItem>
                )
              )}
            </List>
          </Grid2>

          <Grid2 item xs={12} md={3}>
            <Typography variant="h6">Contact</Typography>
            <List>
              <ListItem>
                <Typography variant="body2">
                  Address: <br /> 123 Somewhere, SomePlace
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  Phone: <br /> +999 999 999 999
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  Email: <br /> littlelemon@email.com
                </Typography>
              </ListItem>
            </List>
          </Grid2>

          <Grid2 item xs={12} md={3}>
            <Typography variant="h6">Social Media Links</Typography>
            <List>
              {["Facebook", "Instagram", "Twitter"].map((social, index) => (
                <ListItem key={index}>
                  <Link href="/" color="inherit" underline="hover">
                    {social}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid2>
        </Grid2>
      </Container>
    </footer>
  );
};
