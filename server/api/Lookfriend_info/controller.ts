import { userUsecase } from '$/usecase/userusecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body, user }) => ({
    status: 201,
    body: await userUsecase.Lookfriend_info(body.friend, user.id),
  }),
}));
