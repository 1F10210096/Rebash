import { useAtom } from 'jotai';
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useSearchId() {
  const [user] = useAtom(userAtom);

  async function searchId(searchRoomId: string) {
    if (!user) return;

    const userId = user.id;

    const serchroomId = await apiClient.serchroom.post({ body: { searchRoomId, userId } });
    await apiClient.userroomcreate.post({ body: { searchRoomId, userId } });
    return serchroomId;
  }

  return searchId;
}

export function useHandleConfirm() {
  const [user] = useAtom(userAtom);

  async function handleConfirm(inputValue: string) {
    if (!user) return;
    console.log(inputValue);
    const roomId = inputValue;
    const userId = user.id;
    await apiClient.user.post({ body: { roomId, userId } });
    await apiClient.roomcreate.post({ body: { roomId, userId } });
  }

  return handleConfirm;
}
