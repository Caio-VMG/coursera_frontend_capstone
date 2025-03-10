import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";
import Swal from "sweetalert2";
import { Booking } from "../Booking/Booking";

export const Main = () => {
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };

  const updateTimes = (state, date) => {
    return { availableTimes: fetchAPI(new Date()) };
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  const submitForm = (formData) => {
    Swal.fire({
      title: "Reservation Done!",
      icon: "success",
      customClass: {
        confirmButton: "swal2-confirm-custom",
      },
    });
  };

  const navigate = useNavigate();
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
      </Routes>
    </main>
  );
};
