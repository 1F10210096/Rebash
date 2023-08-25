import type { DMMsgModel } from '$/commonTypesWithClient/models';
export type Methods = {
  post: {
    reqBody: { roomId: string; sender_id: string; content: string; name: string };
    resBody: DMMsgModel;
  };
};
