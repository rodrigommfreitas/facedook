import { ArrowDownIcon } from '../Icons/ArrowDownIcon';
import { FriendsIcon } from '../Icons/FriendsIcon';
import { GroupsFillIcon } from '../Icons/GroupsFillIcon';
import { MarketplaceFillIcon } from '../Icons/MarketplaceFillIcon';

export const Leftbar = () => {
  const itemStyle =
    'flex items-center gap-3 pl-3 py-3 hover:bg-gray-200 active:bg-gray-300 transition-all rounded-lg';

  return (
    <nav className='hidden w-[200px] xl:w-[290px] 2xl:w-[360px] lg:flex fixed left-2 overflow-y-scroll'>
      <ul className='w-full'>
        <li className=''>
          <a href='#' className={`${itemStyle}`}>
            <img
              src=''
              alt=''
              className='bg-primary w-7 h-7 rounded-full object-cover'
            />
            <span>Chuck Norris</span>
          </a>
        </li>
        <li>
          <a href='#' className={`${itemStyle}`}>
            <i className='text-primary'>
              <FriendsIcon height='1.75em' width='1.75em' />
            </i>
            <span>Friends</span>
          </a>
        </li>
        <li>
          <a href='#' className={`${itemStyle}`}>
            <i className='text-primary'>
              <GroupsFillIcon height='1.75em' width='1.75em' />
            </i>
            <span>Groups</span>
          </a>
        </li>
        <li>
          <a href='#' className={`${itemStyle}`}>
            <i className='text-primary'>
              <MarketplaceFillIcon height='1.75em' width='1.75em' />
            </i>
            <span>Marketplace</span>
          </a>
        </li>
        <li>
          <a href='#' className={`${itemStyle}`}>
            <i className='text-primary'>
              <FriendsIcon height='1.75em' width='1.75em' />
            </i>
            <span>Watch</span>
          </a>
        </li>
        <li>
          <a href='#' className={`${itemStyle}`}>
            <i className=''>
              <ArrowDownIcon height='1.75em' width='1.75em' />
            </i>
            <span>Show more</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
