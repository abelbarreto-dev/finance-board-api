/*
  Warnings:

  - You are about to drop the column `reversal` on the `Card` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "reversal";

-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "reversal" BOOLEAN NOT NULL DEFAULT false;
