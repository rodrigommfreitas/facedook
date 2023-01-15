import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { PF } from '../../globals/env';
import { LiveVideoIcon } from '../Icons/LiveVideoIcon';
import { PhotoVideoIcon } from '../Icons/PhotoVideoIcon';
import { SmileIcon } from '../Icons/SmileIcon';
import { ShareForm } from './ShareForm';

export const Share = () => {
  const { user } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const toggleShareForm = (a: boolean) => {
    setIsOpen(a);
  };

  const itemStyle =
    'flex gap-1 sm:gap-2 py-2 rounded-lg items-center justify-center hover:bg-gray-light active:bg-gray-200 transition-all';

  return (
    <>
      {isOpen && (
        <ShareForm isOpen={isOpen} toggleShareForm={toggleShareForm} />
      )}

      <div className='w-full bg-white px-4 py-3 sm:rounded-lg shadow-sm shadow-gray-300'>
        <div className='flex gap-2'>
          <a
            className='cursor-pointer h-10 w-11'
            onClick={() => navigate(`../profile/${user?.username}`)}
          >
            {user?.profilePicture !== '' ? (
              <img
                src={PF + user?.profilePicture}
                alt=''
                className='w-full h-10 rounded-full object-cover'
              />
            ) : (
              <div className='text-3xl font-black text-primary w-10 h-10 rounded-full bg-gray-light object-cover flex items-center justify-center'>
                {user.username.charAt(0).toLocaleUpperCase()}
              </div>
            )}
          </a>
          <button
            onClick={() => toggleShareForm(true)}
            className='bg-gray-light sm:text-lg w-full text-gray-dark h-10 flex items-center px-3 rounded-full cursor-pointer hover:bg-gray-200 active:bg-gray-300'
          >
            What{"'"}s on your mind,{' '}
            <span className='ml-1'> {user?.username + '?'}</span>
          </button>
        </div>

        <div className='h-[1px] w-full my-3 bg-gray-200'></div>

        <div className='grid grid-cols-3 text-xs sm:text-base font-semibold text-gray-dark'>
          <button className={`${itemStyle}`}>
            <i className='text-rose-600'>
              <LiveVideoIcon height='1.5em' width='1.5em' />
            </i>
            <span>Live video</span>
          </button>
          <button
            onClick={() => toggleShareForm(true)}
            className={`${itemStyle}`}
          >
            <i className='text-green-500'>
              <PhotoVideoIcon height='1.5em' width='1.5em' />
            </i>
            <span>Photo/video</span>
          </button>
          <button className={`${itemStyle}`}>
            <i className='text-yellow-500'>
              <SmileIcon height='1.5em' width='1.5em' />
            </i>
            <span>Feeling/activity</span>
          </button>
        </div>
      </div>
    </>
  );
};
