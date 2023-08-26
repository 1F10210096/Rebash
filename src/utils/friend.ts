import { useAtom } from 'jotai';
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';
import { useCallback } from 'react';

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

export function useAuth() {
  const [user] = useAtom(userAtom);

  async function auth(syouninfriend: string) {
    if (!user) return;
    console.log(syouninfriend);
    const userId = user.id;
    await apiClient.okfriend.$post({ body: { syouninfriend, userId } });
  }

  return auth;
}
export function useLookFriendRoom() {
  const [user] = useAtom(userAtom);

  const lookFriendRoom = useCallback(async () => {
    if (!user) return;

    const userId = user.id;
    const friend_asse = await apiClient.receive_friend.$post({ body: { userId } });
    return friend_asse;
  }, [user]);

  return lookFriendRoom;
}


// const delete_friendId = async () => {
//   if (!user) return;
//   const userId = user.id;
//   await apiClient.del_friend.$post({ body: { del_friend, userId } });
// };

export function useDeleteFriendId() {
  const [user] = useAtom(userAtom);

  async function deleteFriendId(del_friend: string) {
    if (!user) return;

    const userId = user.id;
    await apiClient.del_friend.$post({ body: { del_friend, userId } });
  }

  return deleteFriendId;
}

export function useLookFriend() {
  const [user] = useAtom(userAtom);

  async function lookFriend(friend: string) {
    if (!user) return null;

    const userId = user.id;
    const friend_info = await apiClient.Lookfriend_info.$post({ body: { friend, userId } });
    return friend_info;
  }

  return lookFriend;
}
