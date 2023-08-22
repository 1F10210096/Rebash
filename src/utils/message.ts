import { useAtom } from 'jotai';
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useInputComment() {
  const [user] = useAtom(userAtom);

  async function inputComment(roomId: string, value: string) {
    if (!user) return;

    const sender_id = user.id;
    const content = value;
    const name = user.displayName;
    if (name === undefined) {
      console.log('usernameなし');
    } else {
      await apiClient.message.post({ body: { roomId, sender_id, content, name } });
    }
  }

  return inputComment;
}

// export function useLookRoom() {
//   const [user] = useAtom(userAtom);

//   async function lookRoom(roomId3: string) {
//     if (!user) return;

//     const userId = user.id;
//     const userlist = await apiClient.Look_friend.$post({ body: { userId } });
//     setFriend(userlist.friend);

//     await apiClient.room.post({ body: { roomId3 } });

//     if (user === null) {
//       console.log('error');
//     } else {
//       const userId = user.id;
//       console.log(userId);
//       const a = await apiClient.roomuser.post({ body: { roomId3 } });
//       console.log(a.body.user);
//       setuserasse(a.body.user);
//     }

//     const messages = await apiClient.message_get2.$post({ body: { roomId3 } });
//     console.log(messages);
//     if (messages === undefined) {
//       console.log('messagesがありません');
//     } else {
//       setMessages(messages);
//       setmyId(user?.id);
//     }
//   }

//   return lookRoom;
// }