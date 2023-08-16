import { roomUsecase } from '$/usecase/roomusecase';
import { userUsecase } from '$/usecase/userusecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    body: await userUsecase.comment(body.userId, body.comment),
  }),
}));
