import express from "express";
import { room, alreadyBooked } from "./room-booking.js";

const roomRouter = express.Router();

const rooms = [];

roomRouter.get("/", (req, res) => {
  try {
    for (let data of room) {
      rooms.push(data);
    }
    res.send({ mag: "Already these Rooms are Booked", rooms });
  } catch (e) {
    res.status(500).send({ msg: "Internal Error Found" });
  }
});

export default roomRouter;
