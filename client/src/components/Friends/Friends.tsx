import { useEffect, useState } from 'react';
import { instance as axios } from '../../globals/axios';
import { UserType } from '../../globals/types';
import { FriendCard } from './FriendCard';

type Props = {
  user: UserType;
};

export const Friends = ({ user }: Props) => {
  const [friends, setFriends] = useState<UserType[]>([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get('/users/friends/' + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, []);

  /*
  useEffect(() => {
    
  }, []);
  */

  console.log(friends);
  return (
    <div className="w-full bg-white px-4 py-3 sm:rounded-lg shadow-sm shadow-gray-300'">
      <ul className='grid grid-cols-2 gap-8'>
        {friends.length === 0 && (
          <li className='font-bold text-gray-dark my-3 w-full'>
            {user.username} doesn{"'"}t follow anyone.
          </li>
        )}
        {friends.map((friend: UserType) => (
          <FriendCard key={friend._id} user={friend} />
        ))}
      </ul>
    </div>
  );
};
