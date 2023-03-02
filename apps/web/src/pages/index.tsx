import React from 'react';
import { useRouter } from 'next/router';

export default function IndexPage() {
  const { replace } = useRouter();

  React.useEffect(() => {
    replace('/start');
  }, []);

  return <div className=""></div>;
}
