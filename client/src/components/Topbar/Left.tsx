import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { ArrowBackIcon } from '../Icons/ArrowBackIcon';
import { FacebookIcon } from '../Icons/FacebookIcon';
import { SearchIcon } from '../Icons/SearchIcon';

export const Left = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useOnClickOutside(ref, () => {
    isOpen && toggleSearchbar(false);
  });

  const toggleSearchbar = (a: boolean) => {
    setIsOpen(a);
  };

  return (
    <div ref={ref} className='py-2 flex outline-none'>
      {isOpen ? (
        <button
          onClick={() => toggleSearchbar(false)}
          className='text-gray-dark p-1 hover:bg-gray-light h-10 w-10 flex items-center justify-center rounded-full active:bg-gray-200 transition-all'
        >
          <ArrowBackIcon height='1.5em' width='1.5em' />
        </button>
      ) : (
        <a href='#' onClick={() => navigate('/home')} className='text-primary'>
          <FacebookIcon height='2.5em' width='2.5em' />
        </a>
      )}

      <div className='bg-gray-light xl:w-60 ml-2 flex items-center justify-center rounded-full'>
        <button
          onClick={() => toggleSearchbar(true)}
          className={`${
            isOpen && 'hidden'
          } h-10 w-10 flex items-center justify-center xl:cursor-default text-gray-dark transition-all duration-300`}
        >
          <SearchIcon height='1.25em' width='1.25em' />
        </button>
        <input
          type='text'
          id='search'
          autoComplete='off'
          onFocus={() => toggleSearchbar(true)}
          onBlur={() => toggleSearchbar(false)}
          placeholder='Search Facedook'
          className={`${
            isOpen ? 'flex' : 'hidden xl:flex'
          } bg-gray-light mx-4 xl:mx-0 w-32 xl:w-48 outline-none`}
        />
      </div>
    </div>
  );
};
