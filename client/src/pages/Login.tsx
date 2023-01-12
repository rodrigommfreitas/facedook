export const Login = () => {
  const inputStyle =
    'outline-none border border-gray-200 p-4 rounded-lg focus:border-primary';

  return (
    <div className='h-screen w-full bg-gray-light flex items-center justify-center'>
      <div className='flex items-center gap-32'>
        <div className='flex flex-col gap-4 mb-28'>
          <h1 className='text-primary text-7xl font-extrabold'>facedook</h1>
          <span>
            <h2 className='text-3xl'>Connect with friends and the world</h2>
            <h2 className='text-3xl'>around you on Facedook.</h2>
          </span>
        </div>

        <div className='bg-white rounded-xl w-[400px] flex flex-col items-center shadow-md shadow-gray-300 p-4'>
          <div className='w-full flex flex-col'>
            <input
              type='text'
              placeholder='Email'
              className={`${inputStyle} mb-3`}
            />
            <input
              type='password'
              placeholder='Password'
              className={`${inputStyle}`}
            />
            <button className='bg-primary hover:bg-blue-700 my-4 text-white font-bold text-xl rounded-lg py-3 active:outline active:outline-1 active:outline-primary transition-all'>
              Log In
            </button>
          </div>

          <a href='#' className='hover:underline mb-1 text-blue-500 text-sm'>
            Forgot password?
          </a>

          <div className='h-[1px] w-full my-4 bg-gray-300'></div>

          <button className='bg-[#42B72A] hover:bg-[#2B9217] my-2 text-white font-bold text-lg rounded-lg px-3 py-2 active:outline active:outline-1 active:outline-primary transition-all'>
            Create new account
          </button>
          <span className='text-gray-dark font-bold text-sm my-1'>or</span>
          <button className='bg-teal-400 hover:bg-teal-500 my-2 text-white font-bold text-lg rounded-lg px-3 py-2 active:outline active:outline-1 active:outline-primary transition-all'>
            Enter as guest
          </button>
        </div>
      </div>
    </div>
  );
};
