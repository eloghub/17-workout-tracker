const express = require("express"); // routes
const mongoose = require("mongoose"); //connection
const morgan = require("morgan"); //middleware

const PORT = 3005;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(require("./routes/api"))

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
    console.log("Listening on PORT ${PORT}");
});
