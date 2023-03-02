import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { SubjectList } from '@/frontend/components/Subject';
import { subjectState } from '@/frontend/lib/recoil/atoms';

import { Banner, Border, FixedBottomCTA, Spacing } from 'mainlib/components';
import { colors } from 'mainlib/constants/colors';
import { Top03, Top04 } from 'mainlib/components/Top';

import { CLIENT_PATH_ROUTES } from 'exam-bomb-constants/paths';

export default function Startpage() {
  const selectedSubject = useRecoilValue(subjectState);

  const { push } = useRouter();

  return (
    <div className="bg-white">
      <Spacing size={20} />
      <Top03 color={colors.gray900}>{`원하는 시험을\n자유롭게 풀어봐요`}</Top03>
      <Spacing size={32} />
      <Banner
        className="mx-6"
        onClick={() => push(CLIENT_PATH_ROUTES.user)}
        top="풀었던 기록을 확인해보세요"
        bottom="클릭하여 이동하세요"
      />
      <Spacing size={24} />
      <Border size={16} />
      <Spacing size={8} />
      <Top04>과목을 선택하세요</Top04>
      <Spacing size={16} />
      <SubjectList />
      <FixedBottomCTA
        disabled={selectedSubject === null}
        onClick={() => {
          push('/chapter');
        }}>
        과목 시작하기
      </FixedBottomCTA>
    </div>
  );
}
