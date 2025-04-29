const express = require("express");
const mongoose = require("mongoose");
const Patients = require("./models/Patients");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const url =
  "mongodb+srv://bhargavkachhadiya1988:12345@bhargav.cmoi6kt.mongodb.net/patientNumber?retryWrites=true&w=majority&appName=bhargav";

mongoose.set("strictQuery", true);
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => console.log(err));

app.get("/", async (req, res) => {
  const user = await Patients.find();
  res.send(user);
});

app.get("/:id", async (req, res) => {
  const reqId = req.params.id;
  const patient = await Patients.findOne({ _id: reqId });
  res.send(patient);
});

app.post("/", async (req, res) => {
  const patient = await Patients.create(req.body);
  res.send(patient);
});

app.put("/:id", async (req, res) => {
  const reqId = req.params.id;
  const patient = await Patients.findOneAndUpdate(
    { _id: reqId },
    { name: req.body.name, room: req.body.room, ref: req.body.ref }
  );
  res.send(patient);
});

app.delete("/:id", async (req, res) => {
  const reqId = req.params.id;
  const patient = await Patients.findByIdAndDelete({ _id: reqId });
  res.send(patient);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT NO : ${PORT}`);
});
