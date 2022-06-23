/* eslint-disable react-hooks/exhaustive-deps */
import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";

import { isSignedIn, setAllCookies, getAllCookies } from "../utils/helper";

const authContext = createContext({ user: null } as any);
const { Provider } = authContext;
// Provider hook that creates an auth object and handles it's state
export const useAuthProvider = () => {
  const { user, setUser } = useContext(authContext);

  const signIn = (email?: string, password?: string) => {
    // const cookieEmail = getCookie("email");
    // const cookiePassword = getCookie("password");
    if (email && password) {
      setUser({ email, password });
    }
  };

  const getUserDetails = () => {
    const user = getAllCookies();
    setUser(user);
  };

  const storeAllCookies = (cookies: any) => {
    setAllCookies(cookies);
    getUserDetails();
  };

  const signOut = () => {
    setUser(null);
    return { success: true };
  };

  useEffect(() => {
    if (isSignedIn()) {
      getUserDetails();
    }
  }, []);

  return {
    user,
    signIn,
    signOut,
    storeAllCookies,
  } as const;
};

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
      {props.children}
    </Provider>
  );
}
