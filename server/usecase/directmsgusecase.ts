import type { UserId } from '$/commonTypesWithClient/branded';
import type { DMModel } from '$/commonTypesWithClient/models';
import { directMsgRepositry } from '$/repository/directMsgRepositry';
import assert from 'assert';
import { randomUUID } from 'crypto';
export const DirectMsgUsecase = {
  create: async (partnerId: string, userId: UserId) => {
    const newDirectMsg: DMModel = {
      roomId: randomUUID(),
      comment: [],
      created: Date.now(),
      myId: userId,
      partnerId,
    };
    await directMsgRepositry.save(newDirectMsg);
    console.log(newDirectMsg);
    console.log('a');
    return newDirectMsg;
  },
  roomId: async (roomId: string, userId: string): Promise<DMModel> => {
    console.log(roomId);
    const user = await directMsgRepositry.findUser(roomId);
    assert(user, 'userなし');
    return user;
  },
};
