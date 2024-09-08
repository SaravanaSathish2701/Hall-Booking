import express from "express";

const bookRoomRouter = express.Router();

const room = [];
const notBooked = [];
const customerDetails = [];
const alreadyBooked = [];

bookRoomRouter.post("/:roomId", (req, res) => {
  const roomId = req.params.roomId;
  const bookingDate = Date().toString();

  const setRoomName = () => {
    const check = false;
    const RoomNames = "";
    if (room.length !== 0) {
      const roomName = room.filter((val) => val.roomId === roomId);
      check = true;
      for (let rooms of roomName) {
        return (nameRoom = names.roomName);
      }
    }
    if (room.filter((val) => val.roomId === roomId)) {
      return (nameRoom = createRandomString());
    }
  };

  const data = {
    ...req.body,
    RoomName: setRoomName(),
    RoomId: roomId,
    "Booking Status": "Booked",
    "Booking Date": bookingDate,
    " BookingId": Date().toString(),
  };

  const remainingRooms = hall.filter((val) => val.roomId !== roomId);

  notBooked.push(remainingRooms);

  const date = req.body.Date;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const bookedRoom = room.filter((val) => val.roomId === roomId);
  const checkDate = bookedRoom((val) => val.Date === date);
  const checkStart = "";
  const checkEnd = "";
  for (let startTime of checkDate) {
    checkStart = startTime.starttime;
    checkEnd = startTime.endtime;
  }
  try {
    const validRoom = hall.filter((val) => val.roomId === roomId);
    if (validRoom === undefined || null) {
      res.status(404).send({ msg: "Check valid Room" });
    } else if (
      bookedRoom.length !== 0 &&
      checkDate.length !== 0 &&
      checkStart.length === start &&
      checkEnd.length === end
    ) {
      res.status(409).send({ msg: "Room is already booked" });
    } else {
      room.push(data);
      res.send({ msg: "Room Booked Successfully" });

      const customer = {
        ...req.body,
        RoomName: date.RoomName,
      };
      customerDetails.push(customer);
    }
  } catch (e) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

export default bookRoomRouter;
export { room, notBooked, alreadyBooked, customerDetails };
