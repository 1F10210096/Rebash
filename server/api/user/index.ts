import type { User1Model } from "$/commonTypesWithClient/models";

export type Methods = {
  get: {
    resBody: string
  }
  post: {
    reqBody: { roomId: string };
    resBody: User1Model;
  };
}
