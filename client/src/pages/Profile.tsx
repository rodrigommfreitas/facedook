import { PencilIcon } from '../components/Icons/PencilIcon';
import { Post } from '../components/Post/Post';
import { Share } from '../components/Share/Share';
import { Topbar } from '../components/Topbar/Topbar';

export const Profile = () => {
  const btnStyle =
    'w-full lg:w-fit justify-center flex gap-2 p-3 font-bold text-gray-dark rounded-md hover:bg-gray-light active:bg-gray-200 transition-all';

  return (
    <div className='bg-gray-light w-full h-fit'>
      <Topbar />
      <div className='w-screen flex bg-white h-[440px] md:h-[590px] lg:h-[595px] shadow-md shadow-gray-200'>
        <div className='mx-auto w-full bg-gradient-to-b from-[#7F94AE] to-white h-[250px] md:h-[400px]'>
          <img
            src=''
            alt=''
            className='bg-green-200 mx-auto h-[150px] md:h-[300px] lg:h-[400px] w-full max-w-[1250px] xl:rounded-b-xl'
          />

          <div className=' w-full max-w-[1250px] mx-auto px-[50px] flex flex-col lg:flex-row lg:justify-between'>
            <div className='block lg:flex mx-auto lg:mx-0 text-center lg:text-left'>
              <button className='h-fit w-fit relative -top-20 lg:-top-12 rounded-full'>
                <img
                  src=''
                  alt=''
                  className='bg-orange-500 rounded-full border-4 border-white h-[168px] w-[168px]'
                />
              </button>

              <div className='-translate-y-28 lg:-translate-y-0 font-bold lg:ml-4 h-fit mt-8 text-center lg:text-left'>
                <h1 className='text-4xl mb-2'>Chuck Norris</h1>
                <span className='text-gray-dark'>104 friends</span>
              </div>
            </div>

            <button className='-translate-y-24 lg:-translate-y-0 mb-12 h-fit self-center lg:self-end flex items-center gap-2 font-bold bg-gray-light rounded-lg py-1 px-2 transition-all hover:bg-gray-200 active:bg-gray-300 active:scale-95'>
              <PencilIcon height='1.5em' width='1.5em' />
              <span>Edit profile</span>
            </button>
          </div>

          <div className='-translate-y-32 lg:-translate-y-8'>
            <div className='h-[1px] w-full max-w-[1150px] mx-auto mb-1 bg-gray-300'></div>

            <div className='w-full max-w-[1250px] mx-auto px-[50px] flex justify-center lg:justify-start'>
              <button className={`${btnStyle}`}>Posts</button>
              <button className={`${btnStyle}`}>About</button>
              <button className={`${btnStyle}`}>Friends</button>
            </div>
          </div>
        </div>
      </div>

      <div className='my-4 flex flex-col gap-4 w-full max-w-[800px] mx-auto px-4 lg:px-[50px]'>
        <Share />
        <Post />
        <Post />
      </div>
    </div>
  );
};
