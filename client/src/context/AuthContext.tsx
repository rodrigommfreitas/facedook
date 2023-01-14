import { createContext, useEffect, useReducer } from 'react';
import { AppStateType } from '../globals/types';
import AuthReducer from './AuthReducer';

type ProviderProps = {
  children: React.ReactNode;
};

const INITIAL_STATE: AppStateType = {
  user: JSON.parse(localStorage.getItem('user') as string) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext<AppStateType>(INITIAL_STATE);

export const AuthContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
