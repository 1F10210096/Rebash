import type { InfoMessageModel, MessageModel } from '$/commonTypesWithClient/models';
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
      update: { content: message.contentmess },
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
  infosave: async (infomessage: InfoMessageModel) => {
    console.log('2w');
    await prismaClient.infomessage.upsert({
      where: { id2: infomessage.id2 },
      update: {
        id2: infomessage.id2,
        roomId: infomessage.room,
        sender_id: infomessage.sender_Id,
        content: infomessage.contentmess,
        sent_at: infomessage.sent_at,
        username: infomessage.username,
      },
      create: {
        id2: infomessage.id2,
        roomId: infomessage.room,
        sender_id: infomessage.sender_Id,
        content: infomessage.contentmess,
        sent_at: infomessage.sent_at,
        username: infomessage.username,
      },
    });
  },
  findMessage: async (roomId: string | undefined): Promise<MessageModel[] | undefined> => {
    // console.log(roomId);
    const roomlist = await prismaClient.message.findMany({
      where: {
        roomId,
      },
      orderBy: { sent_at: 'desc' },
    });
    return roomlist.map(toMessageModel);
  },
  editMessage: async (editingMessageId: string | null): Promise<MessageModel | undefined> => {
    const messagelist = await prismaClient.message.findMany();
    const message = messagelist.find((message) => message.id2 === editingMessageId);
    return message && toMessageModel(message);
  },
  delete: async (messageId: string | undefined): Promise<MessageModel | undefined> => {
    try {
      const deletedMessage = await prismaClient.message.delete({ where: { id2: messageId } });
      console.log('メッセージが削除されました:', deletedMessage);
      return undefined;
    } catch (error) {
      console.error('Error deleting message:', error);
      return undefined;
    }
  },
};
