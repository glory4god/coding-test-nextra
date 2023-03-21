import { Top03, Top05 } from 'mainlib/components/Top';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="pb-6">
      <Top03 className="text-gray-400">
        {/* ExamBomb <Text className="font-normal">(문제은행)</Text> */}
      </Top03>
      <Top05 className="text-sm">{`이메일 : gkduddy0814@gmail.com`}</Top05>
    </div>
  );
};

export default Footer;
