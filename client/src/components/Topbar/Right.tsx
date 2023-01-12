import { useState } from 'react';
import { MessengerIcon } from '../Icons/MessengerIcon';
import { NotificationsIcon } from '../Icons/NotificationsIcon';
import { ShareForm } from '../Share/ShareForm';

export const Right = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        <img
          src=''
          alt=''
          className='bg-primary w-10 h-10 rounded-full object-cover cursor-pointer active:scale-95 transition-all duration-100'
        />
      </div>
    </>
  );
};
