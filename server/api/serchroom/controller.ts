import { roomUsecase } from '$/usecase/roomusecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ body, user }) => ({
    status: 201,
    body: await roomUsecase.serch(body.serchroomId, user.id),
  }),
}));
