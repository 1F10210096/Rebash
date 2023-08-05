import type { User1Model } from '$/commonTypesWithClient/models';
import { UserIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { user } from '@prisma/client';

const toUser1Model = (prismaRoom: user): User1Model => ({
  id: UserIdParser.parse(prismaRoom.userId),
  comment: UserIdParser.parse(prismaRoom.comment),
  roomId: prismaRoom.roomIdasse,
});

export const userrepository = {
  save: async (user: User1Model) => {
    await prismaClient.user.upsert({
      where: { userId: user.id },
      update: {
        roomIdasse: user.roomId,
      },
      create: {
        userId: user.id,
        comment: user.comment,
        roomIdasse: user.roomId,
      },
    });
  },
  findUser: async (userId: string | undefined): Promise<User1Model | undefined> => {
    const userlist = await prismaClient.user.findMany();
    const users = userlist.find((user) => user.userId === userId);
    return users && toUser1Model(users);
  },
};
