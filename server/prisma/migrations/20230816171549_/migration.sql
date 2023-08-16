/*
  Warnings:

  - Added the required column `birth` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sex` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "birth" TEXT NOT NULL,
ADD COLUMN     "sex" INTEGER NOT NULL,
ADD COLUMN     "status" INTEGER NOT NULL;
