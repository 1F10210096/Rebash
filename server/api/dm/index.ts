import type { UserId } from '$/commonTypesWithClient/branded';
import type { DMModel } from '$/commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { partnerId: string; userId: UserId };
    resBody: DMModel;
  };
};
