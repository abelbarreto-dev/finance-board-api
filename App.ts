import express from "express";
import userRoutes from "@Routes/UserRoutes";
import bankRoutes from "@Routes/BankRoutes";
import moneyRoutes from "@Routes/MoneyRoutes";
import cardRoutes from "@Routes/CardRoutes";
import invoiceRoutes from "@Routes/InvoiceRoutes";
import pixKeyRoutes from "@Routes/PixKeyRoutes";
import moneyBoxRoutes from "@Routes/MoneyBoxRoutes";
import bankBoxRoutes from "@Routes/BankBoxRoutes";
import operaMoneyRoutes from "@Routes/OperaMoneyRoutes";
import operaMoneyBoxRoutes from "@Routes/OperaMoneyBoxRoutes";
import operaBankBoxRoutes from "@Routes/OperaBankBoxRoutes";
import operaBankRoutes from "@Routes/OperaBankRoutes";
import operaInvoiceRoutes from "@Routes/OperaInvoiceRoutes";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/bank", bankRoutes);
app.use("/api/v1/card", cardRoutes);
app.use("/api/v1/invoice", invoiceRoutes);
app.use("/api/v1/money", moneyRoutes);
app.use("/api/v1/pix-key", pixKeyRoutes);
app.use("/api/v1/bank-box", bankBoxRoutes);
app.use("/api/v1/money-box", moneyBoxRoutes);
app.use("/api/v1/opera-bank", operaBankRoutes);
app.use("/api/v1/opera-bank-box", operaBankBoxRoutes);
app.use("/api/v1/opera-invoice", operaInvoiceRoutes);
app.use("/api/v1/opera-money", operaMoneyRoutes);
app.use("/api/v1/opera-money-box", operaMoneyBoxRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
