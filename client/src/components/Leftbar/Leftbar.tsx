import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PF } from '../../globals/env';
import { AuthContext } from '../../context/AuthContext';
import { ArrowDownIcon } from '../Icons/ArrowDownIcon';
import { FriendsIcon } from '../Icons/FriendsIcon';
import { GroupsFillIcon } from '../Icons/GroupsFillIcon';
import { MarketplaceFillIcon } from '../Icons/MarketplaceFillIcon';
import { PlayFillIcon } from '../Icons/PlayFillIcon';

export const Leftbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const itemStyle =
    'flex items-center gap-3 pl-2 py-2 hover:bg-gray-200 active:bg-gray-300 transition-all rounded-lg';

  return (
    <div className='hidden w-[200px] xl:w-[290px] 2xl:w-[360px] lg:flex lg:flex-col fixed left-2 overflow-y-scroll'>
      <nav className='cursor-pointer w-full'>
        <ul className='w-full'>
          <li>
            <a
              onClick={() => navigate(`../profile/${user?.username}`)}
              className={`${itemStyle}`}
            >
              {user?.profilePicture !== '' ? (
                <img
                  src={PF + user?.profilePicture}
                  className='w-9 h-9 rounded-full object-cover'
                />
              ) : (
                <div className='text-3xl font-black text-primary w-9 h-9 rounded-full bg-gray-light object-cover flex items-center justify-center'>
                  {user.username.charAt(0).toLocaleUpperCase()}
                </div>
              )}
              <span>{user?.username}</span>
            </a>
          </li>
          <li>
            <a href='#' className={`${itemStyle}`}>
              <i className='text-primary'>
                <FriendsIcon
                  height='2.25em'
                  width='2.25em'
                  fill={'url(#grad1)'}
                />
              </i>
              <span>Friends</span>
            </a>
          </li>
          <li>
            <a href='#' className={`${itemStyle}`}>
              <i className='text-primary'>
                <GroupsFillIcon height='2.25em' width='2.25em' />
              </i>
              <span>Groups</span>
            </a>
          </li>
          <li>
            <a href='#' className={`${itemStyle}`}>
              <i className='text-primary'>
                <MarketplaceFillIcon height='2.25em' width='2.25em' />
              </i>
              <span>Marketplace</span>
            </a>
          </li>
          <li>
            <a href='#' className={`${itemStyle}`}>
              <i className='text-primary'>
                <PlayFillIcon height='2.25em' width='2.25em' />
              </i>
              <span>Watch</span>
            </a>
          </li>
          <li>
            <a href='#' className={`${itemStyle}`}>
              <i className='text-gray-400'>
                <ArrowDownIcon height='2.25em' width='2.25em' />
              </i>
              <span>See more</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
