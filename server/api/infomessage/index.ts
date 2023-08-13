import type { MessageModel } from '$/commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { messageId: string };
    resBody: MessageModel;
  };
};
