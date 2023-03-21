import { useCallback, useState } from 'react';

import { fetcher } from '@/frontend/lib/apis/fetcher';
import { useSession } from 'next-auth/react';

export default function useExamplePost() {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const postExample = useCallback(
    async (body: UndefinedType<any>) => {
      setLoading(true);
      try {
        const res = await fetcher<any>(`/`, {
          method: 'POST',
          header: {
            'Content-Type': 'application/json',
            authorization: session?.user?.accessToken,
          },
          body: JSON.stringify(body),
        });
        setLoading(false);
        return res;
      } catch (err: any) {
        setLoading(false);
      }
    },
    [session?.user?.accessToken],
  );

  return { postExample, loading };
}
