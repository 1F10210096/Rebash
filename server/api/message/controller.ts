import { messageUsecase } from '$/usecase/messageusecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await messageUsecase.create(body.roomId, body.sender_id, body.content, body.name),
  }),
}));
