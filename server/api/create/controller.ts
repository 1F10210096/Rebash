import { userUsecase } from '$/usecase/userusecase'
import { defineController } from './$relay'

export default defineController(() => ({
  post: async ({ user }) => ({ status: 201, body: await userUsecase.create(user.id) }),
}))
