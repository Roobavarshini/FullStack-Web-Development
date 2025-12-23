import React from "react";

function OnlineCabBooking() {
  const bookCab = () => {
    // Prompt dialogs – user input
    const name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("Booking cancelled: Passenger name is required.");
      return;
    }

    const pickup = prompt("Enter Pickup Location:");
    if (!pickup) {
      alert("Booking cancelled: Pickup location is required.");
      return;
    }

    const drop = prompt("Enter Drop Location:");
    if (!drop) {
      alert("Booking cancelled: Drop location is required.");
      return;
    }

    const cabType = prompt(
      "Enter Cab Type (Mini / Sedan / SUV):"
    );
    if (!cabType) {
      alert("Booking cancelled: Cab type is required.");
      return;
    }

    // Confirm dialog
    const confirmBooking = confirm(
      `Please confirm your cab booking:\n\nPassenger: ${name}\nPickup: ${pickup}\nDrop: ${drop}\nCab Type: ${cabType}`
    );

    if (confirmBooking) {
      alert(
        `🚕 Cab Booked Successfully!\n\nPassenger: ${name}\nPickup: ${pickup}\nDrop: ${drop}\nCab Type: ${cabType}`
      );
    } else {
      alert("❌ Cab Booking Cancelled by User.");
    }
  };

  return (
    <div className="cab-container">
      <h2>🚕 Online Cab Booking</h2>
      <p>Click the button below to book your cab.</p>

      <button onClick={bookCab}>Book Cab</button>

      {/* Internal CSS */}
      <style>{`
        .cab-container {
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
          background: #ff9800;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #e68900;
        }
      `}</style>
    </div>
  );
}

export default OnlineCabBooking;
