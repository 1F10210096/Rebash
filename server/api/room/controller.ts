import { roomUsecase } from '$/usecase/roomusecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await roomUsecase.room(body.roomId3),
  }),
}));
