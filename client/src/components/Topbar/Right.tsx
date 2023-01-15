import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { PF } from '../../globals/env';
import { MessengerIcon } from '../Icons/MessengerIcon';
import { NotificationsIcon } from '../Icons/NotificationsIcon';
import { ShareForm } from '../Share/ShareForm';

export const Right = () => {
  const { user } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const toggleShareForm = (a: boolean) => {
    setIsOpen(a);
  };

  return (
    <>
      {isOpen && (
        <ShareForm isOpen={isOpen} toggleShareForm={toggleShareForm} />
      )}
      <div className='absolute md:static right-4 py-2 flex gap-2'>
        <button
          onClick={() => toggleShareForm(true)}
          className='p-1 text-3xl bg-gray-light hover:bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full active:bg-gray-300 active:scale-95 transition-all duration-100'
        >
          +
        </button>
        <button className='p-1 bg-gray-light hover:bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full active:bg-gray-300 active:scale-95 transition-all duration-100'>
          <MessengerIcon height='1.5em' width='1.5em' />
        </button>
        <button className='p-1 bg-gray-light hover:bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full active:bg-gray-300 active:scale-95 transition-all duration-100'>
          <NotificationsIcon height='1.5em' width='1.5em' />
        </button>
        <a
          onClick={() => navigate('/profile/' + user?.username)}
          className='cursor-pointer'
        >
          {user?.profilePicture !== '' ? (
            <img
              src={PF + user?.profilePicture}
              alt=''
              className='w-10 h-10 rounded-full object-cover'
            />
          ) : (
            <div className='text-3xl font-black text-primary w-10 h-10 rounded-full bg-gray-light object-cover flex items-center justify-center'>
              {user.username.charAt(0).toLocaleUpperCase()}
            </div>
          )}
        </a>
      </div>
    </>
  );
};
