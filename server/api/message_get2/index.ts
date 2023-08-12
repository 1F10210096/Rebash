import type { MessageModel } from '$/commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { roomId3: string };
    resBody: MessageModel[] | undefined;
  };
};
