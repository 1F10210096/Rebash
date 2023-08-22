import { useAtom } from 'jotai';
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useLookmystatus() {
  const [user] = useAtom(userAtom);

  async function lookmystatus() {
    console.log('234');

    if (!user) return null;

    const userId = user.id;
    const usermessage = await apiClient.usercheck.$post({ body: { userId } });

    if (usermessage === undefined) {
      console.log('usernasi');
    } else {
      return usermessage;
    }
  }

  return lookmystatus;
}

export function useMubirth() {
  const [user] = useAtom(userAtom);

  async function mybirth(birthday: string) {
    if (!user) return;

    const userId = user.id;
    const usermessage = await apiClient.birth.$post({ body: { userId, birthday } });
    console.log('13313');
    return usermessage.birth;
  }

  return mybirth;
}

export function useNinnsyou() {
  const [user] = useAtom(userAtom);

  async function ninnsyou(syouninfriend: string) {
    if (!user) return;
    console.log(syouninfriend);
    const userId = user.id;
    await apiClient.okfriend.$post({ body: { syouninfriend, userId } });
  }

  return ninnsyou;
}

export function useMymessage() {
  const [user] = useAtom(userAtom);

  async function mymessage(comment: string) {
    if (!user) return;

    const userId = user.id;
    console.log(comment);
    const usermessage = await apiClient.createcomment.$post({ body: { userId, comment } });
    return usermessage.comment;
  }

  return mymessage;
}
