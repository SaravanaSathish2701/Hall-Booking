import express from "express";
import { customerDetails } from "./room-booking.js";

const customerRouter = express.Router();

customerRouter.get("/", (req, res) => {
  try {
    res.send({ msg: "Customer Details of Booked Rooms", customerDetails });
  } catch (e) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

export default customerRouter;