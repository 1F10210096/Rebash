import type { UserId } from '$/commonTypesWithClient/branded';
import type { DMModel } from '$/commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { roomId: string; userId: UserId };
    resBody: DMModel;
  };
};
