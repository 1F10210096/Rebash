/*
  Warnings:

  - You are about to drop the `messege` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "messege";

-- CreateTable
CREATE TABLE "message" (
    "id2" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "sender_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id2")
);
