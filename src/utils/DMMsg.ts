import { useAtom } from 'jotai';
import { useCallback } from 'react'; // Removed useState import since it's not used here
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useDMInputComment() {
  const [user] = useAtom(userAtom);

  const dMInputComment = useCallback(
    async (roomId: string, value: string) => {
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
    },
    [user] 
  );

  return dMInputComment;
}