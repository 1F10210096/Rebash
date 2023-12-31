import type { RoomModel } from '$/commonTypesWithClient/models';
import { roomIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Room } from '@prisma/client';

const toRoomModel = (prismaRoom: Room): RoomModel => ({
  roomid: roomIdParser.parse(prismaRoom.roomId),
  comment: prismaRoom.comment,
  created: prismaRoom.createdAt.getTime(),
  user: prismaRoom.userasse,
});
export const roomsRepository = {
  save: async (room: RoomModel) => {
    await prismaClient.room.upsert({
      where: { roomId: room.roomid },
      update: {
        comment: room.comment,
        userasse: room.user,
      },
      create: {
        roomId: room.roomid,
        comment: room.comment,
        createdAt: new Date(room.created),
        userasse: room.user,
      },
    });
  },
  findRoom: async (roomId3: string | undefined): Promise<RoomModel[] | undefined> => {
    const roomlist = await prismaClient.room.findMany({
      where: {
        roomId: roomId3,
      },
      orderBy: { roomId: 'desc' },
    });
    return roomlist.map(toRoomModel);
  },
  serchRoom: async (serchroomId: string | undefined): Promise<RoomModel | undefined> => {
    const roomlist = await prismaClient.room.findMany();
    const room = roomlist.find((room) => room.roomId === serchroomId);
    return room && toRoomModel(room);
  },
};
