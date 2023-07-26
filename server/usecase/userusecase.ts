import type { User1Model } from '$/commonTypesWithClient/models';
import { userrepository } from '$/repository/userRepositry';
import assert from 'assert';
export const userUsecase = {
  create: async (userId: string) => {
    const newUser: User1Model = {
      id: userId,
      comment: '',
      roomId: [],
    };
    await userrepository.save(newUser);
    return newUser;
  },
  user: async (roomId: string, userId: string): Promise<User1Model> => {
    console.log('a');
    const user = await userrepository.findUser(roomId, userId);
    assert(user, 'userなし');
    console.log(user);
    return user;
  },
};
