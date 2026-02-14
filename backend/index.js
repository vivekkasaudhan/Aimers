import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config(); 
import societyRoutes from "./routes/societyRoutes.js";

const app = express();

app.use(express.json());

// base path set
app.use("/api/society", societyRoutes);
const PORT = process.env.PORT || 8000;

app.listen(3000, () => {
    connectDB();
  console.log("Server running on port 3000");
});
