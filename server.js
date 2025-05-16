const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");     

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Define PORT with fallback to 3000 if not set
const PORT = process.env.PORT || 5012;

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
//Port
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

