import express from "express";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
import societyRoutes from "./routes/societyRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(cookieParser());
app.use(express.json());

// base path set
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.use("/api/society", societyRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
