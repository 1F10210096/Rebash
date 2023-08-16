import type { User1Model } from '$/commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { userId: string; comment: string };
    resBody: User1Model;
  };
};
