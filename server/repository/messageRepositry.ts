import type { MessageModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { message } from '@prisma/client';

const toMessageModel = (prismaRoom: message): MessageModel => ({
  id2: prismaRoom.id2,
  room: prismaRoom.roomId,
  sender_Id: prismaRoom.sender_id,
  contentmess: prismaRoom.content,
  sent_at: prismaRoom.sent_at.getTime(),
  username: prismaRoom.username,
});
export const messageRepository = {
  save: async (message: MessageModel) => {
    await prismaClient.message.upsert({
      where: { id2: message.id2 },
      update: {},
      create: {
        id2: message.id2,
        roomId: message.room,
        sender_id: message.sender_Id,
        content: message.contentmess,
        sent_at: new Date(message.sent_at),
        username: message.username,
      },
    });
  },
  findMessage: async (roomId: string | undefined): Promise<MessageModel[] | undefined> => {
    console.log(roomId);
    const roomlist = await prismaClient.message.findMany({
      where: {
        roomId,
      },
      orderBy: { sent_at: 'desc' },
    });
    return roomlist.map(toMessageModel);
  },
};
