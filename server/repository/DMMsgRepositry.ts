import type { DMMsgModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { DMmessage } from '@prisma/client';

const toDMMsgModel = (prismaRoom: DMmessage): DMMsgModel => ({
  id2: prismaRoom.id2,
  room: prismaRoom.roomId,
  sender_Id: prismaRoom.sender_id,
  contentmess: prismaRoom.content,
  sent_at: prismaRoom.sent_at.getTime(),
  username: prismaRoom.username,
});
export const DMMsgRepository = {
  save: async (DMMsg: DMMsgModel) => {
    await prismaClient.dMmessage.upsert({
      where: { id2: DMMsg.id2 },
      update: { content: DMMsg.contentmess },
      create: {
        id2: DMMsg.id2,
        roomId: DMMsg.room,
        sender_id: DMMsg.sender_Id,
        content: DMMsg.contentmess,
        sent_at: new Date(DMMsg.sent_at),
        username: DMMsg.username,
      },
    });
  },
  // infosave: async (infomessage: InfoMessageModel) => {
  //   console.log('2w');
  //   await prismaClient.infomessage.upsert({
  //     where: { id2: infomessage.id2 },
  //     update: {
  //       id2: infomessage.id2,
  //       roomId: infomessage.room,
  //       sender_id: infomessage.sender_Id,
  //       content: infomessage.contentmess,
  //       sent_at: infomessage.sent_at,
  //       username: infomessage.username,
  //     },
  //     create: {
  //       id2: infomessage.id2,
  //       roomId: infomessage.room,
  //       sender_id: infomessage.sender_Id,
  //       content: infomessage.contentmess,
  //       sent_at: infomessage.sent_at,
  //       username: infomessage.username,
  //     },
  //   });
  // },
  findMessage: async (roomId: string | undefined): Promise<DMMsgModel[] | undefined> => {
    // console.log(roomId);
    const roomlist = await prismaClient.dMmessage.findMany({
      where: {
        roomId,
      },
      orderBy: { sent_at: 'desc' },
    });
    return roomlist.map(toDMMsgModel);
  },
  editMessage: async (editingMessageId: string | null): Promise<DMMsgModel | undefined> => {
    const messagelist = await prismaClient.dMmessage.findMany();
    const message = messagelist.find((message) => message.id2 === editingMessageId);

    if (message !== undefined) {
      return toDMMsgModel(message);
    } else {
      return undefined;
    }
  },
  delete: async (messageId: string | undefined): Promise<DMMsgModel | undefined> => {
    try {
      const deletedMessage = await prismaClient.dMmessage.delete({ where: { id2: messageId } });
      console.log('メッセージが削除されました:', deletedMessage);
      return undefined;
    } catch (error) {
      console.error('Error deleting message:', error);
      return undefined;
    }
  },
};
