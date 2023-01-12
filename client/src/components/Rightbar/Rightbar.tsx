import { MoreIcon } from '../Icons/MoreIcon';
import { NewCallIcon } from '../Icons/NewCallIcon';
import { SearchIcon } from '../Icons/SearchIcon';
import { Contacts } from './Contacts';

export const Rightbar = () => {
  const btnStyle =
    'w-fit h-fit rounded-full p-1 hover:bg-gray-200 active:bg-gray-300 active:scale-95 transition-all';

  return (
    <div className='w-1/4 lg:w-[200px] lg:max-w-[290px] 2xl:max-w-[360px] xl:w-[360px] max-w-[360px] hidden md:block fixed right-2'>
      <div className='text-gray-dark w-full flex justify-between items-center'>
        <h1 className='ml-4 font-bold text-lg'>Contacts</h1>
        <div className='flex mr-2 gap-1 xl:gap-4'>
          <button className={`${btnStyle}`}>
            <NewCallIcon height='1.25em' width='1.25em' />
          </button>
          <button className={`${btnStyle}`}>
            <SearchIcon height='1.25em' width='1.25em' />
          </button>
          <button className={`${btnStyle}`}>
            <MoreIcon height='1.25em' width='1.25em' />
          </button>
        </div>
      </div>

      <Contacts />
    </div>
  );
};
