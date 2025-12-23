import React from "react";

function FlightTicketBooking() {
  const bookTicket = () => {
    // Prompt dialog – user input
    const name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    const destination = prompt("Enter Destination:");
    if (!destination) {
      alert("Booking cancelled: Destination is required.");
      return;
    }

    const seats = prompt("Enter Number of Seats:");
    if (!seats || isNaN(seats)) {
      alert("Booking cancelled: Enter a valid number of seats.");
      return;
    }

    // Confirm dialog
    const confirmBooking = confirm(
      `Please confirm your booking:\n\nPassenger: ${name}\nDestination: ${destination}\nSeats: ${seats}`
    );

    if (confirmBooking) {
      alert(
        `✅ Ticket Booked Successfully!\n\nPassenger: ${name}\nDestination: ${destination}\nSeats: ${seats}`
      );
    } else {
      alert("❌ Booking Cancelled by User.");
    }
  };

  return (
    <div className="flight-container">
      <h2>✈️ Flight Ticket Booking</h2>
      <p>Click the button below to book your flight ticket.</p>

      <button onClick={bookTicket}>Book Ticket</button>

      {/* Internal CSS */}
      <style>{`
        .flight-container {
          width: 400px;
          margin: 50px auto;
          padding: 25px;
          text-align: center;
          background: #f5f7fa;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        button {
          padding: 12px 20px;
          font-size: 16px;
          background: #4a4aff;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #2c2cff;
        }
      `}</style>
    </div>
  );
}

export default FlightTicketBooking;
