import type { RoomModel } from '$/commonTypesWithClient/models';
import { roomsRepository } from '$/repository/roomRepositry';
import assert from 'assert';
export const roomUsecase = {
  create: async (roomId: string) => {
    const newRoom: RoomModel = {
      roomid: roomId,
      comment: [],
      created: Date.now(),
    };
    await roomsRepository.save(newRoom);
    return newRoom;
  },
  room: async (roomId: string): Promise<RoomModel> => {
    const room = await roomsRepository.findRoom(roomId);
    assert(room, 'userなし');
    console.log(room);
    await roomsRepository.save(room);
    return room;
  },
  comment: async (roomId: string, comment: string): Promise<RoomModel> => {
    const room = await roomsRepository.findRoom(roomId);
    assert(room, 'userなし');
    room.comment.push(comment);
    console.log(room);
    await roomsRepository.save(room);
    return room;
  },
};
