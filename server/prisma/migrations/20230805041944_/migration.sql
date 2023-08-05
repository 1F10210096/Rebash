-- CreateTable
CREATE TABLE "messege" (
    "sender_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "messege_pkey" PRIMARY KEY ("sender_id")
);
