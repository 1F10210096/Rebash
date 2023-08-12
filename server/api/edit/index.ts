import type { MessageModel } from '$/commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { editingMessageId: string | null; editedMessage: string };
    resBody: MessageModel;
  };
};
