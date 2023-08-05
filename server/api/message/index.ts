import type { MessageModel } from '$/commonTypesWithClient/models';
export type Methods = {
  post: {
    reqBody: { roomId: string; sender_id: string; content: string };
    resBody: MessageModel;
  };
};
