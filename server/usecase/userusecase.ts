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
  user: async (aroom: string, userId: string): Promise<User1Model> => {
    console.log(aroom);
    const user = await userrepository.findUser(userId);
    assert(user, 'userなし');
    user.roomId.push(aroom);
    await userrepository.save(user);
    return user;
  },
  serch: async (aroom: string, userId: string): Promise<User1Model> => {
    console.log(aroom);
    const user = await userrepository.findUser(userId);
    assert(user, 'userなし');
    user.roomId.push(aroom);
    await userrepository.save(user);
    return user;
  },
};
