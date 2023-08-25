import { DirectMsgUsecase } from '$/usecase/directmsgusecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body, user }) => ({
    status: 201,
    body: await DirectMsgUsecase.create(body.partnerId, user.id),
  }),
}));
