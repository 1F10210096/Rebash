-- CreateTable
CREATE TABLE "DMmessage" (
    "id2" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "sender_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "DMmessage_pkey" PRIMARY KEY ("id2")
);
