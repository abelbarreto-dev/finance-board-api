import express from "express";
import userRoutes from "@Routes/UserRoutes";
import bankRoutes from "@Routes/BankRoutes";
import moneyRoutes from "@Routes/MoneyRoutes";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/bank", bankRoutes);
app.use("/api/v1/money", moneyRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
