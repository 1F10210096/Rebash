import { useAtom } from 'jotai';
import { useCallback } from 'react'; // 追加: useCallbackのインポート
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useCreateDM() {
  const [user] = useAtom(userAtom);

  // useCallbackで関数を最適化
  const createDM = useCallback(
    async (partnerId) => {
      if (!user) return;

      const userId = user.id;

      const createDM = await apiClient.dm.post({ body: { partnerId, userId } });
      return createDM;
    },
    [user]
  );

  return createDM;
}

export function useSearchDM() {
  const [user] = useAtom(userAtom);

  // useCallbackで関数を最適化
  const searchDM = useCallback(
    async (partnerId) => {
      if (!user) return;

      const userId = user.id;

      const searchDM = await apiClient.dmuser.post({ body: { partnerId, userId } });
      return searchDM;
    },
    [user]
  );

  return searchDM;
}
