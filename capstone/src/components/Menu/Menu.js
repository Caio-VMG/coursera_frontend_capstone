import React from "react";
import { menuItems } from "../../MenuItems";
import Swal from "sweetalert2";
import bruschetta from "../../images/bruschetta.svg";
import desert from "../../images/desert.jpg";
import pasta from "../../images/Pasta.jpg";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid2,
} from "@mui/material";

const images = [desert, pasta, bruschetta];
export const Menu = () => {
  const handleOrder = (id) => {
    Swal.fire({
      title: "Do you want to add this dish to your cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, add to cart!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      customClass: {
        confirmButton: "swal2-confirm-custom",
        cancelButton: "swal2-cancel-custom",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Dish added to cart!",
          icon: "success",
          customClass: {
            confirmButton: "swal2-confirm-custom",
          },
        });
      }
    });
  };

  return (
    <Box
      sx={{
        py: 4,
        px: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          width: "68.5%",
          padding: "0 16px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Special Offers!
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f4ce14",
            color: "black",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Check Our Menu
        </Button>
      </Box>
      <Grid2
        container
        spacing={3}
        justifyContent="center"
        sx={{ width: "80%" }}
      >
        {menuItems.map((menuItem, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={menuItem.id}>
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "#495E57",
                color: "#edefee",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={images[index]}
                alt={menuItem.title}
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#edefee" }}>
                    {menuItem.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#edefee" }}>
                    ${menuItem.price}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#edefee", mb: 2 }}>
                  {menuItem.description}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleOrder(menuItem.id)}
                  sx={{
                    backgroundColor: "#f4ce14",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
