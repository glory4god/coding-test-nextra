import { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { fetcher } from '@/frontend/lib/apis/fetcher';
import { ReportQuestion } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { ERROR_MAP } from 'mainlib/constants/error';
import { ErrorKeys } from '@/types/error';
import { modalState } from '@/frontend/lib/recoil/atoms';

export default function useReportQuestionPost() {
  const setModal = useSetRecoilState(modalState);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const postReportQuestion = useCallback(
    async (body: UndefinedType<ReportQuestion>) => {
      setLoading(true);
      try {
        const res = await fetcher<ReportQuestion>(`/question/report`, {
          method: 'POST',
          header: {
            'Content-Type': 'application/json',
            authorization: session?.user?.accessToken,
          },
          body: JSON.stringify(body),
        });
        setLoading(false);
        setModal({
          isShow: true,
          top: '오류신고를 접수했어요!',
        });
        return res;
      } catch (err: any) {
        setModal({
          isShow: true,
          top: ERROR_MAP[err.message as ErrorKeys].message,
        });
        setLoading(false);
      }
    },
    [session?.user?.accessToken],
  );

  return { postReportQuestion, loading };
}
