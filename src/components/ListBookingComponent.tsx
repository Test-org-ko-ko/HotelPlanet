import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BookingService from "../services/BookingService";
const ListBookingComponent = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = React.useState([]);
  const [state, setState] = useState({
    bookingGuest: "",
    guest: "",
    checkInDate: "",
    checkOutDate: "",
    paymentStatus: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    let canceled = false;
    BookingService.getBookings(canceled).then((res) => {
      setBookings(res.data);
    });
  }, []);

  const editBooking = (e: any) => {
    e.preventDefault();
    let booking = {
      bookingGuest: state.bookingGuest,
      guest: state.guest,
      email: state.email,
      phone: state.phone,
      checkInDate: state.checkInDate,
      checkOutDate: state.checkOutDate,
    };
  };
  const addBooking = () => {
    navigate("/add-booking");
  };
  return (
    <div>
      <h4 className="text-center">Booking List</h4>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Booking Guest Name</th>
              <th>Guest Name</th>
              <th>Check In Date</th>
              <th>Check Out Date</th>
              <th>Payment Status</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking: any) => (
              <tr key={booking.id}>
                <td>{booking.bookingGuest}</td>
                <td>{booking.guest}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{booking.paymentStatus}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>
                  <button
                    onClick={() => editBooking(booking.id)}
                    className="btn btn-Info"
                  >
                    Update
                  </button>
                  {/* <button
                    onClick={() => deleteBooking(booking.id)}
                    className="btn btn-Danger"
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBookingComponent;
