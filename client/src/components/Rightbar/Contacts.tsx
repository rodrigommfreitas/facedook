import { useContext, useEffect, useState } from 'react';
import { instance as axios } from '../../globals/axios';
import { AuthContext } from '../../context/AuthContext';
import { UserType } from '../../globals/types';
import { Contact } from './Contact';

export const Contacts = () => {
  const { user } = useContext(AuthContext);
  const [friends, setFriends] = useState<UserType[]>([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get('/users/friends/' + user?._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, []);

  return (
    <ul className='mt-2 pl-2'>
      {friends.length === 0 && (
        <li className='font-bold text-gray-dark mt-3 w-full'>
          You don{"'"}t follow anyone :(
        </li>
      )}
      {friends.map((friend: UserType) => (
        <Contact key={friend._id} user={friend} />
      ))}
    </ul>
  );
};
