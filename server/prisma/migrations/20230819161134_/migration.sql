-- AlterTable
ALTER TABLE "user" ADD COLUMN     "friend" TEXT[],
ADD COLUMN     "receive_id" TEXT[],
ADD COLUMN     "sender_id" TEXT[];
