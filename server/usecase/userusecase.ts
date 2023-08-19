import type { UserId } from '$/commonTypesWithClient/branded';
import type { User1Model } from '$/commonTypesWithClient/models';
import { userrepository } from '$/repository/userRepositry';
import assert from 'assert';
export const userUsecase = {
  create: async (userId: string) => {
    const newUser: User1Model = {
      id: userId,
      comment: '',
      roomId: [],
      birth: '2015/01/05',
      sex: 0,
      status: 0,
      sender_id: [],
      receive_id: [],
      friend: [],
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
  roomlist: async (userId: UserId): Promise<User1Model> => {
    const user = await userrepository.findUser(userId);
    if (user === undefined) {
      const user = await userUsecase.create(userId);
      return user;
    } else {
      await userrepository.save(user);
      return user;
    }
  },
  comment: async (comment: string, userId: string): Promise<User1Model> => {
    console.log('a1');
    const user = await userrepository.findUser(userId);
    assert(user, 'userなし');
    console.log('a');
    user.comment = comment;
    await userrepository.save(user);
    return user;
  },
  birth: async (birthday: string, userId: string): Promise<User1Model> => {
    console.log(birthday);
    const user = await userrepository.findUser(userId);
    assert(user, 'userなし');
    console.log('a');
    user.birth = birthday;
    await userrepository.save(user);
    return user;
  },
  friend: async (receive_friend: string, userId: string): Promise<User1Model> => {
    console.log(receive_friend);
    const user = await userrepository.findUser(userId);
    assert(user, 'userなし');
    console.log('a');
    user.receive_id.push(receive_friend);
    user.sender_id.push(userId);
    await userrepository.save(user);
    return user;
  },
  okfriend: async (syouninfriend: string, userId: string): Promise<User1Model> => {
    console.log(syouninfriend);
    const user = await userrepository.findFriend(syouninfriend);
    assert(user, 'userなし');
    user.sender_id = user.sender_id.filter(id => id !== syouninfriend);
    user.friend.push(userId);
    await userrepository.save(user);
    return user;
  },
};
