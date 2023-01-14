import { instance as axios } from './globals/axios';
import { Dispatch } from 'react';
import { AuthActionType } from './globals/types';

export const loginCall = async (
  userCredentials: { email: string | undefined; password: string | undefined },
  dispatch: Dispatch<AuthActionType>
) => {
  dispatch({ type: 'LOGIN_START' });

  try {
    const res = await axios.post('auth/login', userCredentials);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err });
  }
};
