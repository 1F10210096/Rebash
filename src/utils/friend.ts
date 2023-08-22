import { useAtom } from 'jotai';
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useSendFriendId() {
  const [user] = useAtom(userAtom);

  async function sendFriendId(searchfriend: string) {
    if (!user) return;

    const userId = user.id;
    const friend_asse = await apiClient.friend.$post({ body: { searchfriend, userId } });
    return friend_asse.receive_id;
  }

  return sendFriendId;
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
