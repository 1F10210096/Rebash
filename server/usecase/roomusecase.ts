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
  room: async (comment: string, roomId: string): Promise<RoomModel> => {
    console.log('a');
    const room = await roomsRepository.findRoom(roomId);
    assert(room, 'userなし');
    room.comment.push(comment); // 新しいルームIDを追加する
    console.log(room);
    await roomsRepository.save(room);
    return room;
  },
};
