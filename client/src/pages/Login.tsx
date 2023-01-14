import { Dispatch, useContext, useRef, useState } from 'react';
import { loginCall } from '../apiCalls';
import { AuthContext } from '../context/AuthContext';
import { AppStateType, AuthActionType } from '../globals/types';
import { Register } from './Register';

export const Login = () => {
  const [isCreatingNewAccount, setIsCreatingNewAccount] =
    useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { isFetching, dispatch } = useContext<AppStateType>(AuthContext);

  const handleLogIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginCall(
      {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      },
      dispatch as Dispatch<AuthActionType>
    );
  };

  const handleGuest = () => {
    loginCall(
      {
        email: 'guest@user.com',
        password: 'guest',
      },
      dispatch as Dispatch<AuthActionType>
    );
  };

  const toggleCreatingNewAccount = () => {
    setIsCreatingNewAccount(!isCreatingNewAccount);
  };

  const inputStyle =
    'outline-none border border-gray-200 p-4 rounded-lg focus:border-primary';

  return (
    <>
      {isCreatingNewAccount && (
        <Register toggleCreatingNewAccount={toggleCreatingNewAccount} />
      )}
      <div className='h-screen w-full bg-gray-light flex items-center justify-center'>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-32'>
          <div className='flex flex-col gap-4 lg:mb-28'>
            <h1 className='text-primary text-center lg:text-left text-6xl lg:text-7xl font-extrabold'>
              facedook
            </h1>
            <span>
              <h2 className='text-2xl lg:text-3xl text-center lg:text-left'>
                Connect with friends and the world
              </h2>
              <h2 className='text-2xl lg:text-3xl text-center lg:text-left'>
                around you on Facedook.
              </h2>
            </span>
          </div>

          <div className='bg-white rounded-xl w-[400px] flex flex-col items-center shadow-md shadow-gray-300 p-4'>
            <form onSubmit={handleLogIn} className='w-full flex flex-col'>
              <input
                ref={emailRef}
                type='email'
                placeholder='Email'
                required
                className={`${inputStyle} mb-3`}
              />
              <input
                ref={passwordRef}
                type='password'
                required
                minLength={6}
                placeholder='Password'
                className={`${inputStyle}`}
              />

              <button
                type='submit'
                disabled={isFetching}
                className={`${
                  isFetching && 'opacity-50'
                } bg-primary hover:bg-blue-700 my-4 text-white font-bold text-xl rounded-lg py-3 active:outline active:outline-1 active:outline-primary transition-all`}
              >
                Log In
              </button>
            </form>

            <a href='#' className='hover:underline mb-1 text-blue-500 text-sm'>
              Forgot password?
            </a>

            <div className='h-[1px] w-full my-4 bg-gray-300'></div>

            <button
              onClick={toggleCreatingNewAccount}
              className='bg-[#42B72A] hover:bg-[#2B9217] my-2 text-white font-bold text-lg rounded-lg px-3 py-2 active:outline active:outline-1 active:outline-primary transition-all'
            >
              Create new account
            </button>
            <span className='text-gray-dark font-bold text-sm my-1'>or</span>
            <button
              onClick={handleGuest}
              className={`${
                isFetching && 'opacity-50'
              } bg-teal-400 hover:bg-teal-500 my-2 text-white font-bold text-lg rounded-lg px-3 py-2 active:outline active:outline-1 active:outline-primary transition-all`}
            >
              Enter as guest
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
