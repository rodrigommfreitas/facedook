import { useNavigate } from 'react-router-dom';
import { PF } from '../../globals/env';
import { UserType } from '../../globals/types';

type Props = {
  user: UserType;
};

export const FriendCard = ({ user }: Props) => {
  const navigate = useNavigate();

  const handleClick = (username: string) => {
    navigate('/profile/' + username);
    window.location.reload();
  };

  return (
    <li className='flex gap-4'>
      <button
        onClick={() => handleClick(user.username)}
        className='h-fit w-fit'
      >
        {user.profilePicture !== '' ? (
          <img
            src={PF + user.profilePicture}
            alt=''
            className='w-24 h-24 rounded-md object-cover'
          />
        ) : (
          <div className='text-6xl font-black text-primary w-24 h-24 rounded-md bg-gray-light object-cover flex items-center justify-center'>
            {user.username.charAt(0).toLocaleUpperCase()}
          </div>
        )}
      </button>
      <div className='pt-2'>
        <div className='mb-4 text-lg'>{user.username}</div>
        <a
          onClick={() => handleClick(user.username)}
          className='cursor-pointer hover:underline font-bold text-gray-dark text-sm'
        >
          View profile
        </a>
      </div>
    </li>
  );
};
