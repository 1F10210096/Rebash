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
      const message = await apiClient.message.post({ body: { roomId, sender_id, content, name } });
      return message;
    }
  }

  return inputComment;
}

export function useLookRoom() {
  const [user] = useAtom(userAtom);

  async function lookRoom(roomId3: string) {
    if (!user) return;
    await apiClient.message_get2.$post({ body: { roomId3 } });
  }

  return lookRoom;
}


export function useLookMessage() {
  const [user] = useAtom(userAtom);

  async function lookMessage(roomId:string) {
    if (!user) return;

    const messages = await apiClient.message_get.$post({ body: { roomId } });
    return messages
  }

  return lookMessage;
}