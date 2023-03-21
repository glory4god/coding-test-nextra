import { useCallback, useState, useEffect } from 'react';
import { fetcher } from '@/frontend/lib/apis/fetcher';
import { useSession } from 'next-auth/react';

export default function useExample() {
  const [example, setExample] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  const getExample = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetcher<any[]>(`/example`, {
        header: {
          authorization: session?.user?.accessToken,
        },
      });
      setExample(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [session?.user?.accessToken]);

  useEffect(() => {
    getExample();
  }, []);

  return { example, loading };
}
