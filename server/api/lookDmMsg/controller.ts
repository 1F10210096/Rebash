import { DMMsgRepository } from '$/repository/DMMsgRepositry';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await DMMsgRepository.findMessage(body.roomId),
  }),
}));
