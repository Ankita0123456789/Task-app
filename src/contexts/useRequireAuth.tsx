/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */

import { useAuthProvider } from "./useAuth";

const useRequireAuth = () => {
  const auth = useAuthProvider();

  return auth;
};

export default useRequireAuth;
