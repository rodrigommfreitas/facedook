import { useNavigate } from 'react-router-dom';
import { PF } from '../../globals/env';
import { UserType } from '../../globals/types';

type Props = {
  user: UserType;
};

export const Contact = ({ user }: Props) => {
  const navigate = useNavigate();
  return (
    <li onClick={() => navigate('/profile/' + user.username)}>
      <button className='w-full p-2 flex gap-2 items-center hover:bg-gray-200 active:bg-gray-300 transition-all rounded-lg'>
        {user?.profilePicture !== '' ? (
          <img
            src={PF + user?.profilePicture}
            alt=''
            className='w-9 h-9 rounded-full object-cover'
          />
        ) : (
          <div className='text-3xl font-black text-primary w-9 h-9 rounded-full bg-gray-light object-cover flex items-center justify-center'>
            {user.username.charAt(0).toLocaleUpperCase()}
          </div>
        )}
        <span>{user.username}</span>
      </button>
    </li>
  );
};
