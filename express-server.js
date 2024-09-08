import express from "express";
import hallRouter from "./routes/creating-room.js";
import bookingRouter from "./routes/room-booking.js";
import roomRouter from "./routes/rooms.js";
import customerRouter from "./routes/customers.js";
import customerBookingRouter from "./routes/customer-booking.js";

const server = express();

server.use(express.json());

server.use("/creating-room", hallRouter);
server.use("/room-booking", bookingRouter);
server.use("/rooms", roomRouter);
server.use("/customers", customerRouter);
server.use("/customer-booking", customerBookingRouter);

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
