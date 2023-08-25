import { DirectMsgUsecase } from '$/usecase/directmsgusecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ body, user }) => ({
    status: 201,
    body: await DirectMsgUsecase.roomId(body.partnerId, user.id),
  }),
}));
