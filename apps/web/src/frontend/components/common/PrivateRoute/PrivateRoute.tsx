import { useEffect } from 'react';

import { useRouter } from 'next/router';
import { CLIENT_PATH_ROUTES } from 'exam-bomb-constants/paths';

const PrivateRoute = () => {
  const { push } = useRouter();

  useEffect(() => {
    push(CLIENT_PATH_ROUTES.start);
  }, []);

  return <></>;
};

export default PrivateRoute;
