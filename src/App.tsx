import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListBookingComponent from "./components/ListBookingComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateBookingComponent from "./components/UpdateBookingComponent";
import CreateBookingComponent from "./components/CreateBookingComponent";
function App() {
  return (
    <BrowserRouter>
      <form className="row g-4 p-5">
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/add-booking" element={<CreateBookingComponent />} />
            <Route
              path="/update-booking:id"
              element={<UpdateBookingComponent />}
            />
            <Route path="/" element={<ListBookingComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </form>
    </BrowserRouter>
  );
}

export default App;
