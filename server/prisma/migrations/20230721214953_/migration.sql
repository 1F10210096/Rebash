/*
  Warnings:

  - Added the required column `roomIdasse` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "roomIdasse" TEXT NOT NULL;
