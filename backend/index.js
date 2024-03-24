require("dotenv").config();
const PORT = process.env.PORT || 3500;
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const errorHandler = require("./middleware/errorHandler");
const credentials = require("./middleware/credentials");

app.use(cors(corsOptions));
app.use(express.json());
app.use(credentials);

//serve static files
app.use(express.static("public"));

//routes
app.use("/", require("./routes/root"));
app.use("/feedback", require("./routes/feedback"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
