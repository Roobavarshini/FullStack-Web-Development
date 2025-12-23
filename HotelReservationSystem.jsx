import React from "react";

function HotelReservationSystem() {
  const reserveRoom = () => {
    // Prompt dialogs – user input
    const name = prompt("Enter Guest Name:");
    if (!name) {
      alert("Reservation cancelled: Name is required.");
      return;
    }

    const roomType = prompt(
      "Enter Room Type (Single / Double / Deluxe):"
    );
    if (!roomType) {
      alert("Reservation cancelled: Room type is required.");
      return;
    }

    const nights = prompt("Enter Number of Nights:");
    if (!nights || isNaN(nights)) {
      alert("Reservation cancelled: Enter valid number of nights.");
      return;
    }

    // Confirm dialog
    const confirmReservation = confirm(
      `Please confirm your reservation:\n\nGuest Name: ${name}\nRoom Type: ${roomType}\nNights: ${nights}`
    );

    if (confirmReservation) {
      alert(
        `🏨 Reservation Successful!\n\nGuest: ${name}\nRoom Type: ${roomType}\nNights: ${nights}`
      );
    } else {
      alert("❌ Reservation Cancelled by User.");
    }
  };

  return (
    <div className="hotel-container">
      <h2>🏨 Hotel Reservation System</h2>
      <p>Click the button below to reserve a hotel room.</p>

      <button onClick={reserveRoom}>Reserve Room</button>

      {/* Internal CSS */}
      <style>{`
        .hotel-container {
          width: 420px;
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
          background: #2e7d32;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #1b5e20;
        }
      `}</style>
    </div>
  );
}

export default HotelReservationSystem;
