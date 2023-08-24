import type { UserId } from '$/commonTypesWithClient/branded';
import type { RoomModel } from '$/commonTypesWithClient/models';
import { roomsRepository } from '$/repository/roomRepositry';
import assert from 'assert';
export const roomUsecase = {
  create: async (roomId: string, userId: UserId) => {
    const newRoom: RoomModel = {
      roomid: roomId,
      comment: [],
      created: Date.now(),
      user: [userId],
    };
    await roomsRepository.save(newRoom);
    return newRoom;
  },
  room: async (roomId3: string): Promise<RoomModel[]> => {
    const room = await roomsRepository.findRoom(roomId3);
    assert(room, 'userなし');
    await Promise.all(room.map(roomsRepository.save));
    return room;
  },
  serch: async (searchRoomId: string, userId: UserId): Promise<RoomModel> => {
    const room = await roomsRepository.serchRoom(searchRoomId);
    assert(room, 'userなし');
    room.user.push(userId);
    await roomsRepository.save(room);
    console.log(room);
    return room;
  },
  serchuser: async (roomId3: string): Promise<RoomModel> => {
    const room = await roomsRepository.serchRoom(roomId3);
    console.log(room);
    assert(room, 'userなし');
    await roomsRepository.save(room);
    console.log(room);
    return room;
  },
};
