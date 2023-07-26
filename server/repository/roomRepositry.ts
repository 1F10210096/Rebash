// import type { RoomModel } from "$/commonTypesWithClient/models";
// import type { Room } from "@prisma/client";
// import { UserIdParser, roomIdParser } from '$/service/idParsers';
// import { prismaClient } from "$/service/prismaClient";

// const toRoomModel = (prismaRoom: Room): RoomModel => ({
//   roomIdd: roomIdParser.parse(prismaRoom.roomId),
//   created: prismaRoom.createdAt.getTime(),
// });
// export const roomsRepository = {
//   save: async (room: RoomModel) => {
//     await prismaClient.room.upsert({
//       where: { roomId: room.roomId },
//       update: {
//         status: room.status,
//         board: room.board,
//         turn: room.turn,
//         blackmen: room.blackmen,
//         whitemen: room.whitemen,
//         kansenn: room.kansenn,
//         knum: room.knum,
//         blackname: room.blackname,
//         whitename: room.whitename,
//       },
//       create: {
//         roomId: room.id,
//         board: room.board,
//         status: room.status,
//         createdAt: new Date(room.created),
//         turn: room.turn,
//         blackmen: room.blackmen,
//         whitemen: room.whitemen,
//         kansenn: room.kansenn,
//         knum: room.knum,
//         blackname: room.blackname,
//         whitename: room.whitename,
//       },
//     });
//   },
//   findLatest: async (label: string | undefined): Promise<RoomModel | undefined> => {
//     const roomlist = await prismaClient.room.findMany({
//       orderBy: { createdAt: 'desc' },
//     });
//     const rooms = roomlist.find((room) => room.roomId === label);

//     return rooms && toRoomModel(rooms);
//   },
//   //  getRoomInfo: async (RoomId:RoomId): Promise<RoomModel> => {
//   //   const roomInfo = RoomId
//   //   return roomInfo;
//   // }
// };
