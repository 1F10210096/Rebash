import { userrepository } from '$/repository/userRepositry';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({ status: 201, body: await userrepository.findUser(body.userId) }),
}));
