import { useAtom } from 'jotai';
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useSearchDM() {
  const [user] = useAtom(userAtom);

  async function searchDM(partnerId: string) {
    if (!user) return;

    const userId = user.id;

    const serchDM = await apiClient.dm.post({ body: { partnerId, userId } });
    await apiClient.dmuser.post({ body: { partnerId, userId } });
    return serchDM;
  }

  return searchDM;
}
