import { userUsecase } from '$/usecase/userusecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ user }) => ({
    status: 201,
    body: await userUsecase.roomlist(user.id),
  }),
}));
