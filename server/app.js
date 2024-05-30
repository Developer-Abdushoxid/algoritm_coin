const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const cookieparser = require("cookie-parser");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieparser());
app.use("/api/auth", authRoutes);

// Validate enviroment variables 
const PORT = process.env.PORT || 5000;
if(!process.env.PORT) {
  console.log("PORT environment variable is not set. Defaulting to 5000");
}

sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });
