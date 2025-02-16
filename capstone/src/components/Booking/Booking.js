import React from "react";
import { BookingForm } from "./BookingForm";
import { Box } from "@mui/material";
export const Booking = (props) => {
  return (
    <Box sx={{ backgroundColor: "#495e57", minHeight: "400px" }}>
      <Box sx={{ margin: 4, marginTop: 0, padding: 4 }}>
        <BookingForm
          availableTimes={props.availableTimes}
          dispatch={props.dispatch}
          submitForm={props.submitForm}
        />
      </Box>
    </Box>
  );
};
