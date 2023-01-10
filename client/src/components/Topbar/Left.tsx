import { FacebookIcon } from '../Icons/FacebookIcon';

export const Left = () => {
  return (
    <div className='flex outline-none'>
      <i className='text-primary'>
        <FacebookIcon height='2.5em' width='2.5em' />
      </i>
      <input type='text' className='bg-light-gray' />
    </div>
  );
};
