import type { DMModel } from '$/commonTypesWithClient/models';
import { roomIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { DM } from '@prisma/client';

const toDMModel = (prismaDM: DM): DMModel => ({
  roomId: roomIdParser.parse(prismaDM.roomId),
  comment: prismaDM.comment,
  created: prismaDM.createdAt.getTime(),
  userasse: prismaDM.userasse,
});
export const directMsgRepositry = {
  save: async (dM: DMModel) => {
    await prismaClient.dM.upsert({
      where: { roomId: dM.roomId },
      update: {
        comment: dM.comment,
        userasse: dM.userasse,
      },
      create: {
        roomId: dM.roomId,
        comment: dM.comment,
        createdAt: new Date(dM.created),
        userasse: dM.userasse,
      },
    });
  },
};
