import axios from "axios";
import { useEffect } from "react";

const BOOKING_API_BASE_URL = "http://localhost:8080/booking/find";

// const token =
//   "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoibmFtZSIsImV4cCI6MTY5Njg5MzEwOSwiaWF0IjoxNjk2ODg5NTA5LCJzY29wZSI6InJlYWQifQ.kjv5BztYKC-ZjZCmivdxOkraMjtvz46TBNO14s5XlE4SwsaZZ9rlUyLEPp69s58Uqw2DTx8_lbHlc5LAzBPY_nNs92GFD_UnnOv-jjo2dSUjYhrQ6TJNjNmYguC-ZmkgvJTbEM_T_HxgF0yHf4q0XXw0MwMCDHuC0rtA0_-PKMxhcu4kMBINW_DuI3CvKPJyX9xWRQfLCnnpAv_xEtz0SHbNPxWloau5zjc0F564bcBOY9iKsRlRwJuXmqE42xPPo8ny-9WS35K4-GjSt_tHHKgi62XcarDmP08Lgo8RxhnNFlm2ZgiNLPDIPUQfD-2_cHV8v_vUDgje1KvwRtn44g";

// useEffect(() => {
//   axios.interceptors.request.use(
//     (config) => {
//       config.headers["Authorization"] = `Bearer ${token}`;
//       return config;
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// });

class BookingService {
  getBookings(canceled: any) {
    console.log("url..", BOOKING_API_BASE_URL + "/" + canceled);

    let data = axios.get(BOOKING_API_BASE_URL + "/" + canceled);
    console.log(data);
    return data;
  }
  createBooking(booking: any) {
    return axios.post(BOOKING_API_BASE_URL, booking);
  }
}
export default new BookingService();
