import express from "express";
import { room } from "./room-booking.js";

const customerBookingRouter = express.Router();

customerBookingRouter.get("/", (req, res) => {
  const customerName = req.query.customerName;
  const name = room.filter((val) => val.customerName === customerName);

  try {
    if (name.length !== 0) {
      res.send({ msg: "Name of the Customer", name: customerName });
    } else {
      res.send({ msg: "Customer Name is Not Found" });
    }
  } catch (e) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

export default customerBookingRouter;