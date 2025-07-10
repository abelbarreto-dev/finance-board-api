import express from "express";
import userRoutes from "@Routes/UserRoutes";
import bankRoutes from "@Routes/BankRoutes";
import moneyRoutes from "@Routes/MoneyRoutes";
import cardRoutes from "@Routes/CardRoutes";
import invoiceRoutes from "@Routes/InvoiceRoutes";
import pixKeyRoutes from "@Routes/PixKeyRoutes";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/bank", bankRoutes);
app.use("/api/v1/money", moneyRoutes);
app.use("/api/v1/card", cardRoutes);
app.use("/api/v1/invoice", invoiceRoutes);
app.use("/api/v1/pix-key", pixKeyRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
