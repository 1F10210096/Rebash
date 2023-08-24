-- CreateTable
CREATE TABLE "DM" (
    "roomId" TEXT NOT NULL,
    "comment" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL,
    "userasse" TEXT[],

    CONSTRAINT "DM_pkey" PRIMARY KEY ("roomId")
);
