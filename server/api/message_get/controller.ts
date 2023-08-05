import { messageRepository } from '$/repository/messageRepositry';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await messageRepository.findMessage(body.roomId),
  }),
}));
