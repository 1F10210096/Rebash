import type { MessageModel } from '$/commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { roomId: string };
    resBody: MessageModel[]|undefined;
  };
};
