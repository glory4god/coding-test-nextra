import { useEffect } from 'react';

import { useRouter } from 'next/router';

const PrivateRoute = () => {
  const { push } = useRouter();

  useEffect(() => {
    push('/');
  }, []);

  return <></>;
};

export default PrivateRoute;
