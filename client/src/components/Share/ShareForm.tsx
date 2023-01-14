import { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { CloseIcon } from '../Icons/CloseIcon';
import { DownIcon } from '../Icons/DownIcon';
import { FlagIcon } from '../Icons/FlagIcon';
import { FriendsIcon } from '../Icons/FriendsIcon';
import { LocationIcon } from '../Icons/LocationIcon';
import { MoreIcon } from '../Icons/MoreIcon';
import { PhotoVideoIcon } from '../Icons/PhotoVideoIcon';
import { SmileIcon } from '../Icons/SmileIcon';
import { UserTagIcon } from '../Icons/UserTagIcon';

type Props = {
  isOpen: boolean;
  toggleShareForm: (a: boolean) => void;
};

export const ShareForm = ({ isOpen, toggleShareForm }: Props) => {
  const { user } = useContext(AuthContext);

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    isOpen && toggleShareForm(false);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const btnStyle =
    'flex items-center justify-center rounded-full h-9 w-9 hover:bg-gray-light active:bg-gray-200 active:scale-95 transition-all';

  return (
    <div className='absolute flex justify-center items-center top-0 left-0 h-screen w-screen bg-black bg-opacity-30'>
      <div
        ref={ref}
        className='w-[90%] sm:w-[500px] bg-white sm:rounded-lg shadow-md shadow-gray-dark'
      >
        <div className='flex justify-between items-center p-3 border-b border-gray-200'>
          <div className='h-9 w-9 -z-10'></div>
          <h1 className='font-bold text-xl'>Create post</h1>
          <button
            onClick={() => toggleShareForm(false)}
            className='right-0 h-9 w-9 bg-gray-light flex items-center justify-center rounded-full hover:bg-gray-200 active:bg-gray-300 active:scale-95 transition-all'
          >
            <CloseIcon height='1.25em' width='1.25em' />
          </button>
        </div>

        <div className='py-3 px-4'>
          <div className='flex items-center gap-1'>
            <a href='#' className='mr-2'>
              {user?.profilePicture !== '' ? (
                <img
                  src={user?.profilePicture}
                  alt=''
                  className='w-10 h-10 rounded-full object-cover'
                />
              ) : (
                <div className='text-3xl font-black text-primary w-10 h-10 rounded-full bg-gray-light object-cover flex items-center justify-center'>
                  {user.username.charAt(0).toLocaleUpperCase()}
                </div>
              )}
            </a>
            <div className='flex flex-col gap-1'>
              <span className='font-semibold'>{user?.username}</span>
              <button className='bg-gray-light text-xs font-semibold w-fit py-1 px-2 flex items-center gap-1 rounded-md'>
                <FriendsIcon />
                <span>Friends</span>
                <DownIcon />
              </button>
            </div>
          </div>

          <textarea
            name='text'
            id=''
            placeholder={`What's on your mind, ${user?.username}?`}
            className='w-full mt-4 outline-none resize-none text-2xl h-[100px] lg:h-[150px]'
          ></textarea>

          <div className='my-4 p-4 flex justify-center sm:justify-between border rounded-lg border-gray-300 shadow-md shadow-gray-light'>
            <button className='hidden sm:block text-base font-bold'>
              Add to your post
            </button>

            <div className='flex gap-2 sm:gap-1'>
              <button className={`text-green-500 ${btnStyle}`}>
                <PhotoVideoIcon height='1.5em' width='1.5em' />
              </button>
              <button className={`text-primary ${btnStyle}`}>
                <UserTagIcon height='1.5em' width='1.5em' />
              </button>
              <button className={`text-yellow-500 ${btnStyle}`}>
                <SmileIcon height='1.5em' width='1.5em' />
              </button>
              <button className={`text-rose-600 ${btnStyle}`}>
                <LocationIcon height='1.5em' width='1.5em' />
              </button>
              <button className={`text-teal-400 ${btnStyle}`}>
                <FlagIcon height='1.5em' width='1.5em' />
              </button>
              <button className={`text-gray-dark ${btnStyle}`}>
                <MoreIcon height='1.5em' width='1.5em' />
              </button>
            </div>
          </div>

          <button className='w-full py-2 bg-gray-light text-gray-300 font-bold rounded-lg'>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
