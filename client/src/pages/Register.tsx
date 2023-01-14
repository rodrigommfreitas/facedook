import { useRef } from 'react';
import { instance as axios } from '../globals/axios';
import { CloseIcon } from '../components/Icons/CloseIcon';

type Props = {
  toggleCreatingNewAccount: () => void;
};

export const Register = ({ toggleCreatingNewAccount }: Props) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      passwordRef.current?.setCustomValidity('The passwords must match.');
    } else {
      const user = {
        username: usernameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      };
      try {
        await axios.post('/auth/register/', user);
        toggleCreatingNewAccount();
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const inputStyle =
    'outline-none border border-gray-200 p-4 rounded-lg focus:border-primary';

  return (
    <div className='absolute flex justify-center items-center top-0 left-0 h-screen w-screen bg-black bg-opacity-30'>
      <div className='bg-white rounded-xl w-[400px] flex flex-col items-center shadow-md shadow-gray-500 py-2'>
        <div className='flex justify-between w-full px-4'>
          <div>
            <h1 className='font-bold text-3xl'>Sign Up</h1>
            <span className='text-gray-dark text-sm'>
              It{"'"}s quick and easy.
            </span>
          </div>
          <button
            onClick={toggleCreatingNewAccount}
            className='w-fit h-fit hover:bg-gray-200 active:bg-gray-300 active:scale-95 rounded-full p-1 transition-all'
          >
            <CloseIcon height='1.5em' width='1.5em' />
          </button>
        </div>

        <div className='h-[1px] w-full my-4 bg-gray-300'></div>

        <form
          onSubmit={handleRegister}
          className='w-full flex flex-col gap-3 px-4'
        >
          <input
            ref={usernameRef}
            type='text'
            placeholder='Username'
            className={`${inputStyle}`}
          />
          <input
            ref={emailRef}
            type='text'
            placeholder='Email'
            className={`${inputStyle}`}
          />
          <input
            ref={passwordRef}
            type='password'
            placeholder='Password'
            minLength={6}
            className={`${inputStyle}`}
          />
          <input
            ref={passwordConfirmRef}
            type='password'
            placeholder='Confirm password'
            minLength={6}
            className={`${inputStyle}`}
          />
          <button
            type='submit'
            className='bg-[#42B72A] hover:bg-[#2B9217] mb-2 text-white font-bold text-xl rounded-lg py-3 active:outline active:outline-1 active:outline-primary transition-all'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
