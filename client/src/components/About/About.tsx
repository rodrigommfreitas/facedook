import { UserType } from '../../globals/types';

type Props = {
  user: UserType;
};

export const About = ({ user }: Props) => {
  return (
    <div className='w-full bg-white px-4 py-3 sm:rounded-lg shadow-sm shadow-gray-300'>
      <h1 className='font-bold text-gray-dark text-2xl mb-4'>
        About {user.username}
      </h1>

      <div>
        {user.bio !== '' ? (
          <div className='mb-2 text-lg'>{user.bio}</div>
        ) : (
          <div className='mb-2 text-lg'>No description.</div>
        )}

        <div className='h-[1px] w-full my-3 bg-gray-200'></div>

        <div className='flex gap-1 items-center'>
          <div className='font-bold text-lg text-gray-dark'>Location: </div>
          <span>{user.location}</span>
        </div>
        <div className='flex gap-1 items-center'>
          <div className='font-bold text-lg text-gray-dark'>From: </div>
          <span>{user.from}</span>
        </div>
      </div>
    </div>
  );
};
