import React from "react";
import Loader from "./Loader";

const LastBookingDetails = (props) => {
  const {
    lastBookingPresent,
    seat,
    timing,
    movieName,
    errorMsg,
    finishLoading,
    loading,
  } = props;
  const seatLabels = [
    { label: "A1", key: "a1" },
    { label: "A2", key: "a2" },
    { label: "A3", key: "a3" },
    { label: "A4", key: "a4" },
    { label: "D1", key: "d1" },
    { label: "D2", key: "d2" },
  ];
  return (
    <div className="LastBooking">
      <h4 className="ContainerHeading">Last Booking Details</h4>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Check if there are any previous bookings */}
          {finishLoading && lastBookingPresent === false && errorMsg && (
            <div>
              <h3 className="error_msg fs-4">{errorMsg}</h3>{" "}
              {/* Display a message when no previous booking is found */}
            </div>
          )}
          {/* when last booking data is present and data fetching is finish*/}

          {lastBookingPresent && finishLoading && (
            <div>
              <div className="heading_details">Seats:</div>
              <div className="booked_seat_wrapper">
                {/* map function for seat label */}
                {seatLabels.map(({ label, key }) => (
                  <div className="d-flex align-items-center" key={key}>
                    <span className="booking_seat_sp">{`${label}:-`}</span>
                    {seat && seat[key] ? (
                      <span className="seat_booked">{`${seat[key]}`}</span>
                    ) : (
                      <span className="seat_booked">{``}</span>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <span className="heading_details">Slot:</span>{" "}
                <span className="seat_b">{timing}</span>
              </div>
              <div>
                <span className="heading_details ">Movie:</span>{" "}
                <span className="name_movie">{movieName}</span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LastBookingDetails;
