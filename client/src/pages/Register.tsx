import { CloseIcon } from '../components/Icons/CloseIcon';

export const Register = () => {
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
          <button className='w-fit h-fit hover:bg-gray-200 active:bg-gray-300 active:scale-95 rounded-full p-1 transition-all'>
            <CloseIcon height='1.5em' width='1.5em' />
          </button>
        </div>

        <div className='h-[1px] w-full my-4 bg-gray-300'></div>

        <div className='w-full flex flex-col gap-3 px-4'>
          <input
            type='text'
            placeholder='Username'
            className={`${inputStyle}`}
          />
          <input type='text' placeholder='Email' className={`${inputStyle}`} />
          <input
            type='password'
            placeholder='Password'
            className={`${inputStyle}`}
          />
          <input
            type='password'
            placeholder='Confirm password'
            className={`${inputStyle}`}
          />
          <button className='bg-[#42B72A] hover:bg-[#2B9217] mb-2 text-white font-bold text-xl rounded-lg py-3 active:outline active:outline-1 active:outline-primary transition-all'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
