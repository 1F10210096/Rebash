import { roomUsecase } from '$/usecase/roomusecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body, user }) => ({
    status: 201,
    body: await roomUsecase.create(body.roomId, user.id),
  }),
}));
