import express from "express";

const hall = [];

const hallRouter = express.Router();

hallRouter.post("/", (req, res) => {
  const data = {
    ...req.body,
    id: hall.length + 1,
    timestamp: new Date().toString(),
  };

  try {
    hall.push(data);
    res.send({ msg: "Hall Created Successfully!" });
  } catch (e) {
    res.status(500).send({ msg: "Internal Error Found" });
  }
});

export default hallRouter;
export { hall };
