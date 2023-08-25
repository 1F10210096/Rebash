import { useAtom } from 'jotai';
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useCreateDM() {
  const [user] = useAtom(userAtom);

  async function createDM(partnerId: string) {
    if (!user) return;

    const userId = user.id;

    const createDM = await apiClient.dm.post({ body: { partnerId, userId } });
    return createDM;
  }

  return createDM;
}
export function useSearchDM() {
  const [user] = useAtom(userAtom);

  async function searchDM(partnerId: string) {
    if (!user) return;

    const userId = user.id;

    const searchDM = await apiClient.dmuser.post({ body: { partnerId, userId } });
    return searchDM;
  }

  return searchDM;
}