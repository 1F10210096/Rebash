import type { DMModel } from '$/commonTypesWithClient/models';
import { roomIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { DM } from '@prisma/client';

const toDMModel = (prismaDM: DM): DMModel => ({
  roomId: roomIdParser.parse(prismaDM.roomId),
  comment: prismaDM.comment,
  created: prismaDM.createdAt.getTime(),
  myId: prismaDM.myId,
  partnerId: prismaDM.partnerId,
});
export const directMsgRepositry = {
  save: async (dM: DMModel) => {
    await prismaClient.dM.upsert({
      where: { roomId: dM.roomId },
      update: {
        comment: dM.comment,
        myId: dM.myId,
        partnerId: dM.partnerId,
      },
      create: {
        roomId: dM.roomId,
        comment: dM.comment,
        createdAt: new Date(dM.created),
        myId: dM.myId,
        partnerId: dM.partnerId,
      },
    });
  },
  findUser: async (roomId: string): Promise<DMModel | undefined> => {
    console.log(roomId);
    const roomlist = await prismaClient.dM.findMany();
    console.log('ads2');
    const room = roomlist.find((room) => room.roomId === roomId);
    console.log(room);
    if (room !== undefined) {
      return toDMModel(room);
    } else {
      return undefined;
    }
  },
};
