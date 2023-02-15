import { createContext, useCallback, useContext, useState } from "react";
import { authAuth } from "../services/authApi";
import api, { verifyToken } from "../services/baseApi";
import { authToken, addUser} from "../store/auth/actions";
import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks/useAppHooksRedux";

import { TLogin } from "../types/componets-types/general";
import { IUserLogin, TAccessUser } from "../types/interface/UserInterface";

interface AuthContextState {
  token: TokenState;
  signIn({ email, password }: TLogin): Promise<void>;
  userLogged(): boolean;
  user: TAccessUser;
}
interface TokenState {
  token: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [userLoged, setUserLoged] = useState<TAccessUser>();
  const { user } = useAppSelector((state) => state.auth);
  const [token, setToken] = useState<TokenState>(() => {
    const token = localStorage.getItem("@bucaso:token") as string;
    if (token) {
      verifyToken();
      return { token };
    }
    return {} as TokenState;
  });
  const dispatch = useAppDispatch();
  const signIn = useCallback(
    async ({ email, password }: TLogin) => {
      const { token, user} = (await authAuth({
        email,
        password,
      })) as unknown as IUserLogin;
      dispatch(authToken(!!token));
      dispatch(addUser(user));
      setToken({ token });
      localStorage.setItem("@bucaso:token", token);
      localStorage.setItem("@bucaso:user", JSON.stringify(user));
    },
    [dispatch]
  );

  const userLogged = useCallback(() => {
    const token = isAuthenticated;
    if (token) {
      setUserLoged(user);
      return !!isAuthenticated;
    }
    return false;
  }, [isAuthenticated, user]);

  return (
    <AuthContext.Provider value={{ user: userLoged!,  token, signIn, userLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  return  useContext(AuthContext);
}

export { AuthProvider, useAuth };
