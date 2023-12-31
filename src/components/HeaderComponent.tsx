import React from "react";
import { useNavigate } from "react-router-dom";
const HeaderComponent = () => {
  const navigate = useNavigate();
  const addBooking = () => {
    navigate("/add-booking");
  };
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Hotel Planet Booking App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item borderColor">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={addBooking}
                  >
                    Create Booking
                  </a>
                </li>
                <li className="nav-item borderColor">
                  <a className="nav-link active" href="#">
                    {" "}
                    Find Rooms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
