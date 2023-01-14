import { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { instance as axios } from '../../globals/axios';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { CloseIcon } from '../Icons/CloseIcon';
import { TrashIcon } from '../Icons/TrashIcon';

type Props = {
  toggleDeleting: () => void;
  postId: string;
};

export const Delete = ({ toggleDeleting, postId }: Props) => {
  const { user } = useContext(AuthContext);

  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useOnClickOutside(componentRef, () => {
    toggleDeleting();
  });

  const handleDelete = async () => {
    try {
      await axios.delete('/posts/' + postId + '/delete', {
        data: { userId: user?._id },
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='absolute flex justify-center items-center top-0 left-0 h-screen w-screen bg-black bg-opacity-30 z-20'>
      <div
        ref={componentRef}
        className='w-[90%] sm:w-[500px] bg-white sm:rounded-lg shadow-md shadow-gray-dark'
      >
        <div className='flex justify-between items-center p-3 border-b border-gray-200'>
          <div className='h-9 w-9 -z-10'></div>
          <h1 className='font-bold text-xl'>Delete post</h1>
          <button
            onClick={toggleDeleting}
            className='right-0 h-9 w-9 bg-gray-light flex items-center justify-center rounded-full hover:bg-gray-200 active:bg-gray-300 active:scale-95 transition-all'
          >
            <CloseIcon height='1.25em' width='1.25em' />
          </button>
        </div>

        <div className='w-full h-32 flex flex-col gap-4 items-center justify-center'>
          <span className='text-lg'>
            Are you sure you want to delete this post?
          </span>
          <button
            onClick={handleDelete}
            className='bg-red-500 text-gray-light flex items-center gap-2 font-bold rounded-lg py-1 px-2 transition-all hover:bg-red-600 active:bg-red-7000 active:scale-95'
          >
            <TrashIcon height='1.25em' width='1.25em' />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
