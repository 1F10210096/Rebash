import type { RoomModel } from '$/commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { roomId3: string };
    resBody: RoomModel;
  };
};
