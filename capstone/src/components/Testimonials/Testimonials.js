import React from "react";
import { reviews } from "../../Reviews";
import {
  Box,
  Card,
  Avatar,
  Rating,
  CardContent,
  Typography,
  Grid2,
} from "@mui/material";

export const Testimonials = () => {
  return (
    <Box
      sx={{
        paddingBottom: 4,
        px: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography variant="h4" sx={{ padding: 4, fontWeight: "bold" }}>
        Testimonials:
      </Typography>
      <Grid2
        container
        spacing={3}
        justifyContent="center"
        sx={{ width: "80%" }}
      >
        {reviews.map((review, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={review.id}>
            <Card sx={{ maxWidth: 324, margin: 2 }}>
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar
                    alt="User"
                    src="/path/to/avatar.jpg"
                    sx={{ marginRight: 2 }}
                  />
                  <Box>
                    <Typography variant="h6">{review.name}</Typography>
                    <Rating
                      name="read-only"
                      value={review.rating}
                      readOnly
                      sx={{ marginTop: 1 }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: 2 }}
                >
                  {review.review}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
