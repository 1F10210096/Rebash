/*
  Warnings:

  - You are about to drop the column `userasse` on the `DM` table. All the data in the column will be lost.
  - Added the required column `myId` to the `DM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partnerId` to the `DM` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DM" DROP COLUMN "userasse",
ADD COLUMN     "myId" TEXT NOT NULL,
ADD COLUMN     "partnerId" TEXT NOT NULL;
