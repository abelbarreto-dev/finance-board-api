import express from "express";
import userRoutes from "@Routes/UserRoutes";

const app = express();

const PORT = process.env.PORT || 8080;

app.use("/api/v1/user", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
