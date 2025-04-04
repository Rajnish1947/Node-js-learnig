const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

mongoose.connect(
  "mongodb+srv://kumarrajnish28443:Raj%403454@cluster0.qecwf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const itemsRouter = require("./routes/items");
app.use("/items", itemsRouter);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
