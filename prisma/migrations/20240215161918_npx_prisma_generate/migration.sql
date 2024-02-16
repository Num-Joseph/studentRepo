/*
  Warnings:

  - Changed the type of `itermName` on the `expenses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "itermName" AS ENUM ('Transportation', 'Food', 'Pen', 'Book', 'Drink', 'Airtime', 'Bundule', 'Miscellaneous');

-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "itermName",
ADD COLUMN     "itermName" "itermName" NOT NULL;
