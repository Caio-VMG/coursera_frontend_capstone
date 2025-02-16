import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Grid2,
  Typography,
} from "@mui/material";

const number = [1, 2, 3, 4, 5, 6];

export const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [errors, setErrors] = useState({
    date: "",
    selectedTime: "",
    guests: "",
    occasion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = { ...errors };

    formErrors.date = !date ? "Date is required" : "";
    formErrors.selectedTime = !selectedTime ? "Time is required" : "";
    formErrors.guests =
      guests <= 0 ? "Number of guests must be greater than 0." : "";
    formErrors.occasion = !occasion ? "Occasion is required" : "";

    setErrors(formErrors);

    if (!Object.values(formErrors).some((error) => error !== "")) {
      props.submitForm(e);
    }
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <Grid2 container spacing={3} direction="column">
            <Grid2 item>
              <Typography
                variant="h5"
                sx={{
                  color: "#f4ce14",
                }}
              >
                Reservation Form
              </Typography>
            </Grid2>

            <Grid2 item>
              <TextField
                id="book-date"
                type="date"
                value={date}
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
                fullWidth
                required
                error={!!errors.date}
                helperText={errors.date}
                sx={{
                  "& .MuiFormHelperText-root": {
                    margin: 0,
                  },
                  color: "#edefee",
                  "& .MuiInputBase-input": {
                    color: "#edefee",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottom: "1px solid #edefee",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottom: "2px solid #edefee",
                  },
                  "& .Mui-focused .MuiInputLabel-root": {
                    color: "#edefee",
                  },
                }}
              />
            </Grid2>

            <Grid2 item>
              <FormControl fullWidth error={!!errors.guests}>
                <InputLabel
                  id="book-guests-label"
                  sx={{
                    color: "#edefee",
                    "&.Mui-focused": {
                      color: "#edefee",
                    },
                  }}
                >
                  Number of Guests
                </InputLabel>
                <Select
                  labelId="book-guests-label"
                  id="book-guests"
                  value={guests}
                  onChange={(e) => {
                    setGuests(e.target.value);
                    setErrors({ ...errors, guests: "" });
                  }}
                  fullWidth
                  sx={{
                    color: "#edefee",
                    "& .MuiInputBase-input": {
                      color: "#edefee",
                    },
                    "& .MuiSelect-icon": {
                      color: "#edefee",
                    },
                  }}
                >
                  <MenuItem value="">Select the number of guests</MenuItem>
                  {number.map((number) => {
                    return (
                      <MenuItem key={number} value={number}>
                        {number}
                      </MenuItem>
                    );
                  })}
                </Select>
                {errors.guests && (
                  <Typography color="error" variant="body2">
                    {errors.guests}
                  </Typography>
                )}
              </FormControl>
            </Grid2>

            <Grid2 item>
              <FormControl fullWidth error={!!errors.selectedTime}>
                <InputLabel
                  id="book-time-label"
                  sx={{
                    color: "#edefee",
                    "&.Mui-focused": {
                      color: "#edefee",
                    },
                  }}
                >
                  Choose Time
                </InputLabel>
                <Select
                  labelId="book-time-label"
                  id="book-time"
                  value={selectedTime}
                  onChange={(e) => {
                    setSelectedTime(e.target.value);
                    setErrors({ ...errors, selectedTime: "" });
                  }}
                  fullWidth
                  sx={{
                    color: "#edefee",
                    "& .MuiInputBase-input": {
                      color: "#edefee",
                    },
                    "& .MuiSelect-icon": {
                      color: "#edefee",
                    },
                  }}
                >
                  <MenuItem value="">Select a Time</MenuItem>
                  {props.availableTimes.availableTimes.map((time) => {
                    return (
                      <MenuItem key={time} value={time}>
                        {time}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid2>

            <Grid2 item>
              <FormControl fullWidth error={!!errors.occasion}>
                <InputLabel
                  id="book-occasion-label"
                  sx={{
                    color: "#edefee",
                    "&.Mui-focused": {
                      color: "#edefee",
                    },
                  }}
                >
                  Occasion
                </InputLabel>
                <Select
                  labelId="book-occasion-label"
                  id="book-occasion"
                  value={occasion}
                  onChange={(e) => {
                    setOccasion(e.target.value);
                    setErrors({ ...errors, occasion: "" });
                  }}
                  fullWidth
                  sx={{
                    color: "#edefee",
                    "& .MuiInputBase-input": {
                      color: "#edefee",
                    },
                    "& .MuiSelect-icon": {
                      color: "#edefee",
                    },
                  }}
                >
                  <MenuItem value="">Select an Occasion</MenuItem>
                  <MenuItem value="Birthday">Birthday</MenuItem>
                  <MenuItem value="Engagement">Engagement</MenuItem>
                  <MenuItem value="Anniversary">Anniversary</MenuItem>
                </Select>
                {errors.occasion && (
                  <Typography color="error" variant="body2">
                    {errors.occasion}
                  </Typography>
                )}
              </FormControl>
            </Grid2>

            <Grid2 item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  backgroundColor: "#f4ce14",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#e3b700",
                  },
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
              >
                Make your reservation
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </section>
    </header>
  );
};
