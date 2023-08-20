import type { User1Model } from '$/commonTypesWithClient/models';
import { UserIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { user } from '@prisma/client';

const toUser1Model = (prismaRoom: user): User1Model => ({
  id: UserIdParser.parse(prismaRoom.userId),
  comment: UserIdParser.parse(prismaRoom.comment),
  roomId: prismaRoom.roomIdasse,
  birth: prismaRoom.birth,
  sex: prismaRoom.sex,
  status: prismaRoom.sex,
  sender_id: prismaRoom.sender_id,
  receive_id: prismaRoom.receive_id,
  friend: prismaRoom.friend,
});

export const userrepository = {
  save: async (user: User1Model) => {
    await prismaClient.user.upsert({
      where: { userId: user.id },
      update: {
        roomIdasse: user.roomId,
        comment: user.comment,
        birth: user.birth,
        sex: user.sex,
        status: user.status,
        sender_id: user.sender_id,
        receive_id: user.receive_id,
        friend: user.friend,
      },
      create: {
        userId: user.id,
        comment: user.comment,
        roomIdasse: user.roomId,
        birth: user.birth,
        sex: user.sex,
        status: user.status,
        sender_id: user.sender_id,
        receive_id: user.receive_id,
        friend: user.friend,
      },
    });
  },
  findUser: async (userId: string | undefined): Promise<User1Model | undefined> => {
    console.log(userId);
    const userlist = await prismaClient.user.findMany();
    console.log('ads2');
    const users = userlist.find((user) => user.userId === userId);
    console.log(users);
    return users && toUser1Model(users);
  },
  findRoom: async (userId: string | undefined): Promise<User1Model | undefined> => {
    const userlist = await prismaClient.user.findMany();
    const users = userlist.find((user) => user.userId === userId);
    return users && toUser1Model(users);
  },
  findFriend: async (syouninfriend: string): Promise<User1Model | undefined> => {
    const userlist = await prismaClient.user.findMany();
    const users = userlist.find((user) => user.receive_id.includes(syouninfriend));
    return users && toUser1Model(users);
  },
};
