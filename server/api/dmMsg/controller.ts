import { DMMsgUsecase } from '$/usecase/directmsgusecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await DMMsgUsecase.create(body.roomId, body.sender_id, body.content, body.name),
  }),
}));
