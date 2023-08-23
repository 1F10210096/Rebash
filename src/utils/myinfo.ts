import assert from 'assert';
import { useAtom } from 'jotai';
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useLookmystatus() {
  const [user] = useAtom(userAtom);

  async function lookmystatus() {
    if (!user) return null;

    const userId = user.id;
    const usermessage = await apiClient.usercheck.$post({ body: { userId } });
    assert(usermessage, 'userなし');
    return usermessage;
  }

  return lookmystatus;
}

export function useMybirth() {
  const [user] = useAtom(userAtom);

  async function mybirth(birthday: string) {
    if (!user) return;

    const userId = user.id;
    const usermessage = await apiClient.birth.$post({ body: { userId, birthday } });
    return usermessage.birth;
  }

  return mybirth;
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

// const select_sex = async () => {
//   if (!user) return;
//   const userId = user.id;
//   const sexes = await apiClient.sex.$post({ body: { sex, userId } });
//   const sexString = sexes.sex === 1 ? '男' : sexes.sex === 2 ? '女' : '';
//   setSex_str(sexString);
//   return sexString;
// };
// const Reselect_sex = async () => {
//   if (!user) return;
//   const userId = user.id;
//   if (sex_str === '男') {
//     setSex(1);
//   } else if (sex_str === '女') {
//     setSex(2);
//   }
//   const sexes = await apiClient.sex.$post({ body: { sex, userId } });
//   const sexString = sexes.sex === 1 ? '男' : sexes.sex === 2 ? '女' : '';
//   setSex_str(sexString);
//   return sexString;
// };
