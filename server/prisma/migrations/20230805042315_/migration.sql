/*
  Warnings:

  - The primary key for the `messege` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `roomId` to the `messege` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "messege" DROP CONSTRAINT "messege_pkey",
ADD COLUMN     "roomId" TEXT NOT NULL,
ADD CONSTRAINT "messege_pkey" PRIMARY KEY ("roomId");
