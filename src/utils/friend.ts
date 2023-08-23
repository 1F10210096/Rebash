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

  async function lookFriendRoom() {
    if (!user) return;

    const userId = user.id;
    const friend_asse = await apiClient.receive_friend.$post({ body: { userId } });
    return friend_asse;
  }

  return lookFriendRoom;
}
// const look_friendroom = async () => {
//   if (!user) return;
//   const userId = user.id;
//   const friend_asse = await apiClient.friend.$post({ body: { searchfriend, userId } });
//   setReceive_friend(friend_asse.receive_id);
// };

// const delete_friendId = async () => {
//   if (!user) return;
//   const userId = user.id;
//   await apiClient.del_friend.$post({ body: { del_friend, userId } });
// };
// const LookF = async (key: string) => {
//   if (!user) return;
//   const userId1 = user.id;
//   const userId = key;
//   const userinfo = await apiClient.userinfo.$post({ body: { userId } });
// };

// const Look_friend = async () => {
//   if (!user) return;
//   const userId = user.id;
//   const friend_info = await apiClient.Lookfriend_info.$post({ body: { friend, userId } });
//   return friend_info;
// };
