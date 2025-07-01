-- CreateEnum
CREATE TYPE "EnumBankAccType" AS ENUM ('PAYMENT', 'SAVING', 'CHECKING');

-- CreateEnum
CREATE TYPE "EnumBanks" AS ENUM ('ITAU', 'BRADESCO', 'SANTANDER', 'CAIXA', 'HSBC', 'CITI', 'BCO', 'BANCO_DO_BRASIL', 'NUBANK', 'INTER', 'WILLBANK', 'PICPAY', 'C6BANK', 'BTG_PACTUAL', 'JP_MORGAN');

-- CreateEnum
CREATE TYPE "EnumFinance" AS ENUM ('WITHDRAW', 'DEPOSIT');

-- CreateEnum
CREATE TYPE "EnumCard" AS ENUM ('VIRTUAL', 'TEMPORARY', 'PHYSICAL');

-- CreateEnum
CREATE TYPE "EnumFinancePlus" AS ENUM ('WITHDRAW', 'DEPOSIT', 'PAYMENT');

-- CreateEnum
CREATE TYPE "EnumFlag" AS ENUM ('MASTERCARD', 'VISA', 'ELO', 'AMEX', 'DINERS', 'HIPERCARD');

-- CreateEnum
CREATE TYPE "EnumOpState" AS ENUM ('MYSELF', 'OTHERS');

-- CreateEnum
CREATE TYPE "EnumPix" AS ENUM ('CPF', 'CNPJ', 'EMAIL', 'PHONE', 'RANDOM');

-- CreateEnum
CREATE TYPE "EnumTransfer" AS ENUM ('PIX', 'TED', 'DOC');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "mobile" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Money" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "balance_value" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Money_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperaMoney" (
    "id" SERIAL NOT NULL,
    "money_id" INTEGER NOT NULL,
    "type_transfer" "EnumFinancePlus" NOT NULL,
    "balance_value" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OperaMoney_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MoneyBox" (
    "id" SERIAL NOT NULL,
    "money_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "objective" DECIMAL(65,30),
    "balance_value" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MoneyBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperaMoneyBox" (
    "id" SERIAL NOT NULL,
    "money_box_id" INTEGER NOT NULL,
    "type_transfer" "EnumFinance" NOT NULL,
    "balance_value" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OperaMoneyBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" "EnumBanks" NOT NULL,
    "account_type" "EnumBankAccType" NOT NULL,
    "number_account" TEXT NOT NULL,
    "number_agency" TEXT NOT NULL,
    "balance_value" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperaBank" (
    "id" SERIAL NOT NULL,
    "bank_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "type_transfer" "EnumTransfer" NOT NULL,
    "state" "EnumOpState" NOT NULL,
    "bank_operation" "EnumFinancePlus" NOT NULL,
    "sender_name" TEXT NOT NULL,
    "receiver_name" TEXT NOT NULL,
    "balance_value" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OperaBank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PixKey" (
    "id" SERIAL NOT NULL,
    "bank_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "type_key" "EnumPix" NOT NULL,
    "pix_key" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PixKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankBox" (
    "id" SERIAL NOT NULL,
    "bank_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "objective" DECIMAL(65,30),
    "balance_value" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BankBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperaBankBox" (
    "id" SERIAL NOT NULL,
    "bank_box_id" INTEGER NOT NULL,
    "type_transfer" "EnumFinance" NOT NULL,
    "balance_value" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OperaBankBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "bank_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "card_type" "EnumCard" NOT NULL,
    "card_flag" "EnumFlag" NOT NULL,
    "card_limit" DECIMAL(65,30) NOT NULL,
    "current_limit" DECIMAL(65,30) NOT NULL,
    "balance_value" DECIMAL(65,30),
    "reversal" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "card_id" INTEGER NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL,
    "invoice_paid" INTEGER NOT NULL,
    "balance_value" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperaInvoice" (
    "id" SERIAL NOT NULL,
    "invoice_id" INTEGER NOT NULL,
    "balance_value" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OperaInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Money_user_id_key" ON "Money"("user_id");

-- AddForeignKey
ALTER TABLE "Money" ADD CONSTRAINT "Money_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperaMoney" ADD CONSTRAINT "OperaMoney_money_id_fkey" FOREIGN KEY ("money_id") REFERENCES "Money"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoneyBox" ADD CONSTRAINT "MoneyBox_money_id_fkey" FOREIGN KEY ("money_id") REFERENCES "Money"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperaMoneyBox" ADD CONSTRAINT "OperaMoneyBox_money_box_id_fkey" FOREIGN KEY ("money_box_id") REFERENCES "MoneyBox"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank" ADD CONSTRAINT "Bank_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperaBank" ADD CONSTRAINT "OperaBank_bank_id_fkey" FOREIGN KEY ("bank_id") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PixKey" ADD CONSTRAINT "PixKey_bank_id_fkey" FOREIGN KEY ("bank_id") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankBox" ADD CONSTRAINT "BankBox_bank_id_fkey" FOREIGN KEY ("bank_id") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperaBankBox" ADD CONSTRAINT "OperaBankBox_bank_box_id_fkey" FOREIGN KEY ("bank_box_id") REFERENCES "BankBox"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_bank_id_fkey" FOREIGN KEY ("bank_id") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperaInvoice" ADD CONSTRAINT "OperaInvoice_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
