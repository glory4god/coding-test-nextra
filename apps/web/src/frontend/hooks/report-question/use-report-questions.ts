import { useCallback, useState, useEffect } from 'react';
import { fetcher } from '@/frontend/lib/apis/fetcher';
import { Bookmark, ReportQuestion } from '@prisma/client';
import { useSession } from 'next-auth/react';

export type ReportQuestionWithQ = ReportQuestion & {
  question: QuestionJoinData;
};

export default function useReportQuestion() {
  const [reportQuestions, setReportQuestions] = useState<ReportQuestionWithQ[]>(
    [],
  );
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  const getReportQuestions = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetcher<ReportQuestionWithQ[]>(`/question/report`, {
        header: {
          authorization: session?.user?.accessToken,
        },
      });
      setReportQuestions(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [session?.user?.accessToken]);

  useEffect(() => {
    getReportQuestions();
  }, []);

  return { reportQuestions, loading };
}
