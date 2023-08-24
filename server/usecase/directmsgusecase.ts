import type { UserId } from '$/commonTypesWithClient/branded';
import type { DMModel } from '$/commonTypesWithClient/models';
import { directMsgRepositry } from '$/repository/directMsgRepositry';
export const DirectMsgUsecase = {
  create: async (roomId: string, userId: UserId) => {
    const newDirectMsg: DMModel = {
      roomId,
      comment: [],
      created: Date.now(),
      userasse: [userId],
    };
    await directMsgRepositry.save(newDirectMsg);
    console.log(newDirectMsg);
    console.log('a');
    return newDirectMsg;
  },
};
