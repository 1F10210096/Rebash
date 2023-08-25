import { DMMsgModel } from "$/commonTypesWithClient/models";


export type Methods = {
  post: {
    reqBody: { roomId: string };
    resBody: DMMsgModel[] | undefined;
  };
};
