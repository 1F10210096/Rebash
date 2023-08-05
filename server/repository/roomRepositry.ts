import type { RoomModel } from '$/commonTypesWithClient/models';
import { roomIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Room } from '@prisma/client';

const toRoomModel = (prismaRoom: Room): RoomModel => ({
  roomid: roomIdParser.parse(prismaRoom.roomId),
  comment: prismaRoom.comment,
  created: prismaRoom.createdAt.getTime(),
});
export const roomsRepository = {
  save: async (room: RoomModel) => {
    await prismaClient.room.upsert({
      where: { roomId: room.roomid },
      update: {
        comment: room.comment,
      },
      create: {
        roomId: room.roomid,
        comment: room.comment,
        createdAt: new Date(room.created),
      },
    });
  },
  findRoom: async (roomId: string | undefined): Promise<RoomModel[] | undefined> => {
    const roomlist = await prismaClient.room.findMany({
      where: {
        roomId,
      },
      orderBy: { roomId: 'desc' },
    });
    return roomlist.map(toRoomModel);
  },
};
